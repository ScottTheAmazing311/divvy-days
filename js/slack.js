// Slack messaging system

// Slack conversation data
const slackConversations = {
    // Format: "characterId_day_period"

    // Andre conversations
    andre_1_2: {
        userMessage: "Hey Andre, want to grab coffee?",
        responses: [
            { sender: 'andre', text: "Sure! I was just about to take a break. Let's go to the kitchen." },
            { sender: 'andre', text: "So how's your first day going? Getting settled in?" }
        ],
        relationshipChange: 5
    },
    andre_1_3: {
        userMessage: "Hey, got any lunch plans?",
        responses: [
            { sender: 'andre', text: "Not yet! Want to check out that new sandwich place?" },
            { sender: 'andre', text: "I hear they have great subs." }
        ],
        relationshipChange: 5
    },

    // Jordan conversations
    jordan_1_2: {
        userMessage: "Hey Jordan, how's the project going?",
        responses: [
            { sender: 'jordan', text: "Oh hey! It's going well, thanks for asking." },
            { sender: 'jordan', text: "We're on track to ship next week. Want to grab lunch later?" }
        ],
        relationshipChange: 5
    },
    jordan_1_3: {
        userMessage: "Want to grab lunch together?",
        responses: [
            { sender: 'jordan', text: "I'd love to! Let me just finish this email." },
            { sender: 'jordan', text: "Meet you in the lobby in 5?" }
        ],
        relationshipChange: 5
    },

    // Colby conversations
    colby_1_2: {
        userMessage: "Hey Colby, quick question about the marketing docs",
        responses: [
            { sender: 'colby', text: "Sure, what's up?" },
            { sender: 'colby', text: "Always happy to help a fellow marketing person!" }
        ],
        relationshipChange: 5
    },

    // Ramona conversations
    ramona_1_2: {
        userMessage: "Hey Ramona, love your design work!",
        responses: [
            { sender: 'ramona', text: "Aww thanks! That's so sweet 😊" },
            { sender: 'ramona', text: "Let me know if you ever want to chat about design stuff!" }
        ],
        relationshipChange: 5
    },

    // Woody conversations
    woody_2_1: {
        userMessage: "Hey Woody! How's it going?",
        responses: [
            { sender: 'woody', text: "Hey! Going good, just debugging some code." },
            { sender: 'woody', text: "You settling in okay?" }
        ],
        relationshipChange: 5
    },

    // Skylar conversations
    skylar_2_2: {
        userMessage: "Hey Skylar, got a minute to chat?",
        responses: [
            { sender: 'skylar', text: "Sure! What's on your mind?" },
            { sender: 'skylar', text: "I'm always happy to help new folks get oriented." }
        ],
        relationshipChange: 5
    },

    // Tones conversations
    tones_2_2: {
        userMessage: "Hey Tones, how are the sales going?",
        responses: [
            { sender: 'tones', text: "Crushing it! Just closed a big deal 💪" },
            { sender: 'tones', text: "How are you liking Divvy so far?" }
        ],
        relationshipChange: 5
    },

    // Blake conversations
    blake_2_3: {
        userMessage: "Hi Blake, thanks for the all-hands earlier",
        responses: [
            { sender: 'blake', text: "Of course! Glad you were there." },
            { sender: 'blake', text: "Let me know if you have any questions about the direction we're heading." }
        ],
        relationshipChange: 7
    },

    // Default/generic conversations
    default_positive: {
        userMessage: "Hey, how's it going?",
        responses: [
            { sender: 'character', text: "Hey! Going well, how about you?" },
            { sender: 'character', text: "Good to hear from you!" }
        ],
        relationshipChange: 3
    },

    default_neutral: {
        userMessage: "Hey, got a quick question",
        responses: [
            { sender: 'character', text: "Sure, what's up?" }
        ],
        relationshipChange: 2
    }
};

// Get Slack conversation for character at current game state
function getSlackConversation(characterId, day, period) {
    const conversationKey = `${characterId}_${day}_${period}`;

    // Try specific conversation first
    if (slackConversations[conversationKey]) {
        return slackConversations[conversationKey];
    }

    // Fall back to default positive
    const defaultConv = { ...slackConversations.default_positive };
    defaultConv.responses = defaultConv.responses.map(r => ({
        ...r,
        sender: characterId
    }));
    return defaultConv;
}

// Get current time for Slack timestamp
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minuteStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minuteStr} ${ampm}`;
}

// Check if character can receive Slack messages
function canSlackCharacter(characterId, gameState) {
    // Check if character exists
    if (!characters[characterId]) {
        return false;
    }

    // Check relationship status
    const relationship = gameState.relationships[characterId];
    if (!relationship) {
        return false;
    }

    const status = getRelationshipStatus(characterId, relationship.score);

    // Can't Slack characters who dislike you or are not interested
    return status !== 'Dislikes' && status !== 'Not Interested';
}

// Get list of characters available for Slack
function getAvailableSlackCharacters(gameState) {
    return Object.keys(characters).filter(charId =>
        canSlackCharacter(charId, gameState)
    );
}
