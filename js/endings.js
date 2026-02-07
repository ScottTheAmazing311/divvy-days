// Ending definitions
const endings = {
    perfect_ending: {
        id: 'perfect_ending',
        score: 10,
        title: 'The Perfect Week',
        subtitle: 'Ending 10 - Best Ending',
        text: [
            "Your first week at Divvy couldn't have gone better. You've made meaningful connections, participated in important company decisions, and shown everyone what you're capable of.",
            "As you head into the weekend, you have messages from multiple coworkers wanting to hang out. The UDM members have taken notice of you, and there's talk of a full-time position after your internship.",
            "You've proven that you're not just another intern - you're part of the Divvy family."
        ],
        requirements: {
            minFriends: 5,
            minCoreExperiences: 3,
            coreExperiences: {
                companyMeeting: ['support', 'oppose'],
                sevenElevenWalk: true,
                gamingRoomInvite: true
            }
        }
    },
    great_ending: {
        id: 'great_ending',
        score: 9,
        title: 'Making Connections',
        subtitle: 'Ending 9',
        text: [
            "You've had a fantastic first week at Divvy. You've made several good friends and participated in some of the company's key moments.",
            "Your coworkers are impressed by your social skills and work ethic. You might not have done everything, but you've made a strong impression.",
            "As Friday winds down, you're already looking forward to Monday."
        ],
        requirements: {
            minFriends: 5,
            minCoreExperiences: 2
        }
    },
    good_social_ending: {
        id: 'good_social_ending',
        score: 8,
        title: 'Social Success',
        subtitle: 'Ending 8',
        text: [
            "Your first week at Divvy has been great! You've focused on building relationships and it's paid off - you've made lots of friends.",
            "While you may have missed some key company experiences, your coworkers genuinely like you and want to hang out outside of work.",
            "You've built a solid social foundation for the rest of your internship."
        ],
        requirements: {
            minFriends: 5,
            minCoreExperiences: 1
        }
    },
    good_experience_ending: {
        id: 'good_experience_ending',
        score: 7,
        title: 'Experience Collector',
        subtitle: 'Ending 7',
        text: [
            "You've had a solid first week at Divvy, participating in several important company experiences and making a few good friends.",
            "You've shown that you're engaged with the company culture and willing to get involved. Your managers have noticed your enthusiasm.",
            "You're on track for a good internship experience."
        ],
        requirements: {
            minFriends: 3,
            minCoreExperiences: 3
        }
    },
    balanced_ending: {
        id: 'balanced_ending',
        score: 6,
        title: 'Balanced Approach',
        subtitle: 'Ending 6',
        text: [
            "Your first week at Divvy has been solid. You've made a few friends and participated in some company activities.",
            "You're finding your footing and learning how things work. It's not the most exciting week, but it's a good foundation to build on.",
            "You're doing just fine for your first week."
        ],
        requirements: {
            minFriends: 3,
            minCoreExperiences: 2
        }
    },
    average_ending: {
        id: 'average_ending',
        score: 5,
        title: 'Just Another Week',
        subtitle: 'Ending 5 - Average Ending',
        text: [
            "Your first week at Divvy has been... fine. You've made a couple of friends and participated in some activities.",
            "You haven't really stood out, but you haven't made any major mistakes either. You're just another intern doing their job.",
            "There's plenty of time to make more of an impact in the coming weeks."
        ],
        requirements: {
            minFriends: 2,
            minCoreExperiences: 1
        }
    },
    quiet_ending: {
        id: 'quiet_ending',
        score: 4,
        title: 'The Quiet Intern',
        subtitle: 'Ending 4',
        text: [
            "Your first week at Divvy has been quiet. You've kept to yourself mostly, making just one or two acquaintances.",
            "You've completed your assigned tasks, but you haven't really integrated into the company culture. People don't really know who you are.",
            "You'll need to step out of your comfort zone if you want to make the most of this internship."
        ],
        requirements: {
            minFriends: 1,
            minCoreExperiences: 0
        }
    },
    loner_ending: {
        id: 'loner_ending',
        score: 3,
        title: 'Flying Solo',
        subtitle: 'Ending 3',
        text: [
            "Your first week at Divvy has been isolating. You haven't really connected with anyone, though you've participated in a few company activities.",
            "You're getting your work done, but you're missing out on the social aspects that make Divvy special. People wonder if you even want to be here.",
            "Internships are about more than just work - maybe try talking to people next week?"
        ],
        requirements: {
            minFriends: 0,
            minCoreExperiences: 1
        }
    },
    problem_child_ending: {
        id: 'problem_child_ending',
        score: 2,
        title: 'The Problem Intern',
        subtitle: 'Ending 2',
        text: [
            "Your first week at Divvy has been rough. You've burned some bridges and made more enemies than friends.",
            "People actively avoid you in the hallways. Someone reported to HR that you're 'not a culture fit.'",
            "You'll be lucky if they don't let you go before the internship ends. Maybe tone it down next week?"
        ],
        requirements: {
            minDislikes: 2
        }
    },
    fired_ending: {
        id: 'fired_ending',
        score: 1,
        title: 'Worst Week Ever',
        subtitle: 'Ending 1 - Bad Ending',
        text: [
            "Your first week at Divvy has been a disaster. You haven't made any friends, you've actively alienated multiple coworkers, and missed every important company experience.",
            "On Friday afternoon, Harper from HR calls you into a meeting. 'We've decided this isn't a good fit,' she says gently. 'Today will be your last day.'",
            "As you pack your things, you wonder what you could have done differently. Maybe try being nicer to people?"
        ],
        requirements: {
            minFriends: 0,
            minCoreExperiences: 0,
            maxFriends: 0
        }
    }
};

