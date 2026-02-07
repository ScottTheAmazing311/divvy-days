// DAY 1 SCENARIOS - Rewritten with character personalities

const day1_scenarios = {
    // ===== DAY 1: MORNING =====
    day1_morning_start: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "divvy_lobby",
        character: null,
        characterExpression: null,
        text: [
            "Your first day as a marketing intern at Divvy, an expense management startup in San Francisco.",
            "You step into the sleek office lobby, stomach fluttering with first-day nerves. The space is modern - exposed brick, plants everywhere, a neon 'Divvy' sign on the wall.",
            "Near the elevators, you spot Andre from your interview, talking animatedly with Ramona and Colby. Andre's gesturing rapidly with an energy drink in one hand, speaking at lightning speed.",
            "They're deep in conversation and haven't noticed you yet."
        ],
        choices: [
            {
                id: "wait_quietly",
                text: "Wait quietly for them to finish talking",
                next: "day1_morning_wait",
                effects: {
                    relationships: {}
                }
            },
            {
                id: "wave_at_them",
                text: "Wave and say good morning",
                next: "day1_morning_wave",
                effects: {
                    relationships: { andre: 5, ramona: 5, colby: 3 },
                    badges: ["waved_at_everyone"]
                }
            },
            {
                id: "walk_back_office",
                text: "Walk confidently toward the office",
                next: "day1_morning_walkback",
                effects: {
                    relationships: { andre: 10 },
                    badges: ["walked_to_office"]
                }
            }
        ]
    },

    day1_morning_wait: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "divvy_lobby",
        character: "ramona",
        characterExpression: "neutral",
        text: [
            "You stand by the entrance, pretending to check your phone while they talk.",
            "After a minute, Ramona's warm eyes light up as she notices you. 'Oh hey! You're the new marketing intern, right?' Her smile is genuinely welcoming.",
            "Andre and Colby turn to look. Colby sizes you up with a quick once-over - the classic bro assessment."
        ],
        choices: [
            {
                id: "introduce_cheerfully",
                text: "Yes! Nice to meet you all!",
                next: "day1_morning_intro",
                effects: {
                    relationships: { ramona: 5, colby: 3 }
                }
            },
            {
                id: "introduce_quietly",
                text: "Yeah, that's me... first day nerves, haha",
                next: "day1_morning_intro",
                effects: {
                    relationships: { ramona: 3 }
                }
            }
        ]
    },

    day1_morning_wave: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "divvy_lobby",
        character: "andre",
        characterExpression: "happy",
        text: [
            "You wave with a friendly 'Good morning!'",
            "Andre's face lights up and he waves back enthusiastically, nearly spilling his Red Bull. 'Hey-hey-hey! You made it! Everyone, this is our new marketing intern!'",
            "He speaks so fast it's almost hard to keep up. Ramona gives you a warm wave. 'Welcome to Divvy! We're so glad to have you!'",
            "Colby does a chin-up nod. 'Sup, new blood. Ready to crush it?' There's a playful challenge in his tone."
        ],
        choices: [
            {
                id: "match_energy",
                text: "Absolutely! Let's do this!",
                next: "day1_morning_intro",
                effects: {
                    relationships: { colby: 8, andre: 3 }
                }
            },
            {
                id: "stay_humble",
                text: "Thanks! Excited to learn from you all",
                next: "day1_morning_intro",
                effects: {
                    relationships: { andre: 5, ramona: 5 }
                }
            }
        ]
    },

    day1_morning_walkback: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "divvy_lobby",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "You walk past them with confidence, heading toward the main office area.",
            "Andre catches your movement. 'Oh-hey-wait! You heading up?' He jogs over, leaving Ramona and Colby mid-conversation.",
            "He's talking a mile a minute: 'Perfect-timing-I-was-about-to-head-up-anyway-let-me-show-you-to-your-desk-it's-all-set-up-got-you-a-good-monitor-and-everything.'",
            "You notice he seems genuinely excited to help, not just doing the obligatory welcome thing."
        ],
        choices: [
            {
                id: "thank_andre",
                text: "Thanks Andre, I really appreciate it!",
                next: "day1_morning_intro",
                effects: {
                    relationships: { andre: 7 }
                }
            },
            {
                id: "slow_him_down",
                text: "Whoa, you talk fast! I love the energy though",
                next: "day1_morning_intro",
                effects: {
                    relationships: { andre: 10 }
                }
            }
        ]
    },

    day1_morning_intro: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Andre leads you through the open office space, pointing at everything like a hyperactive tour guide.",
            "'So-this-is-the-main-floor-marketing-sits-here-engineering-over-there-sales-in-the-corner-you'll-learn-who's-who-pretty-quick.'",
            "He stops at a clean desk with a new laptop, monitor, and some Divvy swag. 'Here's your setup! Colby sits right over there - he's your supervisor. Jacob from product also works with marketing a lot. He's the Apple guy, you'll see.'",
            "Andre takes a breath and a sip of his energy drink. 'Okay-so-any-questions-before-I-head-back? I-know-there's-a-lot-to-absorb-on-day-one-but-seriously-just-Slack-me-anytime-I'm-here-to-help-that's-literally-my-favorite-thing.'"
        ],
        choices: [
            {
                id: "ask_about_culture",
                text: "What's the company culture like here?",
                next: "day1_late_morning_start",
                effects: {
                    relationships: { andre: 5 }
                }
            },
            {
                id: "ask_about_lunch",
                text: "Where do people usually eat lunch?",
                next: "day1_late_morning_start",
                effects: {
                    relationships: { andre: 3 }
                }
            },
            {
                id: "no_questions",
                text: "I think I'm good, thanks!",
                next: "day1_late_morning_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 1: LATE MORNING =====
    day1_late_morning_start: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You've been setting up your laptop for about an hour - configuring email, reading onboarding docs, getting your bearings.",
            "A polished guy in designer glasses and a crisp button-down approaches your desk. He's carrying what looks like a very expensive MacBook with an array of perfectly aligned Apple stickers.",
            "'Hey! Welcome aboard. I'm Jacob - Lead Product Manager.' His voice is friendly but professional. 'Want to take a quick break? I can give you the unofficial rundown of who's who around here.'",
            "He gestures to the break room with a perfectly calibrated smile."
        ],
        choices: [
            {
                id: "chat_with_jordan",
                text: "Sure, I'd love that!",
                next: "day1_late_morning_jordan_chat",
                effects: {
                    relationships: { jacob: 8 }
                }
            },
            {
                id: "keep_working",
                text: "I should probably keep working on setup...",
                next: "day1_late_morning_work",
                effects: {
                    relationships: { jacob: -2 }
                }
            },
            {
                id: "slack_option",
                text: "📱 Slack a coworker",
                type: "slack",
                next: "day1_late_morning_after_slack",
                effects: {
                    badges: ["first_slack_message"]
                }
            }
        ]
    },

    day1_late_morning_jordan_chat: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "Jacob walks you around the office, pointing out people with the precision of someone who's thought about organizational structure.",
            "'So that's Chandler over there with the headphones - he's also a marketing intern. Sarcastic as hell, super competitive, but good at what he does. He'll talk to you when he wants to, don't take it personally.'",
            "'Jesse in marketing ops - the guy who's currently trying to sneak up behind Andre's desk. He loves pranking people, but he's genuinely great at his job when he's not being ridiculous.'",
            "'Colby, your supervisor - total gym bro energy, but he actually knows his stuff. Just don't try to explain anything too technical to him.'",
            "'Casper and Pat are our customer success managers. Casper's super helpful and supportive. Pat... well, Pat's hilarious and sarcastic but won't actually be a jerk to you unless you deserve it.'",
            "'And Harper does HR, Alex is our data analyst. You'll meet everyone eventually.'"
        ],
        choices: [
            {
                id: "ask_about_jordan",
                text: "What do you work on?",
                next: "day1_afternoon_start",
                effects: {
                    relationships: { jacob: 5 }
                }
            },
            {
                id: "ask_about_apple",
                text: "I noticed you're an Apple fan?",
                next: "day1_late_morning_apple",
                effects: {
                    relationships: { jacob: 10 }
                }
            },
            {
                id: "ask_about_culture",
                text: "What's it like working here?",
                next: "day1_afternoon_start",
                effects: {
                    relationships: { jacob: 3 }
                }
            }
        ]
    },

    day1_late_morning_apple: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "Jacob's eyes light up. 'Oh, you noticed? Yeah, I'm all-in on the ecosystem. MacBook, iPhone, iPad, Watch, AirPods Max - the whole thing.'",
            "'It's not just about the products, you know? It's about the design philosophy. Form and function in perfect harmony. Everything just... works together.'",
            "He pulls out his iPhone with a beautifully designed leather case. 'Anyway, that's why I love product management. Good design isn't just aesthetics - it's about understanding what people actually need.'",
            "You can tell he could talk about this for hours."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "That makes sense! We should grab lunch sometime",
                next: "day1_afternoon_start",
                effects: {
                    relationships: { jacob: 8 }
                }
            }
        ]
    },

    day1_late_morning_work: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "Jacob nods understandingly. 'No worries, there's a lot to get through. My door's always open - well, I don't have a door, but you know what I mean.'",
            "You continue working through the onboarding materials. Company policies, expense procedures, product documentation - pretty dry stuff.",
            "Around the office, you notice other people chatting, taking breaks, even playing ping-pong. But you stay focused."
        ],
        choices: [
            {
                id: "continue_working",
                text: "Keep working until lunch",
                next: "day1_afternoon_start",
                effects: {}
            }
        ]
    },

    day1_late_morning_after_slack: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "After your Slack conversation, you feel a bit more connected to the team.",
            "You spend the rest of the morning finishing up your laptop setup and reading through onboarding materials.",
            "Your stomach starts to rumble - must be getting close to lunch time. You can hear conversations about food starting around the office."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "Head to lunch",
                next: "day1_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 1: AFTERNOON (LUNCH) =====
    day1_afternoon_start: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "It's noon, and people are starting to head out for lunch. Jacob stops by your desk again.",
            "'Hey, a few of us are grabbing Thai food down the street. Want to join? My treat for your first day.'",
            "From across the room, you notice Colby pulling out what looks like a meticulously prepared meal prep container. He catches your eye and nods toward the break room.",
            "And you did bring a lunch from home too..."
        ],
        choices: [
            {
                id: "join_jordan",
                text: "Sure, I'll come with you!",
                next: "day1_afternoon_jordan_lunch",
                effects: {
                    relationships: { jacob: 10 },
                    badges: ["lunch_with_jordan", "free_lunch"]
                }
            },
            {
                id: "join_colby",
                text: "Actually, I'll eat with Colby in the break room",
                next: "day1_afternoon_colby_lunch",
                effects: {
                    relationships: { colby: 10 }
                }
            },
            {
                id: "eat_alone",
                text: "I'll just eat at my desk, thanks",
                next: "day1_afternoon_solo_lunch",
                effects: {
                    relationships: { jacob: -5 }
                }
            }
        ]
    },

    day1_afternoon_jordan_lunch: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "You head to the Thai restaurant with Jacob, Andre, and Jesse. It's a small place with great food and even better energy.",
            "Over pad thai and curry, the conversation flows. Andre talks at warp speed about some database optimization he's working on. Jesse keeps making jokes and trying to embarrass Andre with stories.",
            "'Dude, remember when Andre got so excited explaining MongoDB that he literally forgot he was on a Zoom call with a client and kept going for like ten minutes?' Jesse grins with that mischievous twinkle.",
            "'That-was-ONE-time-and-the-client-actually-appreciated-the-deep-dive!' Andre protests, but he's laughing.",
            "Jacob shakes his head with an amused smile. 'These two are always like this.'",
            "You also meet Chandler, who shows up late with headphones still in. He nods at you, says 'Sup,' and then largely focuses on his food while occasionally dropping sarcastic one-liners."
        ],
        choices: [
            {
                id: "talk_to_chandler",
                text: "Try to chat with Chandler",
                next: "day1_afternoon_chandler_talk",
                effects: {
                    relationships: { chandler: 3 }
                }
            },
            {
                id: "laugh_with_jesse",
                text: "Laugh along with Jesse's stories",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { jesse: 8, andre: 3 }
                }
            },
            {
                id: "keep_talking_jordan",
                text: "Keep chatting with Jacob and Andre",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { jacob: 5, andre: 5 }
                }
            }
        ]
    },

    day1_afternoon_chandler_talk: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "You turn to Chandler. 'So, you're also in marketing?'",
            "He pulls one earbud out and looks at you with a slightly raised eyebrow. 'Yeah.'",
            "Short pause. He goes back to his food.",
            "You try again: 'How long have you been here?'",
            "'Six months.' He chews his food, considering whether to elaborate. 'Word of advice - don't try to do my job. I've got my stuff dialed in.'",
            "It's not quite hostile, but there's definitely a competitive edge. Jesse laughs. 'Chandler's a sweetheart once you earn his respect. Which might take... a while.'"
        ],
        choices: [
            {
                id: "accept_challenge",
                text: "Fair enough. May the best marketer win",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { chandler: 5 }
                }
            },
            {
                id: "stay_humble",
                text: "I'm just here to learn from everyone",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { chandler: 1 }
                }
            }
        ]
    },

    day1_afternoon_colby_lunch: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "break_room",
        character: "colby",
        characterExpression: "neutral",
        text: [
            "You grab your lunch and join Colby in the break room. He's got a seriously organized meal prep situation - chicken, rice, broccoli, all portioned perfectly.",
            "'Yo, respect!' Colby says, eyeing your lunch. 'Meal prep gang! You lift?'",
            "Before you can fully answer, he's already flexing. 'I'm hitting chest and tris today after work. You should come sometime - got a guest pass to my gym. It's sick, bro.'",
            "He takes a huge bite of chicken and continues talking. 'So marketing, huh? That's cool. I don't really get all the complicated analytics stuff, but I know what looks cool and what sells. That's what matters, right?'"
        ],
        choices: [
            {
                id: "bond_over_fitness",
                text: "Yeah, I'd be down to check out your gym!",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { colby: 12 }
                }
            },
            {
                id: "talk_marketing",
                text: "Tell me more about the marketing strategy here",
                next: "day1_late_afternoon_start",
                effects: {
                    relationships: { colby: 5 }
                }
            },
            {
                id: "compliment_gains",
                text: "Dude, you're looking huge! What's your routine?",
                next: "day1_afternoon_colby_impressed",
                effects: {
                    relationships: { colby: 15 }
                }
            }
        ]
    },

    day1_afternoon_colby_impressed: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "break_room",
        character: "colby",
        characterExpression: "happy",
        text: [
            "Colby's face lights up. 'BRO! Okay so I'm running a push-pull-legs split right now. Heavy compounds, progressive overload, the whole deal.'",
            "He starts excitedly detailing his entire routine. You've definitely earned his respect by showing interest in gains.",
            "'Dude, you're cool! Most marketing people are like, too nerdy or whatever. But you get it. We're gonna crush it together, bro!'",
            "You've just unlocked Colby's friendship achievement."
        ],
        choices: [
            {
                id: "continue_to_afternoon",
                text: "Hell yeah! Let's get back to work",
                next: "day1_late_afternoon_start",
                effects: {
                    badges: ["colby_approved"]
                }
            }
        ]
    },

    day1_afternoon_solo_lunch: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You eat lunch at your desk while catching up on emails and reading more documentation.",
            "It's quiet with most people gone. You get a lot of work done, but you can't help feeling like you might be missing out on bonding time.",
            "Through the window, you can see your coworkers at the Thai restaurant across the street, laughing and having a good time."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Get back to work",
                next: "day1_late_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 1: LATE AFTERNOON =====
    day1_late_afternoon_start: {
        day: 1,
        period: 4,
        periodName: "Late Afternoon",
        background: "conference_room",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "After lunch, a calendar invite pops up: 'Marketing Sync - Andre, Jacob, You'.",
            "You head to a small conference room where Andre and Jacob are already set up with their laptops. Andre's on his second (or maybe third?) energy drink of the day.",
            "'Hey-hey-welcome!' Andre waves you in, speaking rapidly. 'So-we-do-these-quick-syncs-every-few-days-to-make-sure-product-and-marketing-are-totally-aligned-on-messaging-and-features-and-timelines-and-everything.'",
            "Jacob smiles. 'Today we're discussing the Q4 campaign strategy. Pretty exciting stuff.'"
        ],
        choices: [
            {
                id: "listen_quietly",
                text: "Listen and take notes",
                next: "day1_late_afternoon_meeting",
                effects: {
                    relationships: { andre: 2, jacob: 2 }
                }
            },
            {
                id: "ask_questions",
                text: "Ask questions about the strategy",
                next: "day1_late_afternoon_meeting_engaged",
                effects: {
                    relationships: { andre: 5, jacob: 5 }
                }
            },
            {
                id: "share_ideas",
                text: "Share some ideas you have",
                next: "day1_late_afternoon_meeting_bold",
                effects: {
                    relationships: { andre: 8, jacob: 8 }
                }
            }
        ]
    },

    day1_late_afternoon_meeting: {
        day: 1,
        period: 4,
        periodName: "Late Afternoon",
        background: "conference_room",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You take detailed notes as Andre and Jacob discuss campaign timelines, target metrics, and feature releases.",
            "Andre speeds through technical details about API integrations and data tracking. Jacob brings it back to user experience and design principles.",
            "It's interesting to see how the two teams work together, though you mostly stay quiet and observe.",
            "After about 30 minutes, the meeting wraps up. 'Good to have you here,' Jacob says politely as everyone packs up."
        ],
        choices: [
            {
                id: "end_day1",
                text: "Head back to your desk",
                next: "day1_end",
                effects: {}
            }
        ]
    },

    day1_late_afternoon_meeting_engaged: {
        day: 1,
        period: 4,
        periodName: "Late Afternoon",
        background: "conference_room",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "You ask thoughtful questions about the target audience, messaging strategy, and how the product features align with customer needs.",
            "'Those are really good questions,' Jacob says, looking genuinely impressed. 'You're thinking like a marketer already.'",
            "Andre nods enthusiastically, speaking fast: 'Yeah-yeah-yeah-we-should-definitely-consider-those-angles-I-can-pull-some-data-on-that-actually-let-me-make-a-note.'",
            "The discussion becomes more collaborative and engaging with your participation."
        ],
        choices: [
            {
                id: "end_day1",
                text: "Wrap up and head back to your desk",
                next: "day1_end",
                effects: {}
            }
        ]
    },

    day1_late_afternoon_meeting_bold: {
        day: 1,
        period: 4,
        periodName: "Late Afternoon",
        background: "conference_room",
        character: "andre",
        characterExpression: "happy",
        text: [
            "You share some ideas you've been thinking about based on your research of the product and competitive landscape.",
            "Andre and Jacob exchange a glance. Jacob leans forward. 'That's... actually a really creative approach. We haven't thought about positioning it that way.'",
            "Andre's practically bouncing: 'Dude-yes-this-could-totally-work-we-could-integrate-this-with-the-email-campaign-and-the-product-updates-and-oh-man-I'm-getting-excited-about-this!'",
            "Jacob smiles. 'I'm impressed. This is going to be a great internship.'",
            "You feel a surge of confidence. Maybe you really do belong here."
        ],
        choices: [
            {
                id: "end_day1",
                text: "Finish up the meeting",
                next: "day1_end",
                effects: {
                    badges: ["team_player", "creative_thinker"]
                }
            }
        ]
    },

    day1_end: {
        day: 1,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "As the day winds down, you reflect on your first day at Divvy.",
            "You've met several coworkers - Andre's helpful chaos, Jacob's polished professionalism, Colby's bro energy, Ramona's warm welcome, Chandler's guarded competitiveness, Jesse's playful pranks.",
            "You completed your onboarding, participated in a strategy meeting, and started to get a feel for the company culture.",
            "People are packing up around 5:30 PM. You check your calendar for tomorrow - looks like there's an all-hands meeting scheduled."
        ],
        choices: [
            {
                id: "start_day2",
                text: "Start Day 2",
                next: "day2_morning_start",
                effects: {}
            }
        ]
    }
};
