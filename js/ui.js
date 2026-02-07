// UI Rendering system

class UIRenderer {
    constructor() {
        this.sceneContainer = document.getElementById('scene-container');
        this.sceneBackground = document.getElementById('scene-background');
        this.backgroundLabel = document.getElementById('background-label');
        this.characterPortrait = document.getElementById('character-portrait');
        this.portraitPlaceholder = document.getElementById('portrait-placeholder');
        this.characterName = document.getElementById('character-name');
        this.textContent = document.getElementById('text-content');
        this.choicesContainer = document.getElementById('choices-container');
        this.dayDisplay = document.getElementById('day-display');
        this.periodDisplay = document.getElementById('period-display');
        this.relationshipsContent = document.getElementById('relationships-content');
        this.badgesList = document.getElementById('badges-list');
        this.coreExpCount = document.getElementById('core-exp-count');
        this.friendsCount = document.getElementById('friends-count');
        this.badgeNotification = document.getElementById('badge-notification');
        this.notificationDescription = document.getElementById('notification-description');
    }

    // Transition to new scene with fade effect
    async transitionToScene(scene, gameState) {
        // Fade out
        await this.fadeOut();

        // Update all scene elements
        this.updateBackground(scene.background);
        this.updateCharacter(scene.character);
        this.updateText(scene.text);
        this.updateChoices(scene.choices, gameState);
        this.updateDayPeriod(scene.day, scene.periodName);

        // Fade in
        await this.fadeIn();
    }

    // Fade out effect
    fadeOut() {
        return new Promise((resolve) => {
            this.sceneBackground.classList.add('fade-out');
            this.characterPortrait.classList.add('fade-out');
            setTimeout(resolve, 300);
        });
    }

    // Fade in effect
    fadeIn() {
        return new Promise((resolve) => {
            this.sceneBackground.classList.remove('fade-out');
            this.characterPortrait.classList.remove('fade-out');
            this.sceneBackground.classList.add('fade-in');
            this.characterPortrait.classList.add('fade-in');
            setTimeout(() => {
                this.sceneBackground.classList.remove('fade-in');
                this.characterPortrait.classList.remove('fade-in');
                resolve();
            }, 300);
        });
    }

    // Update background
    updateBackground(backgroundId) {
        if (!backgroundId) {
            this.sceneBackground.style.backgroundImage = '';
            this.sceneBackground.style.backgroundColor = '#1a1a2e';
            this.backgroundLabel.textContent = '';
            return;
        }

        const bgImage = getBackgroundImage(backgroundId);
        const bgColor = getBackgroundColor(backgroundId);
        const bgName = getBackgroundName(backgroundId);

        // Try to load image, fallback to color if not found
        const img = new Image();
        img.onload = () => {
            this.sceneBackground.style.backgroundImage = `linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.7)), url('${bgImage}')`;
            this.sceneBackground.style.backgroundSize = 'cover';
            this.sceneBackground.style.backgroundPosition = 'center';
        };
        img.onerror = () => {
            // Fallback to color if image doesn't exist
            this.sceneBackground.style.backgroundImage = '';
            this.sceneBackground.style.backgroundColor = bgColor;
        };
        img.src = bgImage;

        this.backgroundLabel.textContent = bgName;
    }

    // Update character portrait
    updateCharacter(characterId) {
        if (!characterId) {
            this.characterPortrait.style.display = 'none';
            return;
        }

        const character = characters[characterId];
        if (!character) {
            this.characterPortrait.style.display = 'none';
            return;
        }

        this.characterPortrait.style.display = 'flex';

        // Try to load portrait image, fallback to colored rectangle
        const img = new Image();
        img.onload = () => {
            this.portraitPlaceholder.style.backgroundImage = `url('${character.portrait}')`;
            this.portraitPlaceholder.style.backgroundSize = 'cover';
            this.portraitPlaceholder.style.backgroundPosition = 'center';
            this.portraitPlaceholder.style.backgroundColor = 'transparent';
        };
        img.onerror = () => {
            // Fallback to color if image doesn't exist
            this.portraitPlaceholder.style.backgroundImage = '';
            this.portraitPlaceholder.style.backgroundColor = character.color;
        };
        img.src = character.portrait;

        this.characterName.textContent = character.name;
    }

