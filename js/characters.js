// Character definitions with relationship thresholds and personality traits
const characters = {
    andre: {
        id: 'andre',
        name: 'Andre',
        role: 'Director of Revenue Operations (Your Boss)',
        color: '#3498db',
        portrait: 'assets/characters/andre.png',
        bio: 'Andre is your manager and the Director of Revenue Operations. He talks at lightning speed, always has an energy drink in hand, and explains everything like he\'s giving a tutorial. Despite being slightly awkward in social situations, he genuinely cares about mentorship and wants you to succeed. He values honesty and loves when people ask questions - just don\'t interrupt him mid-thought. Andre is at the center of the friend group and has been here long enough to know everyone.',
        personality: ['Friendly', 'Helpful', 'Slightly awkward with social stuff', 'Talks fast'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Mentorship', 'Solving hard problems', 'Team collaboration'],
        social: 'Your manager - wants you to succeed and fit in with the team',
        likes: ['When people ask questions', 'Honesty', 'Tech discussions'],
        dislikes: ['Office politics', 'Being interrupted mid-thought'],
        quirk: 'Always drinking energy drinks, explains things like a tutorial',
        slackPreference: 5, // Likes being accessible as your manager
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
        bio: 'Jacob is a Product Manager who works closely with Pat on design decisions. He\'s polite and tech-focused, always sporting the latest MacBook (usually in Space Black). A total Apple enthusiast, he can talk for hours about design philosophy and the "entire experience." Part of Andre\'s friend group, Jacob values respect and genuine curiosity. He has no patience for loud sales guys or people who don\'t put in the work.',
        personality: ['Friendly', 'Polite', 'Tech-focused'],
        communication: 'Casual and warm, but gets technical when excited',
        values: ['Vision', 'Curiosity', 'Apple products', 'Respect'],
        social: 'Part of the friend group, works closely with Pat',
        likes: ['Apple', 'Design', 'Fashion', 'LGBTQ'],
        dislikes: ['Disrespect', 'Loud sales guys', 'Slackers'],
        quirk: 'Apple enthusiast, always has the latest MacBook',
        slackPreference: 3, // Polite but prefers focus time
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
        bio: 'Chandler is a fellow Marketing Intern on your team, but he\'s been here longer and is already part of the friend group. Sarcastic, petty, and fiercely competitive, he always has his headphones in and will only talk to you when he feels like it. A huge Kanye fan who loves golf and traveling, Chandler values being correct above all else. He\'s not impressed by new people trying too hard - you\'ll have to earn his respect the hard way.',
        personality: ['Sarcastic', 'Petty', 'Competitive'],
        communication: 'Short and direct',
        values: ['Being correct'],
        social: 'Reports to Andre, part of the friend group, you must earn his respect',
        likes: ['Kanye West', 'Golf', 'Music', 'Traveling'],
        dislikes: ['Losing at video games', 'New people trying too hard'],
        quirk: 'Always has headphones in, will talk to you when he wants to',
        slackPreference: -4, // Dislikes interruptions, only talks when HE wants
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
        bio: 'Jesse works in Marketing Ops and reports to Andre alongside you and Chandler. Friendly, silly, and a bit aloof, he\'s the office prankster who lives to scare Andre and make jokes about cold brew and the Wim Hof method. Always with a twinkle in his eye, Jesse values having a good time and enjoying the moment above all else. He creates music in his spare time, loves good food, and absolutely hates when people take things too seriously. Part of the established friend group.',
        personality: ['Friendly', 'Silly', 'Aloof'],
        communication: 'Casual, jovial, teasy',
        values: ['Having a good time', 'Teasing Andre', 'Enjoying the moment'],
        social: 'Reports to Andre, part of the friend group, likes to pull pranks',
        likes: ['Wim Hof', 'Creating music', 'Scaring Andre', 'Good food'],
        dislikes: ['Taking things too seriously'],
        quirk: 'Always has a twinkle in his eye, pranks Andre constantly',
        slackPreference: 7, // Loves chatting and joking around
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
        bio: 'Colby is a Sales Rep with classic bro energy - loud, cocky, and always flexing (literally). He lives for the gym, closing deals, and being the alpha in the room. Constantly drinking protein shakes and calling everyone "bro," he has a natural rivalry with the marketing team and tends to look down on what he calls "nerds." Not part of the friend group, you\'ll bump into him occasionally. He can be a bit of an antagonist, but if you earn his respect, he might just come around.',
        personality: ['Total sales bro', 'Cocky', 'Competitive', 'Tough guy'],
        communication: 'Loud bro energy, talks about gym and money',
        values: ['The gym', 'Closing deals', 'Being alpha'],
        social: 'Potential antagonist - bumps into you occasionally, can be won over',
        likes: ['Working out', 'Making money', 'Being buff', 'Respect when earned'],
        dislikes: ['Nerds', 'Weak people', 'The marketing team', 'Being challenged'],
        quirk: 'Flexes constantly, drinks protein shakes, calls everyone "bro"',
        slackPreference: -8, // Hates being interrupted during deals
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
        bio: 'Ramona works in Business Development and is one of Andre\'s close friends. Warm, friendly, and genuinely helpful, she values team collaboration and making sure everyone feels included. She hates rudeness and exclusion, and goes out of her way to bring new people into the fold. If there\'s anyone who can bridge the gap between you and the established friend group, it\'s Ramona. She loves when people ask questions and is always welcoming.',
        personality: ['Very friendly', 'Helpful', 'Warm'],
        communication: 'Casual and warm',
        values: ['Team collaboration', 'Inclusion'],
        social: 'Part of the friend group, friends with Andre, welcoming to new people',
        likes: ['When people ask questions', 'Bringing people into the group'],
        dislikes: ['People being rude', 'Exclusion'],
        quirk: 'Always welcoming, bridge between you and the friend group',
        slackPreference: 8, // Loves helping and connecting
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
        bio: 'Casper is in Customer Success and one of Andre\'s closest friends. Friendly, helpful, and fiercely loyal to his crew, he values honesty and genuine connections. He can\'t stand being talked down to or dealing with fake people - authenticity matters to him. Always supportive and encouraging, Casper is deeply embedded in the friend group. If you want to be accepted by "the crew," getting on Casper\'s good side is essential.',
        personality: ['Friendly', 'Helpful', 'Loyal'],
        communication: 'Casual and warm',
        values: ['Team collaboration', 'Loyalty to friends'],
        social: 'Part of the friend group, close friends with Andre',
        likes: ['When people ask questions', 'Honesty', 'The crew'],
        dislikes: ['Being talked down to', 'Fake people'],
        quirk: 'Always supportive, Andre\'s close friend',
        slackPreference: 7, // Helpful and supportive
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
        bio: 'Pat is a Product Designer who works closely with Jacob. Sarcastic, witty, and effortlessly cool, Pat communicates through playful roasts and affectionate teasing - if they\'re making fun of you, that means they like you. A core member of the friend group and close with Andre, Pat values good design, authenticity, and just being normal. Hates try-hards, bad design, and fake people. Enjoys playing games and having fun with the crew.',
        personality: ['Sarcastic', 'Witty', 'Funny', 'Cool'],
        communication: 'Direct, sarcastic, playful',
        values: ['Good design', 'Authenticity', 'The crew'],
        social: 'Part of the friend group, friends with Andre, works closely with Jacob',
        likes: ['Playing games', 'Being normal', 'Having fun', 'Well designed things'],
        dislikes: ['Try-hards', 'Bad design', 'Fake people'],
        quirk: 'Sarcastic humor, roasts people affectionately',
        slackPreference: 2, // Neutral, might roast you for slacking
        thresholds: {
            attempting: 45,
            talkingStage: 25,
            notInterested: -15,
            dislikes: -35
        }
    },
    scott: {
        id: 'scott',
        name: 'Scott',
        role: 'Head of Sales Enablement (Reports to Andre)',
        color: '#16a085',
        portrait: 'assets/characters/scott.png',
        bio: 'Scott is the Head of Sales Enablement and reports to Andre, though he works mostly with the sales team. Fun-loving and perpetually goofing off, Scott is always doing something ridiculous in the office - whether it\'s riding around on a rolling chair, testing terrible sales pitch ideas out loud, or making overly dramatic announcements. Despite his silliness, he\'s actually great at his job and knows how to make work fun. Part of the friend group, Scott brings levity to any situation and never takes himself too seriously.',
        personality: ['Fun', 'Goofy', 'Playful', 'Energetic'],
        communication: 'Enthusiastic and silly, always joking around',
        values: ['Having fun at work', 'Not taking life too seriously', 'Making people laugh'],
        social: 'Part of the friend group, reports to Andre, works with sales team',
        likes: ['Pranks', 'Making people laugh', 'Rolling chairs', 'Silly voices', 'The crew'],
        dislikes: ['Boring meetings', 'People who are too serious', 'Awkward silence'],
        quirk: 'Always doing something silly - riding chairs, funny voices, dramatic gestures',
        slackPreference: 8, // Loves goofing around and chatting
        thresholds: {
            attempting: 40,
            talkingStage: 20,
            notInterested: -20,
            dislikes: -40
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
