// Save/Load system using localStorage

const AUTOSAVE_KEY = 'divvy_autosave';
const SAVE_SLOT_PREFIX = 'divvy_save_';
const META_KEY = 'divvy_meta';
const MAX_SAVE_SLOTS = 3;

// Auto-save game state
function autoSave(gameState) {
    try {
        const saveData = {
            gameState: gameState,
            timestamp: Date.now(),
            version: '1.0'
        };
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(saveData));
        return true;
    } catch (e) {
        console.error('Failed to auto-save:', e);
        return false;
    }
}

// Load auto-save
function loadAutoSave() {
    try {
        const data = localStorage.getItem(AUTOSAVE_KEY);
        if (!data) return null;

        const saveData = JSON.parse(data);
        return saveData.gameState;
    } catch (e) {
        console.error('Failed to load auto-save:', e);
        return null;
    }
}

// Save to specific slot
function saveToSlot(slotNumber, gameState) {
    if (slotNumber < 1 || slotNumber > MAX_SAVE_SLOTS) {
        return false;
    }

    try {
        const saveData = {
            gameState: gameState,
            timestamp: Date.now(),
            version: '1.0',
            slotNumber: slotNumber
        };
        localStorage.setItem(SAVE_SLOT_PREFIX + slotNumber, JSON.stringify(saveData));
        return true;
    } catch (e) {
        console.error('Failed to save to slot:', e);
        return false;
    }
}

// Load from specific slot
function loadFromSlot(slotNumber) {
    if (slotNumber < 1 || slotNumber > MAX_SAVE_SLOTS) {
        return null;
    }

    try {
        const data = localStorage.getItem(SAVE_SLOT_PREFIX + slotNumber);
        if (!data) return null;

        const saveData = JSON.parse(data);
        return saveData.gameState;
    } catch (e) {
        console.error('Failed to load from slot:', e);
        return null;
    }
}

// Get save slot info
function getSaveSlotInfo(slotNumber) {
    try {
        const data = localStorage.getItem(SAVE_SLOT_PREFIX + slotNumber);
        if (!data) {
            return {
                slotNumber: slotNumber,
                isEmpty: true
            };
        }

        const saveData = JSON.parse(data);
        const gs = saveData.gameState;

        return {
            slotNumber: slotNumber,
            isEmpty: false,
            timestamp: saveData.timestamp,
            day: gs.currentDay,
            period: gs.currentPeriod,
            friendCount: Object.keys(gs.relationships).filter(charId => {
                const score = gs.relationships[charId].score;
                const status = getRelationshipStatus(charId, score);
                return status === 'Friend';
            }).length
        };
    } catch (e) {
        console.error('Failed to get save slot info:', e);
        return {
            slotNumber: slotNumber,
            isEmpty: true
        };
    }
}

// Get all save slots info
function getAllSaveSlots() {
    const slots = [];
    for (let i = 1; i <= MAX_SAVE_SLOTS; i++) {
        slots.push(getSaveSlotInfo(i));
    }
    return slots;
}

// Delete save slot
function deleteSaveSlot(slotNumber) {
    if (slotNumber < 1 || slotNumber > MAX_SAVE_SLOTS) {
        return false;
    }

    try {
        localStorage.removeItem(SAVE_SLOT_PREFIX + slotNumber);
        return true;
    } catch (e) {
        console.error('Failed to delete save slot:', e);
        return false;
    }
}

// Meta progression (endings unlocked across playthroughs)
function loadMetaProgress() {
    try {
        const data = localStorage.getItem(META_KEY);
        if (!data) {
            return {
                endingsUnlocked: [],
                playthroughCount: 0
            };
        }
        return JSON.parse(data);
    } catch (e) {
        console.error('Failed to load meta progress:', e);
        return {
            endingsUnlocked: [],
            playthroughCount: 0
        };
    }
}

// Save meta progression
function saveMetaProgress(metaData) {
    try {
        localStorage.setItem(META_KEY, JSON.stringify(metaData));
        return true;
    } catch (e) {
        console.error('Failed to save meta progress:', e);
        return false;
    }
}

// Unlock ending in meta progression
function unlockEnding(endingId) {
    const meta = loadMetaProgress();
    if (!meta.endingsUnlocked.includes(endingId)) {
        meta.endingsUnlocked.push(endingId);
        saveMetaProgress(meta);
    }
}

// Increment playthrough count
function incrementPlaythroughCount() {
    const meta = loadMetaProgress();
    meta.playthroughCount++;
    saveMetaProgress(meta);
    return meta.playthroughCount;
}

// Format timestamp for display
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString();
}

// Check if there's an auto-save available
function hasAutoSave() {
    return localStorage.getItem(AUTOSAVE_KEY) !== null;
}

// Clear all saves (for testing)
function clearAllSaves() {
    localStorage.removeItem(AUTOSAVE_KEY);
    for (let i = 1; i <= MAX_SAVE_SLOTS; i++) {
        localStorage.removeItem(SAVE_SLOT_PREFIX + i);
    }
}
