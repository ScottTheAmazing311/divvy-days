// Character definitions with relationship thresholds and personality traits
const characters = {
    andre: {
        id: 'andre',
        name: 'Andre',
        role: 'Director of Revenue Operations',
        color: '#3498db',
        portrait: 'assets/characters/andre.png',
        personality: ['Friendly', 'Helpful', 'Slightly awkward with social stuff', 'Talks fast'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Mentorship', 'Solving hard problems', 'Team collaboration'],
        social: 'Genuinely wants to help new people feel comfortable',
        likes: ['When people ask questions', 'Honesty', 'Tech discussions'],
        dislikes: ['Office politics', 'Being interrupted mid-thought'],
        quirk: 'Always drinking energy drinks, explains things like a tutorial',
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
        }
    },
    jacob: {
        id: 'jacob',
        name: 'Jacob',
        role: 'Lead Product Manager',
        color: '#1abc9c',
        portrait: 'assets/characters/jacob.png',
        personality: ['Friendly', 'Polite', 'Tech-focused'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Vision', 'Curiosity', 'Apple products', 'Respect'],
        social: 'Busy but polite, will talk tech',
        likes: ['Apple', 'Design', 'Fashion', 'LGBTQ'],
        dislikes: ['Disrespect', 'Loud sales guys', 'Slackers'],
        quirk: 'Apple enthusiast',
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
        }
    },
    chandler: {
        id: 'chandler',
        name: 'Chandler',
        role: 'Marketing Intern',
        color: '#8e44ad',
        portrait: 'assets/characters/chandler.png',
        personality: ['Sarcastic', 'Petty', 'Competitive'],
        communication: 'Short and direct',
        values: ['Being correct'],
        social: 'Has a few close friends, you must earn his respect',
        likes: ['Kanye West', 'Golf', 'Music', 'Traveling'],
        dislikes: ['Losing at video games', 'Thinking you can do his job'],
        quirk: 'Always has headphones in, will talk to you when he wants to',
        thresholds: {
            attempting: 50,
            talkingStage: 30,
            notInterested: -15,
            dislikes: -30
        }
    },
    jesse: {
        id: 'jesse',
        name: 'Jesse',
        role: 'Marketing Ops',
        color: '#f39c12',
        portrait: 'assets/characters/jesse.png',
        personality: ['Friendly', 'Silly', 'Aloof'],
        communication: 'Casual, jovial, teasy',
        values: ['Having a good time', 'Teasing Andre', 'Enjoying the moment'],
        social: 'Friends with everyone, likes to pull pranks',
        likes: ['Wim Hof', 'Creating music', 'Scaring Andre', 'Good food'],
        dislikes: ['Taking things too seriously'],
        quirk: 'Always has a twinkle in his eye',
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
        }
    },
    colby: {
        id: 'colby',
        name: 'Colby',
        role: 'Senior Engineer',
        color: '#e67e22',
        portrait: 'assets/characters/colby.png',
        personality: ['Total sales bro', 'Happy', 'Dim', 'Tough guy'],
        communication: 'Casual and bro, tough guy energy',
        values: ['The gym', 'Sports', 'Being cool'],
        social: 'Will make fun of you, will respect you if you do something cool',
        likes: ['Working out', 'Making money', 'Being buff', 'Looking cool'],
        dislikes: ['Nerds', 'Telling him what to do', 'Boring things'],
        quirk: 'Is a jock, doesn\'t get anything complicated',
        thresholds: {
            attempting: 45,
            talkingStage: 25,
            notInterested: -15,
            dislikes: -35
        }
    },
    ramona: {
        id: 'ramona',
        name: 'Ramona',
        role: 'Business Development Rep',
        color: '#e91e63',
        portrait: 'assets/characters/ramona.png',
        personality: ['Very friendly', 'Helpful', 'Warm'],
        communication: 'Casual and warm',
        values: ['Team collaboration'],
        social: 'Genuinely wants to help new people feel comfortable',
        likes: ['When people ask questions'],
        dislikes: ['People being rude'],
        quirk: 'Always welcoming',
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
        }
    },
    casper: {
        id: 'casper',
        name: 'Casper',
        role: 'Customer Success Manager',
        color: '#16a085',
        portrait: 'assets/characters/casper.png',
        personality: ['Friendly', 'Helpful'],
        communication: 'Casual and warm',
        values: ['Team collaboration'],
        social: 'Genuinely wants to help new people feel comfortable',
        likes: ['When people ask questions', 'Honesty', 'Tech discussions'],
        dislikes: ['Being talked down to'],
        quirk: 'Always supportive',
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
        }
    },
    pat: {
        id: 'pat',
        name: 'Pat',
        role: 'Customer Success Manager',
        color: '#c0392b',
        portrait: 'assets/characters/pat.png',
        personality: ['Sarcastic', 'Insulting', 'Funny', 'Cool'],
        communication: 'Direct, sarcastic, non-serious',
        values: ['Not being an asshole', 'Winning'],
        social: 'Keeps it real',
        likes: ['Playing games', 'Being normal', 'Having fun', 'Well designed things'],
        dislikes: ['Being a prick'],
        quirk: 'Sarcastic humor',
        thresholds: {
            attempting: 45,
            talkingStage: 25,
            notInterested: -15,
            dislikes: -35
        }
    }
};

// Calculate relationship status based on score
function getRelationshipStatus(characterId, score) {
    const char = characters[characterId];
    if (!char) return 'Friend';

    if (score <= char.thresholds.dislikes) return 'Dislikes';
    if (score <= char.thresholds.notInterested) return 'Not Interested';
    if (score >= char.thresholds.attempting) return 'Attempting';
    if (score >= char.thresholds.talkingStage) return 'Talked to';
    return 'Friend';
}

// Get CSS class for status
function getStatusClass(status) {
    switch (status) {
        case 'Friend': return 'status-friend';
        case 'Attempting': return 'status-attempting';
        case 'Talked to': return 'status-talking';
        case 'Not Interested': return 'status-not-interested';
        case 'Dislikes': return 'status-dislikes';
        default: return 'status-friend';
    }
}

// Check if character is available for Slack messaging
function isCharacterAvailableForSlack(characterId, gameState) {
    const relationship = gameState.relationships[characterId];
    if (!relationship) return false;
    const status = getRelationshipStatus(characterId, relationship.score);
    return status !== 'Not Interested' && status !== 'Dislikes';
}

// Get all characters as array
function getAllCharacters() {
    return Object.values(characters);
}

// Get character personality summary (for dialogue generation reference)
function getCharacterVoice(characterId) {
    const char = characters[characterId];
    if (!char) return null;

    return {
        name: char.name,
        tone: char.communication,
        personality: char.personality,
        quirk: char.quirk
    };
}
