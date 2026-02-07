// Character definitions with relationship thresholds and personality traits
const characters = {
    andre: {
        id: 'andre',
        name: 'Andre',
        role: 'Director of Revenue Operations (Your Boss)',
        color: '#3498db',
        portrait: 'assets/characters/andre.png',
        personality: ['Friendly', 'Helpful', 'Slightly awkward with social stuff', 'Talks fast'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Mentorship', 'Solving hard problems', 'Team collaboration'],
        social: 'Your manager - wants you to succeed and fit in with the team',
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
        role: 'Product Manager (Works with Pat)',
        color: '#1abc9c',
        portrait: 'assets/characters/jacob.png',
        personality: ['Friendly', 'Polite', 'Tech-focused'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Vision', 'Curiosity', 'Apple products', 'Respect'],
        social: 'Part of the friend group, works closely with Pat',
        likes: ['Apple', 'Design', 'Fashion', 'LGBTQ'],
        dislikes: ['Disrespect', 'Loud sales guys', 'Slackers'],
        quirk: 'Apple enthusiast, always has the latest MacBook',
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
        role: 'Marketing Intern (Your Teammate)',
        color: '#8e44ad',
        portrait: 'assets/characters/chandler.png',
        personality: ['Sarcastic', 'Petty', 'Competitive'],
        communication: 'Short and direct',
        values: ['Being correct'],
        social: 'Reports to Andre, part of the friend group, you must earn his respect',
        likes: ['Kanye West', 'Golf', 'Music', 'Traveling'],
        dislikes: ['Losing at video games', 'New people trying too hard'],
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
        role: 'Marketing Ops (Your Teammate)',
        color: '#f39c12',
        portrait: 'assets/characters/jesse.png',
        personality: ['Friendly', 'Silly', 'Aloof'],
        communication: 'Casual, jovial, teasy',
        values: ['Having a good time', 'Teasing Andre', 'Enjoying the moment'],
        social: 'Reports to Andre, part of the friend group, likes to pull pranks',
        likes: ['Wim Hof', 'Creating music', 'Scaring Andre', 'Good food'],
        dislikes: ['Taking things too seriously'],
        quirk: 'Always has a twinkle in his eye, pranks Andre constantly',
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
        role: 'Sales Rep (Not Part of Friend Group)',
        color: '#e67e22',
        portrait: 'assets/characters/colby.png',
        personality: ['Total sales bro', 'Cocky', 'Competitive', 'Tough guy'],
        communication: 'Loud bro energy, talks about gym and money',
        values: ['The gym', 'Closing deals', 'Being alpha'],
        social: 'Potential antagonist - bumps into you occasionally, can be won over',
        likes: ['Working out', 'Making money', 'Being buff', 'Respect when earned'],
        dislikes: ['Nerds', 'Weak people', 'The marketing team', 'Being challenged'],
        quirk: 'Flexes constantly, drinks protein shakes, calls everyone "bro"',
        thresholds: {
            attempting: 50,
            talkingStage: 30,
            notInterested: -10,
            dislikes: -25
        }
    },
    ramona: {
        id: 'ramona',
        name: 'Ramona',
        role: 'Business Development (Friends with Andre)',
        color: '#e91e63',
        portrait: 'assets/characters/ramona.png',
        personality: ['Very friendly', 'Helpful', 'Warm'],
        communication: 'Casual and warm',
        values: ['Team collaboration', 'Inclusion'],
        social: 'Part of the friend group, friends with Andre, welcoming to new people',
        likes: ['When people ask questions', 'Bringing people into the group'],
        dislikes: ['People being rude', 'Exclusion'],
        quirk: 'Always welcoming, bridge between you and the friend group',
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
        role: 'Customer Success (Friends with Andre)',
        color: '#16a085',
        portrait: 'assets/characters/casper.png',
        personality: ['Friendly', 'Helpful', 'Loyal'],
        communication: 'Casual and warm',
        values: ['Team collaboration', 'Loyalty to friends'],
        social: 'Part of the friend group, close friends with Andre',
        likes: ['When people ask questions', 'Honesty', 'The crew'],
        dislikes: ['Being talked down to', 'Fake people'],
        quirk: 'Always supportive, Andre\'s close friend',
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
        role: 'Product Designer (Friends with Andre & Jacob)',
        color: '#c0392b',
        portrait: 'assets/characters/pat.png',
        personality: ['Sarcastic', 'Witty', 'Funny', 'Cool'],
        communication: 'Direct, sarcastic, playful',
        values: ['Good design', 'Authenticity', 'The crew'],
        social: 'Part of the friend group, friends with Andre, works closely with Jacob',
        likes: ['Playing games', 'Being normal', 'Having fun', 'Well designed things'],
        dislikes: ['Try-hards', 'Bad design', 'Fake people'],
        quirk: 'Sarcastic humor, roasts people affectionately',
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
