// Main Game Engine

class GameEngine {
    constructor() {
        this.state = this.createInitialState();
        this.slackModal = null;
    }

    // Create initial game state
    createInitialState() {
        const relationships = {};
        Object.keys(characters).forEach(charId => {
            relationships[charId] = {
                status: 'Friend',
                score: 0
            };
        });

        return {
            currentDay: 1,
            currentPeriod: 1,
            currentSceneId: 'day1_morning_start',
            relationships: relationships,
            metCharacters: [], // Track which characters have been encountered
            badges: [],
            coreExperiences: {
                companyMeeting: null,
                sevenElevenWalk: false,
                gamingRoomInvite: false
            },
            choicesMade: [],
            lockedPaths: [],
            playthrough: 1,
            endingsUnlocked: [],
            slackMessagesUsed: 0
        };
    }

    // Start a new game
    newGame() {
        this.state = this.createInitialState();
        const meta = loadMetaProgress();
        this.state.playthrough = meta.playthroughCount + 1;
        this.goToScene('day1_morning_start');
    }

    // Continue from auto-save
    continueGame() {
        const savedState = loadAutoSave();
        if (savedState) {
            this.state = savedState;
            this.goToScene(this.state.currentSceneId);
        } else {
            this.newGame();
        }
    }

    // Save to specific slot
    saveToSlot(slotNumber) {
        const success = saveToSlot(slotNumber, this.state);
        if (success) {
            alert(`Game saved to Slot ${slotNumber}!`);
        } else {
            alert('Failed to save game.');
        }
    }

    // Load from specific slot
    loadFromSlot(slotNumber) {
        const savedState = loadFromSlot(slotNumber);
        if (savedState) {
            this.state = savedState;
            this.goToScene(this.state.currentSceneId);
            alert(`Game loaded from Slot ${slotNumber}!`);
        } else {
            alert('Failed to load game.');
        }
    }

    // Navigate to a scene
    async goToScene(sceneId) {
        const scene = getScenario(sceneId);
        if (!scene) {
            console.error('Scene not found:', sceneId);
            return;
        }

        // Check if this is the ending sequence
        if (sceneId === 'ending_sequence') {
            this.triggerEnding();
            return;
        }

        // Update state
        this.state.currentSceneId = sceneId;
        this.state.currentDay = scene.day;
        this.state.currentPeriod = scene.period;

        // Track character encounter (mark as met)
        if (scene.character && !this.state.metCharacters.includes(scene.character)) {
            this.state.metCharacters.push(scene.character);
        }

        // Update UI
        await uiRenderer.transitionToScene(scene, this.state);
        uiRenderer.updateSidebars(this.state);

        // Auto-save
        autoSave(this.state);
    }

    // Make a choice
    makeChoice(choiceId) {
        const scene = getScenario(this.state.currentSceneId);
        if (!scene) return;

        const choice = scene.choices.find(c => c.id === choiceId);
        if (!choice) return;

        // Record choice
        this.state.choicesMade.push({
            sceneId: this.state.currentSceneId,
            choiceId: choiceId,
            timestamp: Date.now()
        });

        // Apply effects
        if (choice.effects) {
            this.applyEffects(choice.effects);
        }

        // Handle special choice types
        if (choice.type === 'slack') {
            this.openSlackModal(choice.next);
            return;
        }

        // Navigate to next scene
        this.goToScene(choice.next);
    }

    // Apply choice effects
    applyEffects(effects) {
        // Apply relationship changes
        if (effects.relationships) {
            Object.keys(effects.relationships).forEach(charId => {
                if (this.state.relationships[charId]) {
                    this.state.relationships[charId].score += effects.relationships[charId];
                }
            });
        }

        // Unlock badges
        if (effects.badges) {
            effects.badges.forEach(badgeId => {
                if (!this.state.badges.includes(badgeId)) {
                    this.state.badges.push(badgeId);
                    uiRenderer.showBadgeUnlock(badgeId);
                }
            });
        }

        // Update core experiences
        if (effects.coreExperience) {
            const { key, value } = effects.coreExperience;
            this.state.coreExperiences[key] = value;
        }
    }

