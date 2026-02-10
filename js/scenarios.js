// All game scenarios and narrative content
const scenarios = {
    day1_morning_start: {
        day: 1,
        period: 1,
        periodName: "Morning",
        background: "divvy_lobby",
        character: null,
        characterExpression: null,
        text: [
            "Your first day as a marketing intern at Divvy, an expense management startup in Utah.",
            "You step into the sleek office lobby, stomach fluttering with first-day nerves. The space is modern - exposed brick, plants everywhere, a neon 'Divvy' sign on the wall. Through the windows you can see the mountains in the distance.",
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
                id: "ask_about_team",
                text: "Tell me more about the team I'll be working with",
                next: "day1_late_morning_start",
                effects: {
                    relationships: { andre: 7 }
                }
            },
            {
                id: "ask_about_lunch",
                text: "Where do people usually grab lunch around here?",
                next: "day1_late_morning_start",
                effects: {
                    relationships: { andre: 3 }
                }
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
                text: "Sure, I'd love the full tour!",
                next: "day1_late_morning_jordan_chat",
                effects: {
                    relationships: { jacob: 8 }
                }
            },
            {
                id: "quick_rundown",
                text: "Maybe just a quick rundown? I've got a lot of setup left",
                next: "day1_late_morning_quick_chat",
                effects: {
                    relationships: { jacob: 3 }
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
            "'So that's Chandler over there with the headphones - he's also a marketing intern under Andre. Sarcastic as hell, super competitive, but good at what he does. He'll talk to you when he wants to, don't take it personally.'",
            "'Jesse in marketing ops - the guy who's currently trying to sneak up behind Andre's desk. He loves pranking people, but he's genuinely great at his job when he's not being ridiculous. Also reports to Andre.'",
            "Just then, someone rolls by on an office chair going way too fast. 'SALES ENABLEMENT COMING THROUGH!' They crash into a filing cabinet. 'I'm good!'",
            "Jacob shakes his head with a slight smile. 'That's Scott. Head of Sales Enablement. Reports to Andre but works with the sales team. He's... always like that. You'll get used to it.'",
            "'Colby's in sales - total gym bro energy. You'll probably bump into him occasionally. He's... a lot.'",
            "'Casper's in customer success, super helpful and supportive. Pat's a product designer - hilarious and sarcastic but won't actually be a jerk to you unless you deserve it. Both are friends with Andre.'",
            "'Ramona's in business development - probably the most welcoming person here. You'll like her.'"
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

    day1_late_morning_quick_chat: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "break_room",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "Jacob walks with you to the break room and gives you the condensed version while making coffee.",
            "'Okay, quick version: Andre runs marketing and ops - he's your boss. Colby's technically in sales but helps with marketing content. Chandler's the other marketing intern - a bit competitive but talented.'",
            "'Jesse does marketing ops and loves pranks. Casper and Pat are Andre's close friends. Ramona is super welcoming.'",
            "He hands you a coffee. 'That should get you started. We can do a deeper dive another time if you want.'",
            "Short and efficient - very Jacob."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "Thanks, that helps!",
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
    },

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
        character: null,
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
                    relationships: { jacob: -5 },
                    coreExperience: { key: "companyMeeting", value: "support" },
                    badges: ["company_meeting", "company_supporter"]
                }
            },
            {
                id: "oppose_pivot",
                text: "Express concerns about the pivot",
                next: "day2_late_morning_oppose",
                effects: {
                    relationships: { jacob: 10, chandler: 5 },
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
            "His tone is genuinely supportive and warm. 'That was a lot to take in on day two! Want to grab lunch? Sometimes it helps to process things over food. My treat!'",
            "Just then, Ramona waves from across the room, gesturing towards the door with a questioning look - seems like she's also heading to lunch."
        ],
        choices: [
            {
                id: "join_casper",
                text: "I'd love to, Casper! Let's go",
                next: "day2_afternoon_lunch_casper",
                effects: {
                    relationships: { casper: 10, ramona: -2 }
                }
            },
            {
                id: "join_ramona",
                text: "Actually, I was going to grab lunch with Ramona",
                next: "day2_afternoon_lunch_ramona",
                effects: {
                    relationships: { ramona: 10, casper: -2 }
                }
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

    day2_afternoon_lunch_ramona: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "You grab lunch with Ramona at a cozy cafe nearby. She orders a colorful salad and insists you try the avocado toast.",
            "'So, that all-hands was intense, huh?' she says with genuine empathy. 'Blake's got a lot on his mind. I've been here since the early days - it's always a balancing act between growth and staying true to who we are.'",
            "'I think whatever direction we go, we'll figure it out. This team is special - everyone really cares.'",
            "Her warmth and optimism are infectious. You leave lunch feeling more grounded."
        ],
        choices: [
            {
                id: "thank_ramona",
                text: "Thanks for the pep talk!",
                next: "day2_late_afternoon_start",
                effects: {
                    relationships: { ramona: 8 }
                }
            },
            {
                id: "ask_about_early_days",
                text: "What was Divvy like in the early days?",
                next: "day2_afternoon_ramona_stories",
                effects: {
                    relationships: { ramona: 12 }
                }
            }
        ]
    },

    day2_afternoon_ramona_stories: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "Ramona's eyes light up. 'Oh man, the early days were wild! We were like 15 people total, working out of a cramped space.'",
            "'Andre was already talking at lightning speed even back then. Jacob was obsessing over design details. Jesse was pranking everyone constantly - some things never change!'",
            "'Blake would bring his dog to the office every day. We all felt like family, you know? As we've grown, we've tried to keep that energy.'",
            "She smiles warmly. 'That's why I love when new people join and really connect with the team. You're fitting in great, by the way.'"
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Head back to the office",
                next: "day2_late_afternoon_start",
                effects: {
                    badges: ["ramona_stories"]
                }
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
        character: "harper",
        characterExpression: "neutral",
        text: [
            "Harper from HR stops by your desk late in the afternoon with her usual organized demeanor.",
            "'Hey! Just wanted to check in - how's your first week going so far?' She has a professional but genuine warmth.",
            "'I know that all-hands was probably a lot to process. My door is always open if you have any questions or concerns. That's what I'm here for.'"
        ],
        choices: [
            {
                id: "honest_feedback",
                text: "It's going well, everyone's been really welcoming",
                next: "day2_end",
                effects: {
                    relationships: { harper: 8 }
                }
            },
            {
                id: "mention_concerns",
                text: "A little overwhelming, but in a good way",
                next: "day2_end",
                effects: {
                    relationships: { harper: 10 }
                }
            },
            {
                id: "all_good",
                text: "Everything's great, thanks for checking!",
                next: "day2_end",
                effects: {
                    relationships: { harper: 5 }
                }
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
    },

    day3_morning_start: {
        day: 3,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "ramona",
        characterExpression: "neutral",
        text: [
            "Wednesday morning. Mid-week. You're officially settling into Divvy life.",
            "The all-hands meeting from yesterday is still the hot topic - you can hear hushed conversations about the enterprise pivot across the office.",
            "Ramona from Business Development stops by your desk with her usual warm energy. 'Hey! Heard you're working on Q4 campaign materials.'",
            "'I've been working with customers for a while now - I have some insights about what messaging really resonates. Want to collaborate?'"
        ],
        choices: [
            {
                id: "accept_ramona_help",
                text: "That would be incredibly helpful, thanks!",
                next: "day3_morning_ramona_collab",
                effects: {
                    relationships: { ramona: 10 }
                }
            },
            {
                id: "decline_ramona",
                text: "I'm good for now, but I'll reach out if I need input",
                next: "day3_morning_solo_work",
                effects: {
                    relationships: { ramona: -3 }
                }
            },
            {
                id: "ask_about_pivot",
                text: "Sure - but first, what do you think about the pivot?",
                next: "day3_morning_ramona_opinion",
                effects: {
                    relationships: { ramona: 5 }
                }
            }
        ]
    },

    day3_morning_ramona_collab: {
        day: 3,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "Ramona pulls up a chair, genuinely excited to help. Her warmth makes collaboration feel natural.",
            "'Okay, so from talking to customers every day, here's what I've learned: They don't care about features - they care about saving time and reducing headaches.'",
            "'When I'm closing deals, the messaging that works is simple: Show them the pain point first, then show how Divvy solves it in like 30 seconds. That's it.'",
            "'For the Q4 campaign, focus on the expense approval workflow. That's where people feel the most frustration with their current tools.'",
            "You're learning more in ten minutes with Ramona than you did in hours of reading documentation alone."
        ],
        choices: [
            {
                id: "ask_deeper_questions",
                text: "Can you tell me more about common customer objections?",
                next: "day3_late_morning_start",
                effects: {
                    relationships: { ramona: 8 },
                    badges: ["customer_focused"]
                }
            },
            {
                id: "thank_ramona_move_on",
                text: "This is perfect, thank you so much!",
                next: "day3_late_morning_start",
                effects: {
                    relationships: { ramona: 5 }
                }
            }
        ]
    },

    day3_morning_ramona_opinion: {
        day: 3,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "ramona",
        characterExpression: "neutral",
        text: [
            "Ramona pauses, choosing her words carefully.",
            "'Honestly? I'm torn. I love working with small businesses - they're so grateful for what we do, and we really help them. But... enterprise deals could change everything for the company.'",
            "'From a business development perspective, bigger clients mean more stable revenue. But it also means we might lose what makes Divvy special - that personal touch.'",
            "'I trust Andre and the leadership team to figure it out. I just hope we don't forget about the small businesses that got us here.'",
            "You hadn't thought about it that way before. Ramona cares about the mission, not just the strategy."
        ],
        choices: [
            {
                id: "continue_to_collab",
                text: "That makes sense. Can you still help with the campaign?",
                next: "day3_morning_ramona_collab",
                effects: {
                    relationships: { ramona: 8 }
                }
            }
        ]
    },

    day3_morning_solo_work: {
        day: 3,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "Ramona nods understandingly - no visible offense taken - and heads back to her desk.",
            "You work through your marketing materials solo, cross-referencing documentation and making educated guesses about what messaging might resonate.",
            "It's slower without Ramona's customer insights, but you're learning by doing. Trial and error has its place.",
            "Around you, the office hums with Wednesday energy - that mid-week push."
        ],
        choices: [
            {
                id: "continue_morning",
                text: "Keep working",
                next: "day3_late_morning_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 3: LATE MORNING =====
    day3_late_morning_start: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "Around 11 AM, you notice raised voices near the conference room.",
            "Jordan and Blake are having what looks like a heated discussion. You can't hear the words, but body language says plenty - Jordan's arms are crossed defensively, Blake is gesturing emphatically.",
            "The enterprise pivot debate is clearly not settled.",
            "Other coworkers are pretending not to notice, buried in their screens. But everyone's listening."
        ],
        choices: [
            {
                id: "eavesdrop_drama",
                text: "Subtly move closer to hear what they're saying",
                next: "day3_late_morning_eavesdrop",
                effects: {
                    badges: ["drama_seeker"]
                }
            },
            {
                id: "mind_business",
                text: "Put on headphones and focus on your work",
                next: "day3_late_morning_focus",
                effects: {
                    badges: ["drama_avoider"]
                }
            }
        ]
    },

    day3_late_morning_eavesdrop: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "You grab your water bottle as an excuse and walk toward the conference room, moving casually but listening intently.",
            "Jordan's voice, frustrated: 'We built our entire product philosophy around empowering small businesses. This isn't just about revenue - it's about who we are as a company.'",
            "Blake, measured but firm: 'And who we are as a company needs to evolve to survive. I value your input, but this decision is made. Now we need everyone aligned.'",
            "Jordan: 'I can be professional about it, but don't expect me to pretend I agree.'",
            "Blake: 'I don't need agreement. I need execution.'",
            "The conversation ends abruptly as they both notice people nearby. Jordan walks past you without making eye contact. Blake heads in the opposite direction, jaw set.",
            "You just witnessed a serious leadership rift. The tension is palpable."
        ],
        choices: [
            {
                id: "continue_after_drama",
                text: "Head back to your desk",
                next: "day3_scott_encounter",
                effects: {
                    relationships: { jacob: -3, pat: -3 }
                }
            }
        ]
    },

    day3_late_morning_focus: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "You slide on your headphones and crank up some focus music. Whatever's happening with leadership isn't your circus.",
            "You're an intern. Your job is to do good work and learn, not get tangled in office politics.",
            "The morning passes productively. You make solid progress on your campaign materials.",
            "By noon, the tension seems to have dissipated - or at least gone underground."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "Check the time - almost lunch",
                next: "day3_scott_encounter",
                effects: {}
            }
        ]
    },

    day3_late_morning_after_slack: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "After your Slack conversation, you have a much better sense of the situation.",
            "Turns out everyone's been talking about the tension between Blake and Jordan over the pivot. It's been building since yesterday's all-hands.",
            "Some people are Team Blake - 'revenue is survival.' Others are Team Jordan - 'culture matters more than growth.'",
            "You're glad you asked instead of making assumptions. Context is everything in office dynamics."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "Get back to work until lunch",
                next: "day3_scott_encounter",
                effects: {}
            }
        ]
    },

    // ===== DAY 3: SCOTT ENCOUNTER =====
    day3_scott_encounter: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "scott",
        characterExpression: "happy",
        text: [
            "You're heading to the break room when you hear: 'ATTENTION DIVVY EMPLOYEES! THIS IS YOUR SALES ENABLEMENT OVERLORD SPEAKING!'",
            "Scott is standing on a chair in the middle of the office with a rolled-up paper as a makeshift megaphone. Several people are trying not to laugh.",
            "'I am here to announce that... THE COFFEE IN THE BREAK ROOM HAS BEEN UPGRADED!' He does a little bow. 'You're welcome for my service.'",
            "Andre walks by shaking his head but smiling. 'Scott-that's-not-how-announcements-work-we-have-Slack-for-that.'",
            "'But Andre, where's the DRAMA? Where's the PIZZAZZ?' Scott hops down from the chair and notices you. 'Oh hey! You're the new marketing intern! I'm Scott, Head of Sales Enablement. I make sales not suck.'",
            "He extends his hand for a very enthusiastic handshake. 'Fair warning: I'm like this all the time. Welcome to the chaos!'"
        ],
        choices: [
            {
                id: "match_energy",
                text: "I love the energy! This place is fun",
                next: "day3_afternoon_start",
                effects: {
                    relationships: { scott: 10 }
                }
            },
            {
                id: "laugh_politely",
                text: "Haha, nice to meet you Scott",
                next: "day3_afternoon_start",
                effects: {
                    relationships: { scott: 5 }
                }
            },
            {
                id: "stay_professional",
                text: "Nice to meet you. I should get back to work",
                next: "day3_afternoon_start",
                effects: {
                    relationships: { scott: 2 }
                }
            }
        ]
    },

    // ===== DAY 3: AFTERNOON (RAMONA'S LUNCH INVITATION) =====
    day3_afternoon_start: {
        day: 3,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "At lunch time, Ramona appears at your desk with her signature warm smile.",
            "'Hey! So a bunch of us from the design team are grabbing sushi down the street. Want to join?'",
            "Her energy is genuinely welcoming, no pressure. 'We usually talk about design stuff, but honestly it's just a chill hang. Would love to have you!'",
            "You can see a few designers gathering their bags near the exit."
        ],
        choices: [
            {
                id: "join_design_lunch",
                text: "I'd love to! Thanks for inviting me",
                next: "day3_afternoon_sushi_lunch",
                effects: {
                    relationships: { ramona: 10 },
                    badges: ["design_team_lunch"]
                }
            },
            {
                id: "decline_ramona",
                text: "I really should catch up on work, but thank you!",
                next: "day3_afternoon_work_lunch",
                effects: {
                    relationships: { ramona: -3 }
                }
            }
        ]
    },

    day3_afternoon_sushi_lunch: {
        day: 3,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "The sushi restaurant is small and cozy. You're seated with Ramona and three designers - they're discussing everything from Figma plugins to the latest design trends.",
            "'So we're redesigning the entire dashboard,' one designer explains. 'The current UI is functional but not intuitive. Users have to think too hard.'",
            "Ramona turns to you. 'From a marketing perspective, what do you think matters most to users when they first see our product?'",
            "The table goes quiet - they're genuinely interested in your input. This is cross-functional collaboration at its best.",
            "You share your thoughts on first impressions and value proposition. They nod thoughtfully, one designer even takes notes.",
            "'Marketing and design should work together way more often,' Ramona says enthusiastically. 'We're both trying to understand what users actually need, just from different angles.'",
            "The conversation flows naturally from work to music to weekend plans. You're not just the intern here - you're part of the team."
        ],
        choices: [
            {
                id: "suggest_collaboration",
                text: "We should definitely set up regular design-marketing sync!",
                next: "day3_late_afternoon_start",
                effects: {
                    relationships: { ramona: 10 },
                    badges: ["cross_functional_thinker"]
                }
            },
            {
                id: "enjoy_lunch",
                text: "Yeah, this has been really valuable. Thanks for including me",
                next: "day3_late_afternoon_start",
                effects: {
                    relationships: { ramona: 7 }
                }
            }
        ]
    },

    day3_afternoon_work_lunch: {
        day: 3,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You work through lunch again, alone at your desk with your meal prep container.",
            "The office is eerily quiet - almost everyone went out. You can hear the hum of the air conditioning and the distant sound of someone on a phone call.",
            "You make solid progress on your tasks, but there's a nagging feeling. You're being productive, but you're also isolating yourself.",
            "Is the work-life balance right? Or are you missing out on the relationships that make work meaningful?",
            "Something to think about."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Keep working",
                next: "day3_late_afternoon_start",
                effects: {}
            }
        ]
    },

    day3_afternoon_after_slack: {
        day: 3,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You Slack someone else and coordinate lunch plans while Ramona's invitation hangs in the air.",
            "She notices you're distracted by your phone and gives a little wave. 'No worries! Catch you later!' Her smile is still warm, but you might have missed an opportunity there.",
            "Your lunch with your chosen coworker is fine - good conversation, decent food. But you wonder if the design team lunch would have been more valuable.",
            "Trade-offs. Everything in life is trade-offs."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Head back to the office",
                next: "day3_late_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 3: LATE AFTERNOON (STAY LATE OPTION) =====
    day3_late_afternoon_start: {
        day: 3,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "Around 4:30 PM, Chandler rolls up to your desk with his headphones around his neck - which means he's actually choosing to talk to you.",
            "'So.' He leans against the desk partition. 'Some of us are staying late tonight to crush this campaign deadline. Probably gonna order pizza around 6, work until 8 or 9.'",
            "He gives you an appraising look. 'You're welcome to stay if you want. No pressure. But it's when the real work gets done - no meetings, no interruptions.'",
            "There's something almost like respect in his tone. Chandler doesn't give invites lightly.",
            "Across the office, you see Colby packing up his gym bag, about to head out for his evening workout."
        ],
        choices: [
            {
                id: "stay_late_team",
                text: "Yeah, I'm in. Let's crush this deadline",
                next: "day3_end_late_night_crew",
                effects: {
                    relationships: { chandler: 12, andre: 7, jesse: 5, colby: -3 },
                    badges: ["late_night_crew", "team_player"]
                }
            },
            {
                id: "leave_with_colby",
                text: "Actually, I'm gonna hit the gym with Colby",
                next: "day3_end_gym_with_colby",
                effects: {
                    relationships: { colby: 15, chandler: -5, andre: -3 }
                }
            },
            {
                id: "ask_who_staying",
                text: "Who else is staying?",
                next: "day3_late_afternoon_ask_details",
                effects: {
                    relationships: { chandler: 2 }
                }
            }
        ]
    },

    day3_late_afternoon_ask_details: {
        day: 3,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "Chandler shrugs. 'Me, Andre, Jesse - Colby might join for a bit before he heads to the gym. The usual suspects.'",
            "'We'll probably put on music, order too much pizza, and actually get stuff done without everyone else around. It's when the best work happens, honestly.'",
            "He pushes off the desk. 'But like I said - no pressure. Just figured I'd ask since you've been pulling your weight this week.'",
            "Coming from Chandler, that's basically a compliment.",
            "You glance over and see Colby doing some pre-workout stretches by his desk."
        ],
        choices: [
            {
                id: "stay_after_details",
                text: "Alright, I'm in. Let's do this",
                next: "day3_end_late_night_crew",
                effects: {
                    relationships: { chandler: 10, andre: 7, colby: -3 },
                    badges: ["late_night_crew"]
                }
            },
            {
                id: "gym_after_details",
                text: "I think I'll join Colby at the gym instead",
                next: "day3_end_gym_with_colby",
                effects: {
                    relationships: { colby: 15, chandler: -3, andre: -2 }
                }
            }
        ]
    },

    day3_end_late_night_crew: {
        day: 3,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "jesse",
        characterExpression: "happy",
        text: [
            "By 5:30 PM, most of the office has cleared out. It's just you, Chandler, Andre, Jesse, and Colby clustered in the marketing area.",
            "Andre's already on his third energy drink of the day, talking at lightning speed: 'Okay-so-if-we-can-finish-the-email-sequence-tonight-we-can-launch-Monday-which-gives-us-a-full-week-before-the-webinar-and-that's-perfect-timing-for-follow-up.'",
            "Jesse puts on a curated Spotify playlist - some indie electronic stuff. 'Work playlist. Let's vibe.'",
            "Pizza arrives at 6:15. Colby's heading out to the gym but grabs two slices first. 'Gotta hit chest and tris, bros. You got this!' He pounds his chest and leaves.",
            "The energy is different after-hours. More relaxed, more real. Chandler actually smiles at one of Jesse's jokes. Andre explains technical concepts without rushing quite so much.",
            "Jesse tries to scare Andre by sneaking up behind him. Andre jumps and nearly spills his Red Bull. Everyone laughs. 'Dude-you-always-do-this!' Andre protests, but he's grinning.",
            "By 8 PM, the work is done. Really done, not just kinda done. You all pack up together.",
            "'You're alright,' Chandler says to you on the way out. From him, that's basically a medal of honor.",
            "Day 3 complete. You're not just working at Divvy anymore - you're part of the crew."
        ],
        choices: [
            {
                id: "start_day4",
                text: "Start Day 4",
                next: "day4_morning_start",
                effects: {}
            }
        ]
    },

    day3_end_gym_with_colby: {
        day: 3,
        period: 4,
        periodName: "Late Afternoon",
        background: "gym",
        character: "colby",
        characterExpression: "happy",
        text: [
            "You pack up with Colby and head to his gym. The place is serious - heavy weights, motivational posters, lots of grunting.",
            "'BRO! I'm so pumped you came!' Colby is in his element. 'Alright, we're hitting chest and tris today. I'll spot you.'",
            "The workout is intense. Colby pushes you but also genuinely teaches you proper form. Between sets, he opens up more than he does at the office.",
            "'Dude, I know I'm not the smartest guy at Divvy. Like, Andre and Jacob are on another level with all the tech stuff. But I bring energy, you know? And I'm learning the business side.'",
            "'That's why I respect that you came to the gym. Dedication. Work ethic. That's what matters.'",
            "By the end, you're exhausted but feel accomplished. You've earned Colby's respect - and maybe missed some late-night bonding with the crew.",
            "Tomorrow is Thursday. Almost to the weekend.",
            "Day 3 done."
        ],
        choices: [
            {
                id: "start_day4",
                text: "Start Day 4",
                next: "day4_morning_start",
                effects: {
                    badges: ["gym_rat"]
                }
            }
        ]
    },

    // ===== DAY 4: MORNING (FIRST REAL PROJECT) =====
    day4_morning_start: {
        day: 4,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "colby",
        characterExpression: "happy",
        text: [
            "Thursday morning! You can feel the 'almost Friday' energy in the office.",
            "Colby swaggers over to your desk, protein shaker in hand, looking pumped. 'Yo! Morning, bro! Got some news for you.'",
            "He sets down the shaker and leans in. 'So I've been telling everyone you're crushing it this week. Like, actually doing real work, not just intern busy-work, you know?'",
            "'And I just got approval to give you your first REAL project.' He grins. 'We're launching a webinar series - like, proper thought leadership content. Educational stuff for customers.'",
            "'I want you to own the marketing for it. Full campaign - emails, landing page copy, social posts, the whole thing. Think you can handle it, bro?'",
            "This is it. Your moment to prove yourself."
        ],
        choices: [
            {
                id: "accept_confident",
                text: "Hell yeah! I'm ready for this",
                next: "day4_morning_project_brief",
                effects: {
                    relationships: { colby: 12 },
                    badges: ["first_real_project"]
                }
            },
            {
                id: "accept_humble",
                text: "I'll give it everything I've got. Might have questions though",
                next: "day4_morning_project_brief",
                effects: {
                    relationships: { colby: 8 }
                }
            },
            {
                id: "match_bro_energy",
                text: "Bro, I'm gonna crush this. Let's go!",
                next: "day4_morning_project_hype",
                effects: {
                    relationships: { colby: 15 },
                    badges: ["colby_approved"]
                }
            }
        ]
    },

    day4_morning_project_hype: {
        day: 4,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "colby",
        characterExpression: "happy",
        text: [
            "Colby's face lights up. 'BRO! That's what I'm talking about! That's the ENERGY!'",
            "He literally fist-bumps you. 'Dude, I knew you were cool when you started. Some interns are like, too scared to do anything. But you're here to WORK. I respect that.'",
            "'Okay so here's the deal.' He pulls up a chair, fully engaged now.",
            "He walks you through the webinar series - topics about expense management best practices, financial operations, ROI tracking. Target audience is finance managers and ops people at mid-size companies.",
            "'Make it smart but not boring, you know? Like, we're experts but we're also cool. Not some stuffy corporate thing.'",
            "'I trust you, bro. Make it happen. And if you need anything - design resources, budget for ads, whatever - just ask. This one's important.'"
        ],
        choices: [
            {
                id: "dive_into_project",
                text: "Got it. I'm on it",
                next: "day4_late_morning_start",
                effects: {
                    relationships: { colby: 5 }
                }
            }
        ]
    },

    day4_morning_project_brief: {
        day: 4,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: "colby",
        characterExpression: "neutral",
        text: [
            "Colby nods approvingly and pulls up a chair. 'Okay cool, let me give you the rundown.'",
            "He explains the webinar series - topics, target audience, goals. It's a lot to take in, but he's surprisingly clear about the objectives.",
            "'We want to position Divvy as the smart choice for finance ops people. Not just a tool - like, a partner who gets their challenges.'",
            "'You'll work with design for visuals, Jacob for product positioning, Ramona for customer insights. But the messaging? That's all you, bro.'",
            "He stands up. 'I'm here if you need me. But I trust your judgment. That's why I'm giving you this.'",
            "Responsibility feels good. And terrifying. Mostly good."
        ],
        choices: [
            {
                id: "start_working",
                text: "Get to work on the campaign",
                next: "day4_late_morning_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 4: LATE MORNING (JACOB COLLABORATION) =====
    day4_late_morning_start: {
        day: 4,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You're deep into drafting campaign copy when Jacob walks by with his MacBook Pro and AirPods Max around his neck.",
            "He notices your screen. 'Oh, the webinar campaign! Colby mentioned you're taking lead on this.'",
            "He pauses, genuinely interested. 'Mind if I take a look? I can give you a product perspective - make sure the messaging aligns with how we're actually positioning features.'",
            "His tone is helpful, not condescending. Jacob's the kind of person who makes collaboration feel natural."
        ],
        choices: [
            {
                id: "collaborate_jacob",
                text: "Yes please! Fresh eyes would be super helpful",
                next: "day4_late_morning_jacob_collab",
                effects: {
                    relationships: { jacob: 10 },
                    badges: ["collaborative_mindset"]
                }
            },
            {
                id: "ask_chandler_instead",
                text: "Actually, I was going to ask Chandler for feedback",
                next: "day4_late_morning_chandler_collab",
                effects: {
                    relationships: { chandler: 10, jacob: -3 }
                }
            },
            {
                id: "ask_about_apple",
                text: "Sure - but first, is that the new MacBook Pro?",
                next: "day4_late_morning_apple_talk",
                effects: {
                    relationships: { jacob: 8 }
                }
            }
        ]
    },

    day4_late_morning_jacob_collab: {
        day: 4,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "Jacob pulls up a chair and scans your copy with the focus of someone who genuinely cares about quality.",
            "'Okay, this is solid. Really solid. Your hook is good - it creates urgency without being pushy.' He scrolls down, reading carefully.",
            "'One suggestion though - see this section where you mention features? Instead of leading with what the product does, lead with the pain point it solves. Like this...'",
            "He opens a note on his iPhone and types out a quick alternative. 'Finance teams waste 14 hours per month on manual expense reports. What if that was automated?'",
            "'Then you introduce the feature as the solution. It's more emotionally resonant. People don't buy features - they buy solutions to problems they're actively feeling.'",
            "You implement his feedback. The copy immediately feels stronger, more compelling.",
            "'This is good work,' Jacob says, standing up. 'Seriously. You're thinking like a real marketer, not just an intern. Keep this up.'",
            "He taps his AirPods Max. 'Oh and the campaign design - want me to loop in Ramona? She's great with visual hierarchy for landing pages.'",
            "This is what cross-functional collaboration is supposed to feel like."
        ],
        choices: [
            {
                id: "accept_design_help",
                text: "That would be amazing, thank you!",
                next: "day4_afternoon_start",
                effects: {
                    relationships: { jacob: 7, ramona: 5 },
                    badges: ["team_player"]
                }
            },
            {
                id: "thank_jacob",
                text: "Thanks for the feedback. I'll reach out to design later",
                next: "day4_afternoon_start",
                effects: {
                    relationships: { jacob: 5 }
                }
            }
        ]
    },

    day4_late_morning_apple_talk: {
        day: 4,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "happy",
        text: [
            "Jacob's eyes light up. 'Oh, you noticed? Yeah, just got the M4 Max. 16-inch, Space Black. It's beautiful.'",
            "He flips it open to show you. The screen is pristine, the build quality impeccable. 'I know some people think Apple's overpriced, but the design philosophy - it's about the entire experience, you know?'",
            "'The hardware, the software, the ecosystem. Everything works together seamlessly. My MacBook, iPhone, AirPods, Watch - they're all connected. I can start an email on my phone and finish it on my laptop. Copy something here, paste it there. It just... works.'",
            "He's passionate about this, clearly. 'That's what good product design should be. Invisible. You don't think about the tool - you just use it to do what you need to do.'",
            "'Anyway.' He closes the laptop gently. 'Want help with that campaign? I got distracted talking about tech, but your work looks promising.'"
        ],
        choices: [
            {
                id: "collaborate_after_apple",
                text: "Yeah, let's dive into the campaign",
                next: "day4_late_morning_jacob_collab",
                effects: {
                    relationships: { jacob: 5 }
                }
            }
        ]
    },

    day4_late_morning_chandler_collab: {
        day: 4,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "Jacob raises an eyebrow but nods. 'Fair enough. Chandler's good.' He walks away.",
            "You roll over to Chandler's desk. He's got his headphones on, deep in focus. You tap his desk.",
            "He pulls one earbud out. 'What's up?'",
            "'Want to give me feedback on this webinar campaign copy?'",
            "Chandler's expression shifts - not quite a smile, but something close. 'Yeah, alright. Let me see.'",
            "He scans your draft with a critical eye. 'Okay, this hook is solid. But this middle section? Too much feature-listing. Nobody cares about features until you make them care about the problem.'",
            "'Cut this paragraph. Replace it with a specific example - like, show don't tell. Paint a picture of someone actually struggling with expense reports.'",
            "His feedback is sharp, direct, and honestly really good. He's competitive, but he's also genuinely skilled.",
            "'There. That's better.' He nods at your screen. 'You're not bad at this. For an intern.'"
        ],
        choices: [
            {
                id: "thank_chandler",
                text: "Thanks, that actually helps a lot",
                next: "day4_afternoon_start",
                effects: {
                    relationships: { chandler: 5 },
                    badges: ["earned_chandlers_respect"]
                }
            }
        ]
    },

    // ===== DAY 4: AFTERNOON (ANDRE MENTOR LUNCH) =====
    day4_afternoon_start: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Around noon, Andre appears at your desk with his ever-present energy drink.",
            "'Hey.' His tone is different than usual - less manic, more intentional. 'Want to grab lunch? Just us. I wanted to check in on how your first week's actually going.'",
            "There's genuine care in his voice. This isn't just a courtesy check-in - Andre actually wants to know.",
            "'There's this sandwich place two blocks away. My treat. I-promise-I'll-try-not-to-talk-too-fast.' He grins self-consciously."
        ],
        choices: [
            {
                id: "lunch_with_andre",
                text: "I'd like that, thanks Andre",
                next: "day4_afternoon_andre_lunch",
                effects: {
                    relationships: { andre: 12 },
                    badges: ["mentorship_moment"]
                }
            },
            {
                id: "quick_check_in",
                text: "Can we do a quick check-in here? I'm at a good stopping point",
                next: "day4_afternoon_andre_quick_chat",
                effects: {
                    relationships: { andre: 5 }
                }
            },
            {
                id: "joke_about_speed",
                text: "Only if you promise to actually not talk fast!",
                next: "day4_afternoon_andre_lunch",
                effects: {
                    relationships: { andre: 10 }
                }
            }
        ]
    },

    day4_afternoon_andre_lunch: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "The sandwich shop is low-key and perfect for conversation. You order at the counter and grab a table by the window.",
            "Andre takes a deep breath before speaking - you can tell he's consciously slowing himself down. 'So. Real talk. How are you actually doing?'",
            "'First weeks are hard. There's so much to learn, you're trying to prove yourself, you don't know who to trust yet. I remember mine - I was stressed as hell, honestly.'",
            "He takes a bite of his sandwich. 'I see you working hard. Really hard. Which is great! But I also want to make sure you're not burning yourself out.'",
            "'This job is a marathon, not a sprint. You're allowed to take breaks. You're allowed to not know things. You're allowed to ask for help.'",
            "There's something almost vulnerable in how he says it. Like he's talking to his past self as much as to you.",
            "'I guess what I'm asking is - do you feel supported here? Is there anything I can do better as your... mentor? Manager? Whatever I am to you.'"
        ],
        choices: [
            {
                id: "open_up_to_andre",
                text: "Honestly? Sometimes I feel like I'm faking it",
                next: "day4_afternoon_andre_vulnerable",
                effects: {
                    relationships: { andre: 15 }
                }
            },
            {
                id: "stay_positive",
                text: "I'm doing good! Everyone's been really welcoming",
                next: "day4_afternoon_andre_positive",
                effects: {
                    relationships: { andre: 8 }
                }
            },
            {
                id: "ask_about_andre",
                text: "What was your first week like here?",
                next: "day4_afternoon_andre_story",
                effects: {
                    relationships: { andre: 12 }
                }
            }
        ]
    },

    day4_afternoon_andre_vulnerable: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Andre's expression softens. 'Dude. Everyone feels like they're faking it. Literally everyone.'",
            "'You-know-what-they-call-that? Impostor syndrome. And-it-never-fully-goes-away-you-just-get-better-at-recognizing-when-it's-lying-to-you.'",
            "He catches himself speeding up and takes a breath. 'Sorry. But seriously - you're not faking it. You're learning. That's literally what you're supposed to be doing.'",
            "'I've seen interns who phone it in, who just do the bare minimum. You're not that. You ask questions, you stay late, you actually care about the work. That's not faking - that's trying.'",
            "'And trying is enough. More than enough, actually.'",
            "He looks directly at you. 'If you ever feel overwhelmed, tell me. Not because you're failing - because you're human. I'm here to support you, not judge you. That's my job. That's what I want to do.'",
            "You feel a weight lift. Andre's not just your manager - he's genuinely in your corner."
        ],
        choices: [
            {
                id: "thank_andre_real",
                text: "Thank you. That actually really helps",
                next: "day4_late_afternoon_start",
                effects: {
                    relationships: { andre: 10 },
                    badges: ["vulnerable_moment"]
                }
            },
            {
                id: "lighten_mood",
                text: "So... you're saying I should drink more energy drinks?",
                next: "day4_afternoon_andre_joke",
                effects: {
                    relationships: { andre: 8 }
                }
            }
        ]
    },

    day4_afternoon_andre_joke: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "andre",
        characterExpression: "happy",
        text: [
            "Andre laughs - genuinely laughs. 'Oh-god-no-please-don't-do-what-I-do-with-the-energy-drinks-I'm-probably-gonna-have-a-heart-attack-before-I'm-thirty-five.'",
            "'Jesse keeps hiding them from me. He-thinks-it's-hilarious-but-honestly-he's-probably-right-I-should-cut-back.'",
            "He grins. 'But seriously. You're doing great. Keep being yourself. That's the secret - just be authentically you. The right people will appreciate it.'",
            "You head back to the office feeling lighter, more confident.",
            "Andre isn't just a manager. He's become a real mentor."
        ],
        choices: [
            {
                id: "back_to_office",
                text: "Head back and finish the webinar campaign",
                next: "day4_late_afternoon_start",
                effects: {
                    relationships: { andre: 5 }
                }
            }
        ]
    },

    day4_afternoon_andre_positive: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "andre",
        characterExpression: "happy",
        text: [
            "Andre nods, looking pleased. 'Good! That's really good. The team here is special - people genuinely care about each other.'",
            "'Just-remember-if-that-changes-or-if-you-ever-feel-differently-you-can-tell-me-okay? My-door-is-always-open. Metaphorically. I-don't-actually-have-a-door-it's-an-open-office-but-you-know-what-I-mean.'",
            "He's back to his normal rapid-fire speech, which somehow feels comforting.",
            "You finish lunch and head back, feeling appreciated and supported."
        ],
        choices: [
            {
                id: "back_to_office",
                text: "Return to work",
                next: "day4_late_afternoon_start",
                effects: {
                    relationships: { andre: 5 }
                }
            }
        ]
    },

    day4_afternoon_andre_story: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Andre smiles at the memory. 'Oh-man-my-first-week-was-chaos. The-company-was-like-fifteen-people-back-then-and-I-was-supposed-to-set-up-the-entire-revenue-operations-infrastructure-from-scratch.'",
            "'I-had-no-idea-what-I-was-doing. Like-none. I-just-Googled-everything-and-pretended-to-be-confident.'",
            "He laughs. 'Blake-hired-me-because-I-was-enthusiastic-not-because-I-was-qualified. And-somehow-it-worked-out. I-learned-by-doing. Made-a-ton-of-mistakes-but-everyone-was-patient-with-me.'",
            "'That's-why-I-try-to-be-that-for-new-people-now. Someone-was-patient-with-me-when-I-was-figuring-it-out. So-I-want-to-be-that-person-for-you.'",
            "You see Andre differently now - not just as the hyper-competent director, but as someone who was once where you are."
        ],
        choices: [
            {
                id: "thank_for_sharing",
                text: "Thanks for sharing that. It helps to know I'm not alone",
                next: "day4_late_afternoon_start",
                effects: {
                    relationships: { andre: 10 }
                }
            }
        ]
    },

    day4_afternoon_andre_quick_chat: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Andre nods and grabs his chair. 'Yeah-of-course-let's-chat-here!'",
            "He consciously slows down. 'So... how are you actually doing? First week can be intense.'",
            "'I just want to make sure you feel supported. Is there anything I can do better as your manager?'",
            "You share honestly - the good, the challenging, the learning curve. Andre listens genuinely.",
            "'That's-really-helpful-feedback-thank-you.' He stands up. 'And hey - next time, let's actually do lunch. I promise I'll try to not talk fast.'",
            "It's not as deep as a lunch would have been, but you still feel heard and supported."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Get back to work",
                next: "day4_late_afternoon_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 4: LATE AFTERNOON (FRIDAY TRADITION MENTIONED) =====
    day4_late_afternoon_start: {
        day: 4,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "Late afternoon on Thursday. The webinar campaign is really coming together - you've got strong copy, coordinated with design, aligned with product messaging.",
            "You send it to Colby for review. He replies within five minutes: 'BRO. This is GOOD. Like actually really good. Making a few tiny notes but this is basically ready to go. Nice work!'",
            "That validation feels incredible.",
            "Around 4:30, you hear Jesse and Chandler talking near the break room about tomorrow.",
            "'Yeah, Friday 7-11 walk is non-negotiable,' Jesse says. 'It's tradition, man. Been doing it since the company was five people.'",
            "Chandler nods. 'Only the real ones get invited though.'",
            "You wonder if you're one of 'the real ones' yet."
        ],
        choices: [
            {
                id: "interested_tradition",
                text: "Make a mental note to ask about it tomorrow",
                next: "day4_end",
                effects: {
                    badges: ["tradition_curious"]
                }
            },
            {
                id: "not_interested",
                text: "Sounds like their thing, not mine",
                next: "day4_end",
                effects: {}
            },
            {
                id: "ask_now",
                text: "Walk over and ask about the tradition",
                next: "day4_late_afternoon_ask_tradition",
                effects: {
                    relationships: { jesse: 5 }
                }
            }
        ]
    },

    day4_late_afternoon_ask_tradition: {
        day: 4,
        period: 4,
        periodName: "Late Afternoon",
        background: "break_room",
        character: "jesse",
        characterExpression: "happy",
        text: [
            "You walk over. 'Hey - I couldn't help but overhear. What's the 7-11 walk?'",
            "Jesse's eyes get that mischievous twinkle. 'Oh man, it's a Divvy institution! Every Friday after work, we walk to the 7-11 down the street, get slurpees and snacks, just hang out.'",
            "'Started when the company was tiny - like five people in a tiny office. Blake, Andre, a couple others. They'd end every week with a 7-11 walk to decompress.'",
            "'Now we're like thirty people but we kept the tradition. It's our way of saying - work is work, but people are what matter.'",
            "Chandler nods. 'You should come tomorrow if you want. It's chill.'",
            "Coming from Chandler, that's basically a formal invitation."
        ],
        choices: [
            {
                id: "plan_to_join",
                text: "I'd love to join! Sounds like a great tradition",
                next: "day4_end",
                effects: {
                    relationships: { jesse: 7, chandler: 5 }
                }
            },
            {
                id: "maybe_join",
                text: "Cool, I'll see how tomorrow goes",
                next: "day4_end",
                effects: {
                    relationships: { jesse: 3 }
                }
            }
        ]
    },

    day4_end: {
        day: 4,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "Thursday wraps up. You've completed your first real project, had a meaningful mentor conversation with Andre, and learned about the Friday tradition.",
            "This week has been a whirlwind - company drama about the pivot, new friendships forming, real work getting done.",
            "Tomorrow is Friday. The final day of your first week at Divvy.",
            "You pack up feeling accomplished. You're not just surviving here - you're actually thriving."
        ],
        choices: [
            {
                id: "start_day5",
                text: "Start Day 5 (Friday!)",
                next: "day5_morning_start",
                effects: {
                    badges: ["week_one_warrior"]
                }
            }
        ]
    },

    // ===== DAY 5: MORNING (FRIDAY VIBES) =====
    day5_morning_start: {
        day: 5,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "Friday morning! The entire office has a different energy - music playing a bit louder, people chatting more freely, that collective exhale of 'we made it.'",
            "Your desk has a post-it note from Colby: 'Campaign approved! Launching Monday. You crushed it bro. - C'",
            "That feels incredible. Real impact. Real results.",
            "You check your calendar - surprisingly light for a Friday. Looks like people are wrapping up the week rather than starting new things.",
            "The 7-11 walk is supposedly happening around 5:30. You still haven't decided if you're going."
        ],
        choices: [
            {
                id: "work_normally",
                text: "Get started on normal Friday work",
                next: "day5_morning_work",
                effects: {}
            },
            {
                id: "celebrate_wins",
                text: "Take a moment to appreciate the week's wins",
                next: "day5_morning_reflect",
                effects: {
                    badges: ["self_aware"]
                }
            }
        ]
    },

    day5_morning_work: {
        day: 5,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "You dive into some lighter Friday tasks - organizing files, responding to emails, cleaning up your workspace.",
            "Around you, the office is in that perfect Friday flow state. Productive but relaxed.",
            "The morning passes pleasantly. You've earned this easier pace."
        ],
        choices: [
            {
                id: "continue_morning",
                text: "Continue working",
                next: "day5_late_morning_start",
                effects: {}
            }
        ]
    },

    day5_morning_reflect: {
        day: 5,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "You lean back in your chair and think about the week.",
            "Day 1: Nervous, eager, trying to make good impressions. Met Andre, Jacob, Colby, Ramona. Started learning the ropes.",
            "Day 2: Company all-hands, the enterprise pivot drama. Navigating office politics. Building deeper relationships.",
            "Day 3: Mid-week grind. Witnessed leadership tension. Optional late-night work session bonding.",
            "Day 4: First real project. Mentor moment with Andre. Collaboration with Jacob. Real contribution.",
            "Day 5: You're here. You made it through week one.",
            "You're not the same person who walked into that lobby Monday morning. You've grown.",
            "Time to finish strong."
        ],
        choices: [
            {
                id: "continue_friday",
                text: "Get to work",
                next: "day5_late_morning_start",
                effects: {}
            }
        ]
    },

    day5_morning_after_slack: {
        day: 5,
        period: 1,
        periodName: "Morning",
        background: "office_desk",
        character: null,
        text: [
            "Your Slack conversation is fun and light - Friday vibes all around.",
            "Everyone's in good spirits, reflecting on the week, making weekend plans.",
            "You feel connected to this team. They're not just coworkers anymore - they're becoming friends."
        ],
        choices: [
            {
                id: "continue_friday_work",
                text: "Finish up some work tasks",
                next: "day5_late_morning_start",
                effects: {}
            }
        ]
    },

    // ===== DAY 5: LATE MORNING (PIVOT DECISION ANNOUNCEMENT) =====
    day5_late_morning_start: {
        day: 5,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "At 10:47 AM, Blake sends a company-wide email. Subject: 'Our Path Forward - Q4 Decision.'",
            "The office goes quiet as everyone reads.",
            "'Team - After thoughtful consideration and input from many of you, we're officially moving forward with the enterprise pivot. This was not an easy decision, and I want to acknowledge that not everyone agrees with it. That's okay. Diverse perspectives make us stronger.'",
            "'Starting next week, we'll begin restructuring product roadmap and go-to-market strategy. There will be changes - some team reorganization, new roles, evolved priorities. This will be an adjustment period.'",
            "'I value transparency, so here's my ask: If you have concerns, come talk to me directly. If you have ideas for how to make this transition successful, I want to hear them. If you fundamentally can't get behind this direction... I'll understand.'",
            "'Thank you to everyone who contributed to this conversation. Especially those who disagreed with me - that takes courage. Let's build something great together. - Blake'",
            "You watch reactions around the office. Pat reads it with his usual sarcastic expression, mutters something that sounds like 'finally made a damn decision.' Jacob looks thoughtful, maybe a little resigned. Andre is already planning something, typing frantically."
        ],
        choices: [
            {
                id: "process_announcement",
                text: "Take time to process the announcement",
                next: "day5_late_morning_react",
                effects: {}
            },
            {
                id: "check_on_jacob",
                text: "Check in with Jacob - he seemed opposed to this",
                next: "day5_late_morning_check_jacob",
                effects: {
                    relationships: { jacob: 8 }
                }
            },
            {
                id: "focus_on_work",
                text: "Not your decision to worry about - back to work",
                next: "day5_afternoon_start",
                effects: {}
            }
        ]
    },

    day5_late_morning_react: {
        day: 5,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: null,
        text: [
            "The decision is made. For better or worse, Divvy is pivoting to enterprise.",
            "You think about Ramona's comment - different perspectives, different priorities. Blake's betting on long-term growth. Jacob was advocating for staying true to original values.",
            "Both can be right from their own perspective.",
            "What matters now is execution. The decision is made - now the team needs to make it work.",
            "You wonder how this will affect your role, the company culture, the products you'll market.",
            "Change is coming. Change is already here."
        ],
        choices: [
            {
                id: "continue_to_lunch",
                text: "Almost lunch time",
                next: "day5_afternoon_start",
                effects: {}
            }
        ]
    },

    day5_late_morning_check_jacob: {
        day: 5,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You walk over to Jacob's desk. He's staring at his MacBook screen but clearly not actually working.",
            "'Hey. You okay?'",
            "He looks up, managing a small smile. 'Yeah. I mean, I'm processing. I knew this was coming after that conversation with Blake earlier this week.'",
            "'I still think it's the wrong move, but...' He shrugs. 'That's not my call to make. Blake's the CEO. He has information and perspective I don't have.'",
            "'My job now is to make this work. Figure out how to evolve the product for enterprise without losing what makes it great. That's the challenge.'",
            "He looks at you. 'Thanks for checking in though. That's kind of you.'",
            "You see a different side of Jacob - not just the polished product manager, but someone genuinely invested in the mission."
        ],
        choices: [
            {
                id: "offer_support",
                text: "Let me know if there's anything I can do to help",
                next: "day5_afternoon_start",
                effects: {
                    relationships: { jacob: 10 }
                }
            },
            {
                id: "stay_positive_jacob",
                text: "You'll figure it out - you're great at what you do",
                next: "day5_afternoon_start",
                effects: {
                    relationships: { jacob: 7 }
                }
            }
        ]
    },

    // ===== DAY 5: AFTERNOON (FINAL LUNCH) =====
    day5_afternoon_start: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "Lunch time on Friday. The pivot announcement has settled into background noise - people are already moving forward.",
            "Ramona stops by your desk with her usual warmth. 'Hey! Want to grab lunch? It's your last day of week one - we should celebrate!'",
            "Behind her, you see Pat organizing something with Casper and Chandler. They might be planning a group lunch.",
            "Decisions, decisions."
        ],
        choices: [
            {
                id: "lunch_ramona",
                text: "I'd love to! Where are we going?",
                next: "day5_afternoon_lunch_ramona",
                effects: {
                    relationships: { ramona: 10 }
                }
            },
            {
                id: "join_group_lunch",
                text: "Is that a group thing happening? Can we join them?",
                next: "day5_afternoon_group_lunch",
                effects: {
                    relationships: { ramona: 5, pat: 5, casper: 5, chandler: 5 }
                }
            },
            {
                id: "help_jesse_urgent",
                text: "Actually, I promised Jesse I'd help with something urgent",
                next: "day5_afternoon_help_jesse",
                effects: {
                    relationships: { ramona: -3, jesse: 10 }
                }
            }
        ]
    },

    day5_afternoon_lunch_ramona: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "You grab tacos with Ramona at a food truck nearby. It's sunny, and you eat outside on a bench.",
            "'So - first week at Divvy. How does it feel?' She genuinely wants to know.",
            "You reflect honestly. The chaos, the learning curve, the relationships forming, the real work starting to happen.",
            "'That's exactly what a good first week should feel like,' Ramona says. 'A little overwhelming, mostly exciting, definitely memorable.'",
            "'You fit in here. I can tell. You're not just going through the motions - you actually care about the work and the people. That matters more than experience or skills.'",
            "'Skills you can learn. Attitude and character? That's harder to teach.'",
            "She takes a bite of her taco. 'I'm glad you're here. I think you're going to do really well.'",
            "You feel seen. Valued. Part of something."
        ],
        choices: [
            {
                id: "thank_ramona",
                text: "Thank you. That really means a lot",
                next: "day5_late_afternoon_start",
                effects: {
                    relationships: { ramona: 8 }
                }
            },
            {
                id: "ask_about_ramona",
                text: "What was your first week here like?",
                next: "day5_afternoon_ramona_story",
                effects: {
                    relationships: { ramona: 10 }
                }
            }
        ]
    },

    day5_afternoon_ramona_story: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "Ramona smiles at the memory. 'Oh man, my first week was ROUGH. I came from a huge corporate environment - everything was process-driven and hierarchical.'",
            "'I get here and it's just... chaos. In the best way, but still chaos. People making decisions fast, pivoting constantly, everyone wearing multiple hats.'",
            "'I almost quit after day three. I thought I'd made a huge mistake leaving my stable corporate job for this startup thing.'",
            "'But then Andre took me to lunch - kind of like what I'm doing with you now - and he said something that stuck with me: Startups aren't about having everything figured out. They're about figuring it out together.'",
            "'And that changed my perspective completely. I stopped trying to fit the Divvy culture into my old corporate framework and just... embraced the chaos.'",
            "'Best decision I ever made. This place is special because of the people. Remember that on the hard days.'",
            "You finish lunch feeling inspired and grounded."
        ],
        choices: [
            {
                id: "back_to_office_ramona",
                text: "Head back to the office together",
                next: "day5_late_afternoon_start",
                effects: {
                    relationships: { ramona: 7 }
                }
            }
        ]
    },

    day5_afternoon_group_lunch: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "restaurant",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "You join the group - Ramona, Pat, Casper, and Chandler - at a burger place.",
            "The energy is fun and chaotic. Pat is in peak form, making sarcastic comments about everything. 'Oh great, the intern's here. Now we have to act professional.' His tone makes it clear he's joking.",
            "Casper is supportive as always. 'How was your first week? Be honest.'",
            "Chandler's actually engaged in the conversation, not hiding behind headphones. That's growth.",
            "Ramona orchestrates the whole vibe, making sure everyone's included.",
            "The conversation bounces from work to weekend plans to random tangents. This is team bonding in its purest form.",
            "You realize - this is what people mean when they talk about 'company culture.' It's not the ping pong table or the free snacks. It's this. The people."
        ],
        choices: [
            {
                id: "engage_with_group",
                text: "Jump into the conversation fully",
                next: "day5_late_afternoon_start",
                effects: {
                    relationships: { pat: 7, casper: 7, chandler: 7, ramona: 7 },
                    badges: ["social_butterfly"]
                }
            },
            {
                id: "observe_group",
                text: "Mostly listen and enjoy the dynamic",
                next: "day5_late_afternoon_start",
                effects: {
                    relationships: { pat: 3, casper: 3, chandler: 3, ramona: 3 }
                }
            }
        ]
    },

    day5_afternoon_help_jesse: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "jesse",
        characterExpression: "happy",
        text: [
            "You find Jesse at his desk looking stressed. 'Oh thank god! I need to finish this ops dashboard before EOD and I'm drowning.'",
            "You grab lunch together at your desks while working - it's not glamorous, but it's real teamwork.",
            "'Dude, you're a lifesaver,' Jesse says between bites of his sandwich. 'Most people would've gone to lunch and left me hanging.'",
            "You help him debug some automation scripts. It's actually kind of fun solving problems together.",
            "By the time you finish, Jesse fist-bumps you. 'You're solid. For real. I owe you one.'",
            "You missed the social lunch, but you built real trust with Jesse. Sometimes work bonds are just as valuable."
        ],
        choices: [
            {
                id: "continue_afternoon",
                text: "Get back to your own work",
                next: "day5_late_afternoon_start",
                effects: {
                    badges: ["team_player"]
                }
            }
        ]
    },

    // ===== DAY 5: LATE AFTERNOON (7-11 WALK INVITATION) =====
    day5_late_afternoon_start: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "andre",
        characterExpression: "happy",
        text: [
            "5:00 PM on Friday. The week is essentially over - people are wrapping up, saving files, shutting down laptops.",
            "Andre walks over with his usual energy drink and a big smile. 'Yo! So Friday tradition time - we're doing the 7-11 walk in like thirty minutes. You coming?'",
            "Behind him, you see Jesse, Chandler, Colby, Ramona, and a few others gathering.",
            "'It's-literally-the-most-important-Divvy-tradition,' Andre says, speaking fast with excitement. 'We-walk-to-7-11-get-slurpees-or-snacks-or-whatever-and-just-hang-out. Been-doing-it-since-the-company-was-five-people.'",
            "'You should totally come. For real. It's like... the core Divvy experience.'",
            "This is the moment. The invitation you've been building toward all week."
        ],
        choices: [
            {
                id: "join_711_walk",
                text: "Absolutely! I've been looking forward to this",
                next: "day5_711_walk",
                effects: {
                    relationships: { andre: 10, chandler: 8, ramona: 8, jesse: 8, colby: 8 },
                    coreExperience: { key: "sevenElevenWalk", value: true },
                    badges: ["seven_eleven_walk", "core_experience"]
                }
            },
            {
                id: "skip_711_tired",
                text: "I'm pretty exhausted - I think I'll head home",
                next: "day5_skip_711_walk",
                effects: {
                    relationships: { andre: -10, chandler: -8, ramona: -5, jesse: -5 }
                }
            },
            {
                id: "ask_whos_going",
                text: "Who's all going?",
                next: "day5_late_afternoon_711_details",
                effects: {
                    relationships: { andre: 3 }
                }
            }
        ]
    },

    day5_late_afternoon_711_details: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "andre",
        characterExpression: "happy",
        text: [
            "'Oh-uh-let's-see.' Andre counts on his fingers. 'Me-Jesse-Chandler-Ramona-Pat-Casper-Jacob-Scott-if-he's-not-doing-something-ridiculous.'",
            "'Basically-anyone-who's-cool-and-wants-to-decompress-after-the-week. It's-super-casual-we-literally-just-walk-talk-buy-snacks-and-walk-back.'",
            "'But-it's-important-you-know? Like-it's-our-way-of-saying-we're-not-just-coworkers-we're-actually-friends-who-happen-to-work-together.'",
            "Jesse appears behind Andre with his signature twinkle. 'Translation: it's mandatory fun. But actually fun.'",
            "Andre grins. 'So-you-in?'"
        ],
        choices: [
            {
                id: "join_after_details",
                text: "Yeah, I'm in. Let's go",
                next: "day5_711_walk",
                effects: {
                    relationships: { andre: 8, chandler: 7, jesse: 7 },
                    coreExperience: { key: "sevenElevenWalk", value: true },
                    badges: ["seven_eleven_walk"]
                }
            },
            {
                id: "decline_after_details",
                text: "It sounds great, but I really need to head home",
                next: "day5_skip_711_walk",
                effects: {
                    relationships: { andre: -8, jesse: -5 }
                }
            }
        ]
    },

    day5_711_walk: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "seven_eleven",
        character: "andre",
        characterExpression: "happy",
        text: [
            "5:30 PM. The crew heads out together - about ten people total, laughing and chatting as you walk down the street. The mountains are glowing in the late afternoon sun.",
            "The 7-11 is three blocks away. The air is crisp and fresh, and you're part of this.",
            "Inside, everyone scatters to different aisles. Jesse gets a blue raspberry slurpee. Andre gets another Red Bull ('I-know-I-know-but-it's-Friday'). Chandler gets sour gummy worms. Colby debates between protein bars and actually fun snacks.",
            "Ramona gets a cherry slurpee and offers you a sip. 'Try it! Best one.'",
            "Pat grabs beef jerky and makes a sarcastic comment about 'peak nutrition.' Casper is supportive of everyone's choices. Jacob gets sparkling water because of course he does.",
            "You grab your own snack - whatever feels right in the moment.",
            "Walking back, the conversation flows. Jesse tells a story about pranking Andre last week. Chandler actually laughs. Andre talks about weekend plans. Someone mentions the company pivot and Blake makes a joke to diffuse tension.",
            "This is it. This is the Divvy culture you heard about. Not the work - the people between the work.",
            "As you approach the office parking lot, Chandler pulls you aside. 'Yo. Real talk - a few of us are meeting up later tonight. Gaming room. Kind of exclusive - you have to be invited.'",
            "His eyes assess you. 'You're cool. You earned it this week. Want to come?'"
        ],
        choices: [
            {
                id: "accept_gaming_invite",
                text: "Hell yeah! What time?",
                next: "day5_gaming_room_invitation",
                effects: {
                    relationships: { chandler: 15, andre: 10, jesse: 10 },
                    coreExperience: { key: "gamingRoomInvite", value: true },
                    badges: ["gaming_room_invite", "inner_circle"]
                }
            },
            {
                id: "decline_gaming",
                text: "I appreciate the invite, but I'm exhausted",
                next: "day5_end_711_only",
                effects: {
                    relationships: { chandler: -3 }
                }
            },
            {
                id: "ask_gaming_details",
                text: "What's the gaming room?",
                next: "day5_late_afternoon_gaming_explain",
                effects: {
                    relationships: { chandler: 5 }
                }
            }
        ]
    },

    day5_late_afternoon_gaming_explain: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "Chandler lowers his voice conspiratorially. 'So there's this room in the back of the office. Gaming setup - couple consoles, nice monitors, good speakers. Secret spot.'",
            "'Only people who really vibe with the Divvy culture get invited. It's not like an official thing - more like... if you know, you know.'",
            "Jesse overhears and chimes in. 'We call ourselves the UDM - Underground Divvy Members. Sounds cooler than it is. We basically just play games and eat pizza and talk about life.'",
            "'But it's special,' Chandler continues. 'It's where the real friendships happen. You've proven yourself this week - you're not just an intern trying to look good. You're actually here to be part of the team.'",
            "'So - you in?'"
        ],
        choices: [
            {
                id: "join_after_explanation",
                text: "I'm honored. Yeah, I'm in",
                next: "day5_gaming_room_invitation",
                effects: {
                    relationships: { chandler: 12, jesse: 10 },
                    coreExperience: { key: "gamingRoomInvite", value: true },
                    badges: ["gaming_room_invite"]
                }
            },
            {
                id: "decline_still",
                text: "That sounds amazing, but I'm wiped. Rain check?",
                next: "day5_end_711_only",
                effects: {
                    relationships: { chandler: 2 }
                }
            }
        ]
    },

    day5_gaming_room_invitation: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "gaming_room",
        character: "chandler",
        characterExpression: "happy",
        text: [
            "7:00 PM. You're in the secret gaming room with Chandler, Jesse, Andre, Colby, and a couple others.",
            "The room is exactly as described - two big monitors, a PlayStation and Xbox, a Switch, comfortable seating, dim lighting, good vibes.",
            "Pizza arrives - someone ordered three large pies. Chandler's on aux, playing a carefully curated playlist. Jesse and Andre are mid-game on the PlayStation, trash-talking playfully.",
            "Colby's telling a story about his gym PR this week. 'Hit two-twenty-five on bench, bros! New max!' Everyone congratulates him.",
            "You join in a round of Mario Kart. Chandler is devastatingly competitive but gracious when Jesse beats him. Andre can't stop talking even while playing.",
            "Around 8:30, the conversation shifts from games to real talk. Dreams, fears, why everyone chose to work at Divvy, what they want from life.",
            "Jesse talks about wanting to create music professionally someday. Colby admits he's not the smartest guy but he works harder than anyone. Chandler opens up about feeling pressure to prove himself as an intern.",
            "Andre - speaking at normal speed for once - says quietly: 'This is my favorite part of the job. Not the revenue operations stuff. This. The people.'",
            "Everyone nods. Someone says 'same.'",
            "You're not watching this moment - you're in it. Part of it. Creating it.",
            "Around 9:30, people start heading home. Everyone's tired but happy. The week is over. The first week is complete.",
            "As you leave, Chandler does a rare thing - he fist-bumps you. 'You're part of the crew now. Welcome to Divvy for real.'",
            "You drive home replaying the night. The week. Everything.",
            "You came in Monday as an intern trying to prove yourself.",
            "You're leaving Friday as part of the family."
        ],
        choices: [
            {
                id: "complete_week",
                text: "Complete Week One at Divvy",
                next: "ending_sequence",
                effects: {
                    badges: ["week_one_complete", "inner_circle_member"]
                }
            }
        ]
    },

    day5_end_711_only: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You head home after the 7-11 walk while some others continue on to the gaming room.",
            "Part of you wonders what you're missing, but you're genuinely exhausted. It's been an intense week.",
            "As you drive home, you reflect on everything.",
            "The all-hands meeting drama. The late-night work sessions. The mentor moments with Andre. The collaboration with Jacob. The first real project.",
            "And ending with the 7-11 walk - the core Divvy tradition. You participated. You showed up. You connected.",
            "Maybe you didn't make it to the inner-inner circle tonight, but you're definitely not an outsider anymore.",
            "Week one at Divvy: complete.",
            "And honestly? You crushed it."
        ],
        choices: [
            {
                id: "complete_week",
                text: "Complete Week One at Divvy",
                next: "ending_sequence",
                effects: {
                    badges: ["week_one_complete"]
                }
            }
        ]
    },

    day5_skip_711_walk: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You decline the invitation and pack up your things.",
            "Andre looks disappointed but tries to hide it. 'Oh-yeah-totally-get-it-you-must-be-exhausted. Have-a-great-weekend!'",
            "You watch the crew leave together - laughing, energetic, bonded. You're heading home alone.",
            "As you drive, you can't help but wonder if you made a mistake. The 7-11 walk was the tradition, the core experience, the thing everyone talks about.",
            "And you chose to miss it.",
            "Work-life balance is important. Rest is important. But so is showing up for the moments that matter.",
            "Week one at Divvy: complete. But did you really experience it?",
            "Something to think about."
        ],
        choices: [
            {
                id: "complete_week_missed",
                text: "Complete Week One at Divvy",
                next: "ending_sequence",
                effects: {
                    badges: ["week_one_complete", "missed_tradition"]
                }
            }
        ]
    },

    // ===== ENDING SEQUENCE =====
    ending_sequence: {
        day: 5,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "Your first week at Divvy has come to an end.",
            "Five days. Dozens of choices. Relationships built, tested, strengthened.",
            "You navigated office politics, completed real work, showed up for traditions, formed genuine connections.",
            "Time to see how you did..."
        ],
        choices: []
    }

};