// Calculate which ending the player gets
function calculateEnding(gameState) {
    // Count friends (Attempting status or better)
    const friendCount = Object.keys(gameState.relationships).filter(charId => {
        const score = gameState.relationships[charId].score;
        const status = getRelationshipStatus(charId, score);
        return status === 'Attempting' || status === 'Friend';
    }).length;

    // Count dislikes
    const dislikesCount = Object.keys(gameState.relationships).filter(charId => {
        const score = gameState.relationships[charId].score;
        const status = getRelationshipStatus(charId, score);
        return status === 'Dislikes' || status === 'Not Interested';
    }).length;

    // Count core experiences
    let coreExpCount = 0;
    if (gameState.coreExperiences.companyMeeting) coreExpCount++;
    if (gameState.coreExperiences.sevenElevenWalk) coreExpCount++;
    if (gameState.coreExperiences.gamingRoomInvite) coreExpCount++;

    // Check endings from highest score to lowest
    const endingArray = Object.values(endings).sort((a, b) => b.score - a.score);

    for (const ending of endingArray) {
        const req = ending.requirements;

        // Check minimum friends
        if (req.minFriends !== undefined && friendCount < req.minFriends) continue;

        // Check maximum friends (for bad endings)
        if (req.maxFriends !== undefined && friendCount > req.maxFriends) continue;

        // Check minimum core experiences
        if (req.minCoreExperiences !== undefined && coreExpCount < req.minCoreExperiences) continue;

        // Check minimum dislikes (for bad endings)
        if (req.minDislikes !== undefined && dislikesCount < req.minDislikes) continue;

        // Check specific core experiences
        if (req.coreExperiences) {
            let allCoreReqsMet = true;

            // Check company meeting
            if (req.coreExperiences.companyMeeting) {
                const allowedValues = req.coreExperiences.companyMeeting;
                if (!allowedValues.includes(gameState.coreExperiences.companyMeeting)) {
                    allCoreReqsMet = false;
                }
            }

            // Check 7-11 walk
            if (req.coreExperiences.sevenElevenWalk === true) {
                if (!gameState.coreExperiences.sevenElevenWalk) {
                    allCoreReqsMet = false;
                }
            }

            // Check gaming room
            if (req.coreExperiences.gamingRoomInvite === true) {
                if (!gameState.coreExperiences.gamingRoomInvite) {
                    allCoreReqsMet = false;
                }
            }

            if (!allCoreReqsMet) continue;
        }

        // All requirements met!
        return {
            ending: ending,
            stats: {
                friendCount,
                dislikesCount,
                coreExpCount,
                badgesEarned: gameState.badges.length
            }
        };
    }

    // Fallback to average ending
    return {
        ending: endings.average_ending,
        stats: {
            friendCount,
            dislikesCount,
            coreExpCount,
            badgesEarned: gameState.badges.length
        }
    };
}

// Get all endings for endings gallery
function getAllEndings() {
    return Object.values(endings).sort((a, b) => b.score - a.score);
}
