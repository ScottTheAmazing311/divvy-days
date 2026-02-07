// Office Map Navigation System

// Define all office locations
const officeLocations = {
    lobby: {
        id: 'lobby',
        name: 'Lobby',
        background: 'divvy_lobby',
        icon: '🏢',
        description: 'The main entrance with the neon Divvy sign'
    },
    your_desk: {
        id: 'your_desk',
        name: 'Your Desk',
        background: 'office_desk',
        icon: '💻',
        description: 'Your workspace in the marketing area'
    },
    conference_room: {
        id: 'conference_room',
        name: 'Conference Room',
        background: 'conference_room',
        icon: '📊',
        description: 'Where the all-hands meetings happen'
    },
    break_room: {
        id: 'break_room',
        name: 'Break Room',
        background: 'break_room',
        icon: '☕',
        description: 'Kitchen area with coffee and snacks'
    },
    sales_floor: {
        id: 'sales_floor',
        name: 'Sales Floor',
        background: 'salesfloor',
        icon: '📞',
        description: 'Where the sales team works'
    },
    sterlings_office: {
        id: 'sterlings_office',
        name: "Sterling's Office",
        background: 'sterlingsoffice',
        icon: '🚪',
        description: "Sterling's private office"
    },
    woodys_office: {
        id: 'woodys_office',
        name: "Woody's Office",
        background: 'woodysoffice',
        icon: '🚪',
        description: "Woody's private office"
    },
    gaming_room: {
        id: 'gaming_room',
        name: 'Gaming Room',
        background: 'gamingroom',
        icon: '🎮',
        description: 'Secret gaming room (exclusive)',
        requiresUnlock: true
    }
};

// Define who might be in which room at which time
// Format: { day, period, location, character, scenario }
const locationEncounters = {
    // Day 1 encounters
    day1_break_room_morning: {
        day: 1,
        period: 2, // Late morning
        location: 'break_room',
        character: 'ramona',
        scenarioId: 'map_day1_ramona_breakroom'
    },
    day1_sales_floor: {
        day: 1,
        period: 3, // Afternoon
        location: 'sales_floor',
        character: 'colby',
        scenarioId: 'map_day1_colby_sales'
    },

    // Day 2 encounters
    day2_conference_room: {
        day: 2,
        period: 1, // Morning (before all-hands)
        location: 'conference_room',
        character: 'jacob',
        scenarioId: 'map_day2_jacob_conference'
    },
    day2_break_room: {
        day: 2,
        period: 3, // Afternoon
        location: 'break_room',
        character: 'scott',
        scenarioId: 'map_day2_scott_breakroom'
    },

    // Day 3 encounters
    day3_sales_floor: {
        day: 3,
        period: 2, // Late morning
        location: 'sales_floor',
        character: 'colby',
        scenarioId: 'map_day3_colby_sales'
    },
    day3_woodys_office: {
        day: 3,
        period: 3, // Afternoon
        location: 'woodys_office',
        character: 'chandler',
        scenarioId: 'map_day3_chandler_office'
    },

    // Day 4 encounters
    day4_break_room: {
        day: 4,
        period: 1, // Morning
        location: 'break_room',
        character: 'jesse',
        scenarioId: 'map_day4_jesse_breakroom'
    },
    day4_conference_room: {
        day: 4,
        period: 3, // Afternoon
        location: 'conference_room',
        character: 'pat',
        scenarioId: 'map_day4_pat_conference'
    },

    // Day 5 encounters
    day5_break_room: {
        day: 5,
        period: 2, // Late morning
        location: 'break_room',
        character: 'casper',
        scenarioId: 'map_day5_casper_breakroom'
    }
};

// Check if a location has someone in it at the current time
function getLocationOccupant(locationId, gameState) {
    const day = gameState.day;
    const period = gameState.period;

    // Find matching encounter
    for (const encounterKey in locationEncounters) {
        const encounter = locationEncounters[encounterKey];
        if (encounter.day === day &&
            encounter.period === period &&
            encounter.location === locationId) {
            return encounter;
        }
    }

    return null;
}

// Check if a location is accessible
function isLocationAccessible(locationId, gameState) {
    const location = officeLocations[locationId];

    // Gaming room requires unlock
    if (location.requiresUnlock) {
        return gameState.coreExperiences?.gamingRoomInvite || false;
    }

    return true;
}

// Show the office map
function showOfficeMap(gameState, returnSceneId) {
    const modal = document.getElementById('map-modal');
    const mapGrid = document.getElementById('office-map-grid');

    // Clear previous content
    mapGrid.innerHTML = '';

    // Create room buttons
    for (const locationKey in officeLocations) {
        const location = officeLocations[locationKey];

        // Check if accessible
        if (!isLocationAccessible(locationKey, gameState)) {
            continue; // Skip locked rooms
        }

        // Check if someone is there
        const occupant = getLocationOccupant(locationKey, gameState);

        const roomBtn = document.createElement('div');
        roomBtn.className = 'map-room-btn';
        if (occupant) {
            roomBtn.classList.add('has-character');
        }

        const roomIcon = document.createElement('div');
        roomIcon.className = 'map-room-icon';
        roomIcon.textContent = location.icon;

        const roomName = document.createElement('div');
        roomName.className = 'map-room-name';
        roomName.textContent = location.name;

        const roomInfo = document.createElement('div');
        if (occupant) {
            roomInfo.className = 'map-room-character';
            const charData = characters[occupant.character];
            roomInfo.textContent = `${charData.name} is here`;
        } else {
            roomInfo.className = 'map-room-empty';
            roomInfo.textContent = 'Empty';
        }

        roomBtn.appendChild(roomIcon);
        roomBtn.appendChild(roomName);
        roomBtn.appendChild(roomInfo);

        // Click handler
        roomBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            navigateToLocation(location, occupant, gameState, returnSceneId);
        });

        mapGrid.appendChild(roomBtn);
    }

    modal.classList.add('active');
}

// Navigate to a location
function navigateToLocation(location, occupant, gameState, returnSceneId) {
    // Store return point
    gameState.mapReturnScene = returnSceneId;

    if (occupant && occupant.scenarioId) {
        // There's someone here - go to their scenario
        // Update map_return scenario to go back to the right place
        if (map_scenarios.map_return) {
            map_scenarios.map_return.choices[0].next = returnSceneId;
        }
        window.gameEngine.goToScene(occupant.scenarioId);
    } else {
        // Empty room - show empty message and allow return
        showEmptyRoom(location, returnSceneId);
    }
}

// Show empty room message
function showEmptyRoom(location, returnSceneId) {
    // Create a temporary empty room scenario
    const emptyRoomScene = {
        background: location.background,
        character: null,
        text: [
            `You walk into ${location.name}.`,
            location.description,
            "There's nobody here right now. Just the quiet hum of the office.",
            "You could explore more or head back to work."
        ],
        choices: [
            {
                id: 'back_to_work',
                text: 'Head back to your desk',
                next: returnSceneId,
                effects: {}
            },
            {
                id: 'open_map_again',
                text: '🗺️ Check the map again',
                next: 'open_map',
                effects: {}
            }
        ]
    };

    // Render the empty room
    window.uiRenderer.transitionToScene(emptyRoomScene, window.gameEngine.state);
}