    // Open Slack modal
    openSlackModal(nextSceneId = null) {
        const modal = document.getElementById('slack-modal');
        const characterSelect = document.getElementById('slack-character-select');
        const conversation = document.getElementById('slack-conversation');
        const characterList = document.getElementById('slack-character-list');

        // Show character selection
        characterSelect.style.display = 'block';
        conversation.style.display = 'none';

        // Clear previous characters
        characterList.innerHTML = '';

        // Only show characters that have been met
        const metCharacters = this.state.metCharacters || [];

        if (metCharacters.length === 0) {
            const placeholder = document.createElement('p');
            placeholder.textContent = 'You haven\'t met anyone yet!';
            placeholder.style.textAlign = 'center';
            placeholder.style.padding = '40px';
            characterList.appendChild(placeholder);
        } else {
            // Populate character list with only met characters
            metCharacters.forEach(charId => {
                const char = characters[charId];
                if (!char) return;

                const available = canSlackCharacter(char.id, this.state);
                const status = getRelationshipStatus(char.id, this.state.relationships[char.id].score);
                const relationship = this.state.relationships[char.id];

                const btn = document.createElement('button');
                btn.className = 'slack-character-btn';
                if (!available) {
                    btn.classList.add('disabled');
                }

                const portrait = document.createElement('div');
                portrait.className = 'slack-character-portrait';

                // Try to load portrait image, fallback to color
                const img = new Image();
                img.onload = () => {
                    portrait.style.backgroundImage = `url('${char.portrait}')`;
                    portrait.style.backgroundSize = 'cover';
                    portrait.style.backgroundPosition = 'center';
                };
                img.onerror = () => {
                    portrait.style.backgroundColor = char.color;
                };
                img.src = char.portrait;

                const name = document.createElement('div');
                name.className = 'slack-character-name';
                name.textContent = char.name;

                const statusDiv = document.createElement('div');
                statusDiv.className = 'slack-character-status';
                // Show slack preference hint
                const slackPref = char.slackPreference || 0;
                if (slackPref > 5) {
                    statusDiv.textContent = `${status} ❤️`;
                } else if (slackPref < 0) {
                    statusDiv.textContent = `${status} 💀`;
                } else {
                    statusDiv.textContent = status;
                }

                btn.appendChild(portrait);
                btn.appendChild(name);
                btn.appendChild(statusDiv);

                if (available) {
                    btn.addEventListener('click', () => {
                        this.sendSlackMessage(char.id, nextSceneId);
                    });
                }

                characterList.appendChild(btn);
            });
        }

        modal.classList.add('active');

        // Set up close button
        document.getElementById('slack-close').onclick = () => {
            modal.classList.remove('active');
        };
    }

    // Send Slack message to character
    sendSlackMessage(characterId, nextSceneId = null) {
        const characterSelect = document.getElementById('slack-character-select');
        const conversation = document.getElementById('slack-conversation');
        const messagesContainer = document.getElementById('slack-messages');

        // Hide character select, show conversation
        characterSelect.style.display = 'none';
        conversation.style.display = 'flex';

        // Get conversation data
        const convo = getSlackConversation(
            characterId,
            this.state.currentDay,
            this.state.currentPeriod
        );

        // Clear previous messages
        messagesContainer.innerHTML = '';

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'slack-message user-message';
        userMsg.innerHTML = `
            <div class="slack-message-header">
                <div class="slack-message-sender">You</div>
                <div class="slack-message-time">${getCurrentTime()}</div>
            </div>
            <div class="slack-message-text">${convo.userMessage}</div>
        `;
        messagesContainer.appendChild(userMsg);

        // Add character responses with delay
        let delay = 1000;
        convo.responses.forEach((response, index) => {
            setTimeout(() => {
                const char = characters[response.sender];
                const charMsg = document.createElement('div');
                charMsg.className = 'slack-message character-message';

                const avatar = document.createElement('div');
                avatar.className = 'slack-message-avatar';
                avatar.style.backgroundColor = char.color;

                charMsg.innerHTML = `
                    <div class="slack-message-header">
                        <div class="slack-message-sender">${char.name}</div>
                        <div class="slack-message-time">${getCurrentTime()}</div>
                    </div>
                    <div class="slack-message-text">${response.text}</div>
                `;
                messagesContainer.appendChild(charMsg);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, delay);
            delay += 1500;
        });

        // Use character's slack preference for relationship change
        const char = characters[characterId];
        const slackPref = char.slackPreference || convo.relationshipChange;

        // Apply relationship change
        if (this.state.relationships[characterId]) {
            this.state.relationships[characterId].score += slackPref;
        }

        this.state.slackMessagesUsed++;

        // Update UI after relationship change
        window.uiRenderer.updateRelationships(this.state);

        // Set up continue button
        document.getElementById('slack-continue').onclick = () => {
            document.getElementById('slack-modal').classList.remove('active');
            // If nextSceneId provided, go to that scene; otherwise just close
            if (nextSceneId) {
                this.goToScene(nextSceneId);
            }
        };
    }

    // Trigger ending
    triggerEnding() {
        const endingResult = calculateEnding(this.state);

        // Unlock ending in meta progression
        unlockEnding(endingResult.ending.id);
        incrementPlaythroughCount();

        // Add final badge based on ending
        if (endingResult.ending.score >= 9) {
            if (!this.state.badges.includes('perfect_week')) {
                this.state.badges.push('perfect_week');
            }
        } else if (endingResult.ending.score >= 5) {
            if (!this.state.badges.includes('survivor')) {
                this.state.badges.push('survivor');
            }
        }

        // Show ending screen
        uiRenderer.showEndingScreen(endingResult);
    }
}

// Initialize game when page loads
let gameEngine;

document.addEventListener('DOMContentLoaded', () => {
    gameEngine = new GameEngine();
    window.gameEngine = gameEngine; // Make accessible globally

    // Set up title screen buttons
    const titleScreen = document.getElementById('title-screen');
    const titleNewGame = document.getElementById('title-new-game');
    const titleContinue = document.getElementById('title-continue');
    const titleLoad = document.getElementById('title-load');

    // Show continue button if auto-save exists
    if (hasAutoSave()) {
        titleContinue.style.display = 'flex';
    }

    titleNewGame.addEventListener('click', () => {
        titleScreen.classList.remove('active');
        gameEngine.newGame();
    });

    titleContinue.addEventListener('click', () => {
        titleScreen.classList.remove('active');
        gameEngine.continueGame();
    });

    titleLoad.addEventListener('click', () => {
        titleScreen.classList.remove('active');
        setTimeout(() => {
            uiRenderer.showSaveLoadModal('load');
        }, 100);
    });
});
