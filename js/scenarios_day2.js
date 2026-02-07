// DAY 2 SCENARIOS - Rewritten with character personalities

const day2_scenarios = {
    // ===== DAY 2: MORNING =====
    day2_morning_start: {
        day: 2,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "Day 2 at Divvy. You arrive feeling more confident than yesterday - at least you know where the bathroom is now.",
            "Your desk is how you left it, and you notice a company-wide calendar invite for 10 AM: 'All-Hands Meeting - Q4 Strategy Announcement'.",
            "Colby swaggers over to your desk, protein shaker in hand. 'Yo, morning! Did you see the all-hands invite? Supposed to be pretty big news. Blake's gonna drop something major.'",
            "He flexes unconsciously while talking. 'Should be interesting, bro.'"
        ],
        choices: [
            {
                id: "ask_about_changes",
                text: "What kind of changes?",
                next: "day2_morning_colby",
                effects: {
                    relationships: { colby: 3 }
                }
            },
            {
                id: "play_it_cool",
                text: "Sounds interesting!",
                next: "day2_morning_colby",
                effects: {
                    relationships: { colby: 1 }
                }
            }
        ]
    },

    day2_morning_colby: {
        day: 2,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "colby",
        characterExpression: "neutral",
        text: [
            "Colby shrugs, taking a swig of his protein shake. 'Not totally sure, bro. Something about restructuring? I don't really follow all the complicated business stuff.'",
            "'All I know is Blake seemed pretty serious about it. But hey, whatever happens, we'll adapt. That's what winners do, right?'",
            "He pounds his chest once for emphasis and heads back to his desk.",
            "You've got some time before the meeting starts."
        ],
        choices: [
            {
                id: "work_before_meeting",
                text: "Get some work done before the meeting",
                next: "day2_late_morning_start",
                effects: {}
            },
            {
                id: "slack_someone",
                text: "📱 Slack a coworker",
                type: "slack",
                next: "day2_late_morning_start",
                effects: {}
            },
            {
                id: "coffee_break",
                text: "Grab coffee in the break room",
                next: "day2_morning_coffee",
                effects: {
                    badges: ["coffee_break"]
                }
            }
        ]
    },

    day2_morning_coffee: {
        day: 2,
        period: 1,
        periodName: "Morning",
        background: "break_room",
        character: "jesse",
        characterExpression: "neutral",
        text: [
            "In the break room, you find Jesse making what appears to be the world's most elaborate cold brew setup.",
            "'Yo! New marketing person!' He grins with that signature twinkle in his eye. 'Jesse, marketing ops. Want some cold brew? Made it with the Wim Hof method.'",
            "You have no idea what that means.",
            "'Just kidding, that's not a thing. But imagine if it was!' He laughs at his own joke. 'So, ready for the big all-hands? Gonna be spicy. Blake's been stressed lately - I keep hiding his stress ball to keep him on his toes.'",
            "He's clearly entertained by his own antics."
        ],
        choices: [
            {
                id: "chat_with_skylar",
                text: "You prank Blake? Isn't that risky?",
                next: "day2_morning_jesse_chat",
                effects: {
                    relationships: { jesse: 8 }
                }
            },
            {
                id: "take_coffee",
                text: "I'll take that cold brew, thanks!",
                next: "day2_late_morning_start",
                effects: {
                    relationships: { jesse: 5 }
                }
            }
        ]
    },

    day2_morning_jesse_chat: {
        day: 2,
        period: 1,
        periodName: "Morning",
        background: "break_room",
        character: "jesse",
        characterExpression: "happy",
        text: [
            "Jesse laughs. 'Nah, man! Blake's cool. He knows it's all in good fun. Life's too short to take everything seriously, you know?'",
            "'Plus, I actually do good work when I'm not messing around. That's my secret - be silly, but deliver results. Then nobody can really complain.'",
            "He hands you a cold brew. 'Andre's my favorite target though. Dude's so easy to startle - totally worth it.'",
            "You're starting to understand the office dynamics better."
        ],
        choices: [
            {
                id: "continue_to_meeting",
                text: "Head to the all-hands meeting",
                next: "day2_late_morning_start",
                effects: {
                    relationships: { jesse: 3 }
                }
            }
        ]
    },

    // ===== DAY 2: LATE MORNING (ALL-HANDS MEETING) =====
    day2_late_morning_start: {
        day: 2,
        period: 2,
        periodName: "Late Morning",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "The entire company packs into the main conference room. Pat, one of the customer success managers, is leaning against the back wall with his arms crossed and a slightly sarcastic smirk.",
            "Blake stands at the front - he's the CEO but has that approachable startup vibe. Not stuffy corporate at all.",
            "'Alright everyone, thanks for coming,' Blake starts, his tone serious. 'Let's talk about Q4 and where we're headed as a company.'",
            "'We've been growing fast. Really fast. But that means making tough decisions. We're considering a pivot - focusing on enterprise clients instead of small businesses.'",
            "'This would mean major changes: product roadmap, marketing strategy, possibly team structure. I value transparency, so I want to hear your thoughts. This isn't top-down - we're in this together.'"
        ],
        choices: [
            {
                id: "support_pivot",
                text: "Support the pivot (raise hand)",
                next: "day2_late_morning_support",
                effects: {
                    relationships: { pat: 10, jacob: -5 },
                    coreExperience: { key: "companyMeeting", value: "support" },
                    badges: ["company_meeting", "company_supporter"]
                }
            },
            {
                id: "oppose_pivot",
                text: "Express concerns about the pivot",
                next: "day2_late_morning_oppose",
                effects: {
                    relationships: { pat: -5, jacob: 10, chandler: 5 },
                    coreExperience: { key: "companyMeeting", value: "oppose" },
                    badges: ["company_meeting", "company_rebel"]
                }
            },
            {
                id: "stay_quiet",
                text: "Stay quiet and listen",
                next: "day2_late_morning_quiet",
                effects: {
                    badges: ["drama_avoider"]
                }
            }
        ]
    },

    day2_late_morning_support: {
        day: 2,
        period: 2,
        periodName: "Late Morning",
        background: "conference_room",
        character: "pat",
        characterExpression: "happy",
        text: [
            "You raise your hand. 'I think the enterprise pivot makes sense strategically. Bigger clients mean more stable, predictable revenue. It's a smart business move.'",
            "Blake nods approvingly. 'Exactly. That's the kind of forward-thinking we need.'",
            "Pat calls out from the back: 'Intern's got more business sense than half the people here.' It's unclear if he's being sarcastic or genuine. Probably both.",
            "You notice Jacob looking a bit uncomfortable, shifting in his seat.",
            "After more discussion from various people, Blake wraps up: 'Thanks for the input, everyone. We'll make a final decision by end of week.'"
        ],
        choices: [
            {
                id: "continue_day2",
                text: "Head back to your desk",
                next: "day2_afternoon_start",
                effects: {}
            }
        ]
    },

    day2_late_morning_oppose: {
        day: 2,
        period: 2,
        periodName: "Late Morning",
        background: "conference_room",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You speak up: 'I'm concerned we might alienate our core small business customers. They're loyal, they got us here. Seems risky to abandon them.'",
            "There's a moment of tension. Blake looks thoughtful rather than defensive. 'That's a fair point.'",
            "Jacob jumps in, speaking carefully: 'I agree. From a product and design perspective, we've built a lot of features specifically for small businesses. Pivoting means essentially starting over in some areas. We need to think this through carefully.'",
            "Chandler, who's been quiet with his headphones around his neck, adds: 'Also, do we even have the resources to compete in enterprise? Those sales cycles are brutal.'",
            "Blake nods slowly. 'Good to have diverse perspectives. We'll factor all of this in.'",
            "The meeting wraps up with no clear decision made. You can feel the tension."
        ],
        choices: [
            {
                id: "continue_day2",
                text: "Return to work",
                next: "day2_afternoon_start",
                effects: {}
            }
        ]
    },

    day2_late_morning_quiet: {
        day: 2,
        period: 2,
        periodName: "Late Morning",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "You decide to stay quiet and observe. It's only your second day - probably smart not to jump into major company decisions.",
            "Others voice their opinions - some supporting, some opposing. Colby says something about 'going after the big money, bro.' Jesse makes a joke that breaks the tension.",
            "Blake listens to everyone and takes notes on his MacBook. 'Thanks for the honest input. This is why I love this team - everyone cares. We'll make a decision that's right for Divvy.'",
            "The meeting ends, and people file out discussing the announcement in hushed tones."
        ],
        choices: [
            {
                id: "continue_day2",
                text: "Head back to your desk",
                next: "day2_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 2: AFTERNOON =====
    day2_afternoon_start: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "casper",
        characterExpression: "happy",
        text: [
            "After the intense all-hands meeting, you're back at your desk trying to process everything.",
            "Casper from customer success rolls up to your desk with a friendly smile. 'Hey! You're the new marketing intern, right? I'm Casper. How're you holding up after that meeting?'",
            "His tone is genuinely supportive and warm. 'That was a lot to take in on day two! Want to grab lunch? Sometimes it helps to process things over food. My treat!'"
        ],
        choices: [
            {
                id: "join_tones",
                text: "Sure, that would be great!",
                next: "day2_afternoon_lunch_tones",
                effects: {
                    relationships: { casper: 10 }
                }
            },
            {
                id: "decline_tones",
                text: "I should probably work through lunch today",
                next: "day2_afternoon_work",
                effects: {
                    relationships: { casper: -3 }
                }
            },
            {
                id: "slack_instead",
                text: "📱 Slack someone else for lunch plans",
                type: "slack",
                next: "day2_afternoon_after_slack",
                effects: {}
            }
        ]
    },

    day2_afternoon_lunch_casper: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "casper",
        characterExpression: "happy",
        text: [
            "Lunch with Casper is refreshingly low-key. You grab sandwiches from a nearby deli.",
            "'So, what did you think of the meeting?' he asks. 'Pretty heavy stuff, right?'",
            "He listens genuinely as you share your thoughts. 'Yeah, change is always tough. But from the customer success side, I can tell you - our clients really do love us. Whether we go enterprise or stay focused on small business, we just need to keep delivering value.'",
            "'Don't stress too much about the big picture stuff. Focus on doing great work in your role. The rest will figure itself out.'",
            "His supportive, grounded energy is calming after the tense morning."
        ],
        choices: [
            {
                id: "thank_casper",
                text: "Thanks, I needed to hear that",
                next: "day2_late_afternoon_start",
                effects: {
                    relationships: { casper: 8 }
                }
            },
            {
                id: "ask_about_customers",
                text: "Tell me more about working with customers",
                next: "day2_late_afternoon_start",
                effects: {
                    relationships: { casper: 10 }
                }
            }
        ]
    },

    day2_afternoon_work: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You spend lunch at your desk, working on marketing materials and trying to focus.",
            "It's productive, but you can hear laughter from the group that went out to lunch.",
            "The all-hands meeting is still churning in your head. You hope you made the right call - whatever that was."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Keep working",
                next: "day2_late_afternoon_start",
                effects: {}
            }
        ]
    },

    day2_afternoon_after_slack: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "After coordinating over Slack, you grab lunch with your coworker.",
            "It's nice to have a more casual one-on-one conversation away from the office drama.",
            "You head back feeling more grounded and connected."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Get back to work",
                next: "day2_late_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 2: LATE AFTERNOON =====
    day2_late_afternoon_start: {
        day: 2,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        characterExpression: null,
        text: [
            "Late afternoon. The all-hands meeting from earlier is still the hot topic across the office.",
            "You can hear hushed conversations about the enterprise pivot - some people excited about growth, others worried about losing focus on small businesses.",
            "You focus on wrapping up your work for the day, processing everything you've learned."
        ],
        choices: [
            {
                id: "reflect_on_day",
                text: "Reflect on the meeting and head home",
                next: "day2_end",
                effects: {}
            },
            {
                id: "check_slack",
                text: "Send a quick Slack message before leaving",
                next: "day2_end",
                effects: {}
            }
        ]
    },

    day2_end: {
        day: 2,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "Day 2 comes to a close. You've navigated your first company all-hands meeting, witnessed some strategic tension, and continued building relationships.",
            "Tomorrow is Wednesday - the middle of your first week. The company's potential pivot is the talk of the office.",
            "As you pack up around 5:30, you feel like you're starting to understand the dynamics here. Andre's helpful energy, Jacob's thoughtfulness, Colby's bro enthusiasm, Casper's supportive nature, Jesse's playful chaos.",
            "You're getting the hang of this."
        ],
        choices: [
            {
                id: "start_day3",
                text: "Start Day 3",
                next: "day3_morning_start",
                effects: {}
            }
        ]
    }
};
