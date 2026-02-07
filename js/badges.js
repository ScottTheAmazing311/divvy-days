// Badge definitions
const badges = {
    // Core Experience Badges (gold highlight)
    company_meeting: {
        id: 'company_meeting',
        name: 'Company Meeting',
        description: 'Participated in the big company decision',
        icon: '🏢',
        isCore: true
    },
    seven_eleven_walk: {
        id: 'seven_eleven_walk',
        name: '7-11 Friday Walk',
        description: 'Joined the traditional Friday 7-11 walk',
        icon: '🚶',
        isCore: true
    },
    gaming_room_invite: {
        id: 'gaming_room_invite',
        name: 'Gaming Room Invite',
        description: 'Got invited to the exclusive gaming room',
        icon: '🎮',
        isCore: true
    },

    // Regular Badges
    walked_to_office: {
        id: 'walked_to_office',
        name: 'Early Bird',
        description: 'Walked back to the office on Day 1',
        icon: '🚶‍♂️'
    },
    waved_at_everyone: {
        id: 'waved_at_everyone',
        name: 'Friendly Face',
        description: 'Waved at coworkers in the lobby',
        icon: '👋'
    },
    first_slack_message: {
        id: 'first_slack_message',
        name: 'Slack Savvy',
        description: 'Sent your first Slack message',
        icon: '💬'
    },
    lunch_with_jordan: {
        id: 'lunch_with_jordan',
        name: 'Lunch Buddy',
        description: 'Had lunch with Jordan',
        icon: '🍽️'
    },
    met_woody: {
        id: 'met_woody',
        name: 'New Friend',
        description: 'Met Woody at lunch',
        icon: '🤝'
    },
    stayed_late: {
        id: 'stayed_late',
        name: 'Dedicated Intern',
        description: 'Stayed late to finish work',
        icon: '🌙'
    },
    free_lunch: {
        id: 'free_lunch',
        name: 'Free Lunch',
        description: 'Enjoyed a company-provided lunch',
        icon: '🎁'
    },
    coffee_break: {
        id: 'coffee_break',
        name: 'Coffee Break',
        description: 'Took a coffee break with coworkers',
        icon: '☕'
    },
    team_player: {
        id: 'team_player',
        name: 'Team Player',
        description: 'Helped a coworker with their work',
        icon: '⭐'
    },
    social_butterfly: {
        id: 'social_butterfly',
        name: 'Social Butterfly',
        description: 'Made friends with 3 or more people',
        icon: '🦋'
    },
    networking_pro: {
        id: 'networking_pro',
        name: 'Networking Pro',
        description: 'Made friends with 5 or more people',
        icon: '🌟'
    },
    drama_avoider: {
        id: 'drama_avoider',
        name: 'Drama Avoider',
        description: 'Stayed out of office politics',
        icon: '😌'
    },
    drama_starter: {
        id: 'drama_starter',
        name: 'Drama Starter',
        description: 'Got involved in office drama',
        icon: '🔥'
    },
    company_supporter: {
        id: 'company_supporter',
        name: 'Company Supporter',
        description: 'Supported the company decision',
        icon: '👍'
    },
    company_rebel: {
        id: 'company_rebel',
        name: 'Company Rebel',
        description: 'Opposed the company decision',
        icon: '✊'
    },
    weekend_warrior: {
        id: 'weekend_warrior',
        name: 'Weekend Warrior',
        description: 'Made it to Friday!',
        icon: '🎉'
    },
    perfect_week: {
        id: 'perfect_week',
        name: 'Perfect Week',
        description: 'Had an amazing first week at Divvy',
        icon: '💯'
    },
    survivor: {
        id: 'survivor',
        name: 'Survivor',
        description: 'Made it through your first week',
        icon: '🎖️'
    }
};

// Get badge by ID
function getBadge(badgeId) {
    return badges[badgeId];
}

// Get all badges as array
function getAllBadges() {
    return Object.values(badges);
}

// Check if badge is core experience
function isCoreExperienceBadge(badgeId) {
    const badge = badges[badgeId];
    return badge && badge.isCore === true;
}

// Count core experience badges earned
function countCoreExperiences(earnedBadges) {
    return earnedBadges.filter(badgeId => isCoreExperienceBadge(badgeId)).length;
}
