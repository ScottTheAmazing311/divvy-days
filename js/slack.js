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

    // Colby conversations - HATES being Slacked
    colby_default: {
        userMessage: "Hey Colby, got a sec?",
        responses: [
            { sender: 'colby', text: "Bro I'm literally on a call right now" },
            { sender: 'colby', text: "Don't slack me unless it's an emergency" },
            { sender: 'colby', text: "I'm trying to close deals here 💪" }
        ],
        relationshipChange: -8
    },

    // Ramona conversations - LOVES being Slacked
    ramona_default: {
        userMessage: "Hey Ramona! How's it going?",
        responses: [
            { sender: 'ramona', text: "Hey!! So glad you reached out! 😊" },
            { sender: 'ramona', text: "I'm doing great! How are you settling in?" },
            { sender: 'ramona', text: "Let me know if you ever want to grab coffee and chat!" }
        ],
        relationshipChange: 8
    },

    // Scott conversations - LOVES being Slacked
    scott_default: {
        userMessage: "Hey Scott! What's up?",
        responses: [
            { sender: 'scott', text: "YOOO what's good! 🎉" },
            { sender: 'scott', text: "Just goofing around as usual" },
            { sender: 'scott', text: "Want to hear my terrible sales pitch of the day? 😂" },
            { sender: 'scott', text: "Actually never mind, you probably have work to do lol" }
        ],
        relationshipChange: 8
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

    // Chandler conversations - DISLIKES being Slacked
    chandler_default: {
        userMessage: "Hey Chandler, what are you working on?",
        responses: [
            { sender: 'chandler', text: "..." },
            { sender: 'chandler', text: "Headphones were in for a reason" },
            { sender: 'chandler', text: "I'll talk when I want to talk" }
        ],
        relationshipChange: -4
    },

    // Casper conversations - LOVES being Slacked
    casper_default: {
        userMessage: "Hey Casper! How's it going?",
        responses: [
            { sender: 'casper', text: "Hey! Doing great, thanks for checking in!" },
            { sender: 'casper', text: "How's your day going? Need any help with anything?" },
            { sender: 'casper', text: "Always here if you want to chat or grab lunch!" }
        ],
        relationshipChange: 7
    },

    // Jesse conversations - LOVES being Slacked
    jesse_default: {
        userMessage: "Hey Jesse! You around?",
        responses: [
            { sender: 'jesse', text: "Yo! What's good? 😄" },
            { sender: 'jesse', text: "Just finished scaring Andre lol" },
            { sender: 'jesse', text: "Want to hear my new music idea? It's wild" }
        ],
        relationshipChange: 7
    },

    // Pat conversations - NEUTRAL
    pat_default: {
        userMessage: "Hey Pat, got a sec?",
        responses: [
            { sender: 'pat', text: "Slacking me during work hours?" },
            { sender: 'pat', text: "Bold move. What's up?" }
        ],
        relationshipChange: 2
    },

    // Jacob conversations - NEUTRAL
    jacob_default: {
        userMessage: "Hey Jacob, how's it going?",
        responses: [
            { sender: 'jacob', text: "Hey! Going well, thanks" },
            { sender: 'jacob', text: "Just working through some product specs" }
        ],
        relationshipChange: 3
    },

    // Andre conversations - LIKES
    andre_default: {
        userMessage: "Hey Andre, got a minute?",
        responses: [
            { sender: 'andre', text: "Sure-what's-up!" },
            { sender: 'andre', text: "Always-got-time-for-my-team" },
            { sender: 'andre', text: "What-can-I-help-with?" }
        ],
        relationshipChange: 5
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

    // Try specific conversation first (time-based)
    if (slackConversations[conversationKey]) {
        return slackConversations[conversationKey];
    }

    // Try character-specific default
    const characterDefault = `${characterId}_default`;
    if (slackConversations[characterDefault]) {
        return slackConversations[characterDefault];
    }

    // Fall back to generic default positive
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