    // Update text content
    updateText(textArray) {
        this.textContent.innerHTML = '';
        textArray.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            this.textContent.appendChild(p);
        });
    }

    // Update choices
    updateChoices(choices, gameState) {
        this.choicesContainer.innerHTML = '';

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'btn btn-choice';

            // Special styling for Slack choice
            if (choice.type === 'slack') {
                button.classList.add('slack-choice');
            }

            button.textContent = choice.text;

            // Check if choice should be disabled
            // (Future: add logic for locked paths, relationship requirements, etc.)

            button.addEventListener('click', () => {
                window.gameEngine.makeChoice(choice.id);
            });

            this.choicesContainer.appendChild(button);
        });
    }

    // Update day and period display
    updateDayPeriod(day, periodName) {
        this.dayDisplay.textContent = `Day ${day}`;
        this.periodDisplay.textContent = periodName;
    }

    // Update relationships sidebar
    updateRelationships(gameState) {
        this.relationshipsContent.innerHTML = '';

        // Only show characters that have been met
        const metCharacters = gameState.metCharacters || [];

        if (metCharacters.length === 0) {
            // Show placeholder message if no one has been met yet
            const placeholder = document.createElement('div');
            placeholder.style.padding = '20px';
            placeholder.style.textAlign = 'center';
            placeholder.style.color = '#888';
            placeholder.style.fontStyle = 'italic';
            placeholder.innerHTML = 'Meet characters to see relationships...';
            this.relationshipsContent.appendChild(placeholder);
            return;
        }

        metCharacters.forEach(charId => {
            const char = characters[charId];
            if (!char) return;

            const rel = gameState.relationships[charId];
            const status = getRelationshipStatus(charId, rel.score);
            const statusClass = getStatusClass(status);

            const item = document.createElement('div');
            item.className = `relationship-item ${statusClass}`;

            item.innerHTML = `
                <div class="relationship-info">
                    <div class="relationship-name" data-character-id="${charId}">${char.name}</div>
                    <div class="relationship-status">
                        <span class="status-icon ${statusClass}"></span>
                        <span>${status}</span>
                    </div>
                </div>
                <div class="relationship-score">${rel.score >= 0 ? '+' : ''}${rel.score}</div>
            `;

            // Add click handler to character name
            const nameElement = item.querySelector('.relationship-name');
            nameElement.addEventListener('click', () => this.showCharacterBio(charId));

            this.relationshipsContent.appendChild(item);
        });
    }

    // Update badges sidebar
    updateBadges(gameState) {
        this.badgesList.innerHTML = '';

        gameState.badges.forEach(badgeId => {
            const badge = getBadge(badgeId);
            if (!badge) return;

            const item = document.createElement('div');
            item.className = 'badge-item';
            if (badge.isCore) {
                item.classList.add('core-badge');
            }

            item.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-info">
                    <div class="badge-name">${badge.name}</div>
                    <div class="badge-description">${badge.description}</div>
                </div>
            `;

            this.badgesList.appendChild(item);
        });

        // Update progress tracker
        const coreExpCount = countCoreExperiences(gameState.badges);
        this.coreExpCount.textContent = `${coreExpCount}/3`;

        const friendCount = Object.keys(gameState.relationships).filter(charId => {
            const score = gameState.relationships[charId].score;
            const status = getRelationshipStatus(charId, score);
            return status === 'Attempting' || status === 'Friend';
        }).length;
        this.friendsCount.textContent = `${friendCount}/5`;
    }

    // Update all sidebars
    updateSidebars(gameState) {
        this.updateRelationships(gameState);
        this.updateBadges(gameState);
    }

    // Show badge unlock notification
    showBadgeUnlock(badgeId) {
        const badge = getBadge(badgeId);
        if (!badge) return;

        this.notificationDescription.textContent = badge.name;
        this.badgeNotification.classList.add('show');

        setTimeout(() => {
            this.badgeNotification.classList.remove('show');
        }, 3000);
    }

    // Show ending screen
    showEndingScreen(endingResult) {
        const modal = document.getElementById('ending-modal');
        const content = document.getElementById('ending-content');

        const ending = endingResult.ending;
        const stats = endingResult.stats;

        let textHtml = '';
        ending.text.forEach(paragraph => {
            textHtml += `<p>${paragraph}</p>`;
        });

        content.innerHTML = `
            <div class="ending-title">${ending.title}</div>
            <div class="ending-subtitle">${ending.subtitle}</div>
            <div class="ending-text">${textHtml}</div>
            <div class="ending-stats">
                <div class="ending-stat">
                    <span class="ending-stat-label">Friends Made:</span>
                    <span class="ending-stat-value">${stats.friendCount}</span>
                </div>
                <div class="ending-stat">
                    <span class="ending-stat-label">Core Experiences:</span>
                    <span class="ending-stat-value">${stats.coreExpCount}/3</span>
                </div>
                <div class="ending-stat">
                    <span class="ending-stat-label">Badges Earned:</span>
                    <span class="ending-stat-value">${stats.badgesEarned}</span>
                </div>
            </div>
            <div class="ending-actions">
                <button class="ending-btn primary" id="play-again-btn">Play Again</button>
                <button class="ending-btn" id="view-endings-btn">View All Endings</button>
            </div>
        `;

        modal.style.display = 'flex';

        // Set up button handlers
        document.getElementById('play-again-btn').addEventListener('click', () => {
            modal.style.display = 'none';
            window.gameEngine.newGame();
        });

        document.getElementById('view-endings-btn').addEventListener('click', () => {
            this.showEndingsGallery();
        });
    }

    // Show endings gallery
    showEndingsGallery() {
        const modal = document.getElementById('menu-modal');
        const modalBody = modal.querySelector('.modal-body');
        const modalTitle = modal.querySelector('.modal-header h2');

        modalTitle.textContent = 'Endings Gallery';

        const meta = loadMetaProgress();
        const allEndings = getAllEndings();

        let galleryHtml = '<div style="max-height: 60vh; overflow-y: auto;">';

        allEndings.forEach(ending => {
            const unlocked = meta.endingsUnlocked.includes(ending.id);
            const lockIcon = unlocked ? '🔓' : '🔒';
            const opacity = unlocked ? '1' : '0.5';

            galleryHtml += `
                <div style="padding: 15px; margin-bottom: 10px; background-color: #0f3460; border-radius: 8px; opacity: ${opacity};">
                    <div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">
                        ${lockIcon} ${ending.subtitle}
                    </div>
                    <div style="font-size: 16px; color: #e94560; margin-bottom: 5px;">
                        ${unlocked ? ending.title : '???'}
                    </div>
                    ${unlocked ? `<div style="font-size: 14px; color: #ccc;">${ending.text[0]}</div>` : ''}
                </div>
            `;
        });

        galleryHtml += '</div>';
        galleryHtml += '<button class="menu-option-btn" id="back-to-menu-btn">← Back to Menu</button>';

        modalBody.innerHTML = galleryHtml;
        modal.classList.add('active');

        document.getElementById('back-to-menu-btn').addEventListener('click', () => {
            modal.classList.remove('active');
            this.showMenu();
        });
    }

    // Show main menu
    showMenu() {
        const modal = document.getElementById('menu-modal');
        modal.classList.add('active');
    }

    // Show save/load modal
    showSaveLoadModal(mode) {
        const modal = document.getElementById('save-load-modal');
        const title = document.getElementById('save-load-title');
        const slotsContainer = document.getElementById('save-slots');

        title.textContent = mode === 'save' ? 'Save Game' : 'Load Game';

        const slots = getAllSaveSlots();
        slotsContainer.innerHTML = '';

        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'save-slot' + (slot.isEmpty ? ' empty' : '');

            if (slot.isEmpty) {
                slotDiv.innerHTML = `
                    <div class="save-slot-header">
                        <div class="save-slot-title">Slot ${slot.slotNumber}</div>
                    </div>
                    <div class="save-slot-info">Empty Slot</div>
                `;
            } else {
                slotDiv.innerHTML = `
                    <div class="save-slot-header">
                        <div class="save-slot-title">Slot ${slot.slotNumber}</div>
                        <div class="save-slot-date">${formatTimestamp(slot.timestamp)}</div>
                    </div>
                    <div class="save-slot-info">
                        Day ${slot.day} - ${getPeriodName(slot.period)} | ${slot.friendCount} Friends
                    </div>
                `;
            }

            slotDiv.addEventListener('click', () => {
                if (mode === 'save') {
                    window.gameEngine.saveToSlot(slot.slotNumber);
                    modal.classList.remove('active');
                } else {
                    if (!slot.isEmpty) {
                        window.gameEngine.loadFromSlot(slot.slotNumber);
                        modal.classList.remove('active');
                    }
                }
            });

            slotsContainer.appendChild(slotDiv);
        });

        modal.classList.add('active');
    }

    // Show character bio modal
    showCharacterBio(characterId) {
        const character = characters[characterId];
        if (!character) return;

        const modal = document.getElementById('character-bio-modal');

        // Populate modal with character data
        document.getElementById('character-bio-name').textContent = character.name;

        // Show the narrative bio
        document.getElementById('character-bio-text').textContent = character.bio || 'No bio available.';

        // Set portrait with character color as background
        const portraitDiv = document.getElementById('character-bio-portrait');
        portraitDiv.style.backgroundColor = character.color;

        // Try to load character image
        const img = new Image();
        img.onload = () => {
            portraitDiv.style.backgroundImage = `url('${character.portrait}')`;
            portraitDiv.style.backgroundSize = 'cover';
            portraitDiv.style.backgroundPosition = 'center';
        };
        img.onerror = () => {
            // Keep the color background if image doesn't load
            portraitDiv.style.backgroundImage = '';
        };
        img.src = character.portrait;

        // Show the modal
        modal.classList.add('active');
    }
}

// Initialize UI when DOM is loaded
let uiRenderer;
document.addEventListener('DOMContentLoaded', () => {
    uiRenderer = new UIRenderer();

    // Set up modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').classList.remove('active');
        });
    });

    // Set up header buttons
    document.getElementById('save-btn').addEventListener('click', () => {
        uiRenderer.showSaveLoadModal('save');
    });

    document.getElementById('load-btn').addEventListener('click', () => {
        uiRenderer.showSaveLoadModal('load');
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
        uiRenderer.showMenu();
    });

    document.getElementById('map-btn').addEventListener('click', () => {
        const currentSceneId = window.gameEngine.state.currentSceneId;
        showOfficeMap(window.gameEngine.state, currentSceneId);
    });

    // Set up menu buttons
    document.getElementById('new-game-btn').addEventListener('click', () => {
        if (confirm('Start a new game? Current progress will be lost.')) {
            document.getElementById('menu-modal').classList.remove('active');
            window.gameEngine.newGame();
        }
    });

    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('menu-modal').classList.remove('active');
    });

    document.getElementById('endings-btn').addEventListener('click', () => {
        uiRenderer.showEndingsGallery();
    });

    document.getElementById('about-btn').addEventListener('click', () => {
        alert('Divvy Days - A Visual Novel\n\nVersion 1.0\n\nMade with ❤️ for Divvy');
    });

    // Set up sidebar toggles for mobile
    document.getElementById('relationships-toggle').addEventListener('click', () => {
        document.getElementById('relationships-sidebar').classList.toggle('expanded');
    });

    document.getElementById('badges-toggle').addEventListener('click', () => {
        document.getElementById('badges-sidebar').classList.toggle('expanded');
    });

    // Click sidebar header to toggle on mobile
    document.querySelectorAll('.sidebar-header').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.sidebar').classList.toggle('expanded');
        });
    });
});