// Helper function to get scenario by ID
function getScenario(sceneId) {
    return scenarios[sceneId];
}

// Helper function to get period name
function getPeriodName(period) {
    const names = {
        1: "Morning",
        2: "Late Morning",
        3: "Afternoon",
        4: "Late Afternoon"
    };
    return names[period] || "Unknown";
}

// Helper function to get background name
function getBackgroundName(backgroundId) {
    const names = {
        divvy_lobby: "Divvy Lobby",
        office_desk: "Office Desk",
        conference_room: "Conference Room",
        break_room: "Break Room",
        restaurant: "Break Room",
        seven_eleven: "7-11",
        gaming_room: "Gaming Room",
        salesfloor: "Sales Floor",
        sterlingsoffice: "Sterling's Office",
        woodysoffice: "Woody's Office",
        gamingroom: "Gaming Room"
    };
    return names[backgroundId] || "Office";
}

// Helper function to get background image
function getBackgroundImage(backgroundId) {
    const images = {
        divvy_lobby: "assets/backgrounds/lobby.png",
        office_desk: "assets/backgrounds/officedesk.png",
        conference_room: "assets/backgrounds/conferenceroom.png",
        break_room: "assets/backgrounds/lunchroom.png",
        restaurant: "assets/backgrounds/lunchroom.png",
        seven_eleven: "assets/backgrounds/711.png",
        gaming_room: "assets/backgrounds/gamingroom.png"
    };
    return images[backgroundId] || "assets/backgrounds/officedesk.png";
}

// Helper function to get background color (fallback)
function getBackgroundColor(backgroundId) {
    const colors = {
        divvy_lobby: "#2c3e50",
        office_desk: "#34495e",
        conference_room: "#7f8c8d",
        break_room: "#16a085",
        restaurant: "#e67e22",
        seven_eleven: "#e74c3c",
        gaming_room: "#9b59b6"
    };
    return colors[backgroundId] || "#34495e";
}

// Merge map scenarios if available
if (typeof map_scenarios !== 'undefined') {
    Object.assign(scenarios, map_scenarios);
}
