// MAP ENCOUNTER SCENARIOS - Optional exploration content

const map_scenarios = {
    // ===== DAY 1 MAP ENCOUNTERS =====
    map_day1_ramona_breakroom: {
        day: 1,
        period: 2,
        periodName: "Late Morning",
        background: "break_room",
        character: "ramona",
        characterExpression: "happy",
        text: [
            "You wander into the break room and find Ramona making coffee.",
            "'Oh hey!' She smiles warmly. 'First week coffee break? Smart move. The espresso machine is a little temperamental but it makes good coffee once you figure it out.'",
            "She shows you how to use it. 'So how's your first day going? Everyone being nice to you?'",
            "Her genuine interest makes you feel welcome."
        ],
        choices: [
            {
                id: "chat_more",
                text: "It's going great! Everyone's been really welcoming",
                next: "map_return",
                effects: {
                    relationships: { ramona: 5 }
                }
            },
            {
                id: "ask_advice",
                text: "Any advice for surviving the first week?",
                next: "map_return",
                effects: {
                    relationships: { ramona: 7 }
                }
            }
        ]
    },

    map_day1_colby_sales: {
        day: 1,
        period: 3,
        periodName: "Afternoon",
        background: "salesfloor",
        character: "colby",
        characterExpression: "neutral",
        text: [
            "You walk onto the sales floor. Colby is on a call, pacing while he talks.",
            "'Yeah bro, totally. The ROI is insane. You're gonna love it. Trust me.' He notices you and gives a quick nod.",
            "He wraps up the call. 'Yo, marketing! Checking out the sales floor? This is where the magic happens, bro. We close deals, make money, get gains.'",
            "He flexes unconsciously while talking. 'You ever think about doing sales? Way more money than marketing.'"
        ],
        choices: [
            {
                id: "respectful",
                text: "Sales seems intense! I'll stick with marketing",
                next: "map_return",
                effects: {
                    relationships: { colby: 3 }
                }
            },
            {
                id: "interested",
                text: "Maybe! What's your best sales tip?",
                next: "map_return",
                effects: {
                    relationships: { colby: 6 }
                }
            }
        ]
    },

    // ===== DAY 2 MAP ENCOUNTERS =====
    map_day2_jacob_conference: {
        day: 2,
        period: 1,
        periodName: "Morning",
        background: "conference_room",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "You peek into the conference room. Jacob is setting up his MacBook for the all-hands meeting.",
            "He looks up. 'Hey! You're early. The meeting doesn't start for another 20 minutes.'",
            "'I like to get here early and make sure the HDMI adapter works.' He taps his Space Black MacBook. 'Can't trust the conference room tech setup.'",
            "Classic Jacob - prepared and thoughtful."
        ],
        choices: [
            {
                id: "help_setup",
                text: "Need any help setting up?",
                next: "map_return",
                effects: {
                    relationships: { jacob: 6 }
                }
            },
            {
                id: "just_checking",
                text: "Just checking out the space. See you at the meeting!",
                next: "map_return",
                effects: {
                    relationships: { jacob: 3 }
                }
            }
        ]
    },

    map_day2_scott_breakroom: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "break_room",
        character: "scott",
        characterExpression: "happy",
        text: [
            "You walk into the break room and find Scott... building a tower out of coffee cups.",
            "'BEHOLD!' he announces dramatically. 'The Tower of Caffeine! A monument to our dedication!'",
            "A cup falls. The tower collapses. 'Okay, so it's a work in progress.'",
            "He grins. 'Break room physics are harder than they look. Want some coffee? I promise not to use your cup for architecture.'"
        ],
        choices: [
            {
                id: "laugh_join",
                text: "This is amazing. Can I help rebuild it?",
                next: "map_return",
                effects: {
                    relationships: { scott: 8 }
                }
            },
            {
                id: "just_coffee",
                text: "Just grabbing coffee, but this is hilarious",
                next: "map_return",
                effects: {
                    relationships: { scott: 4 }
                }
            }
        ]
    },

    // ===== DAY 3 MAP ENCOUNTERS =====
    map_day3_colby_sales: {
        day: 3,
        period: 2,
        periodName: "Late Morning",
        background: "salesfloor",
        character: "colby",
        characterExpression: "happy",
        text: [
            "Colby is doing push-ups in the middle of the sales floor.",
            "He sees you. 'Yo! Mid-day pump, bro. Gotta stay energized.' He pops up to his feet.",
            "'Sales is basically a workout. You're constantly fighting for deals, staying aggressive, pushing through objections.'",
            "'Plus if you're jacked, clients respect you more. Trust me, bro.'"
        ],
        choices: [
            {
                id: "impressed",
                text: "That's... one way to stay motivated",
                next: "map_return",
                effects: {
                    relationships: { colby: 4 }
                }
            },
            {
                id: "join_in",
                text: "Can I join? Could use a break",
                next: "map_return",
                effects: {
                    relationships: { colby: 8 }
                }
            }
        ]
    },

    map_day3_chandler_office: {
        day: 3,
        period: 3,
        periodName: "Afternoon",
        background: "woodysoffice",
        character: "chandler",
        characterExpression: "neutral",
        text: [
            "You find Chandler in Woody's office, headphones on, working on a laptop.",
            "He pulls off one ear. 'Sup. Woody lets me use this office when I need to focus. Less distractions.'",
            "'Working on campaign analytics. Trying to figure out which messaging actually converts.'",
            "He puts his headphones back on, but leaves one ear free - his way of saying you can stay if you want."
        ],
        choices: [
            {
                id: "ask_about_work",
                text: "What did you find? I'd love to learn",
                next: "map_return",
                effects: {
                    relationships: { chandler: 7 }
                }
            },
            {
                id: "leave_him_alone",
                text: "I'll let you focus. Catch you later",
                next: "map_return",
                effects: {
                    relationships: { chandler: 3 }
                }
            }
        ]
    },

    // ===== DAY 4 MAP ENCOUNTERS =====
    map_day4_jesse_breakroom: {
        day: 4,
        period: 1,
        periodName: "Morning",
        background: "break_room",
        character: "jesse",
        characterExpression: "happy",
        text: [
            "Jesse is making cold brew coffee with an elaborate setup that looks like a science experiment.",
            "'Wim Hof method!' he announces with a grin. You're pretty sure that's not what this is.",
            "'Just kidding. But imagine if coffee-making WAS about breathing techniques. I'd be a master.'",
            "He offers you some. 'Want to try? Fair warning: it's strong enough to wake the dead.'"
        ],
        choices: [
            {
                id: "try_coffee",
                text: "Sure, I'll risk it",
                next: "map_return",
                effects: {
                    relationships: { jesse: 6 }
                }
            },
            {
                id: "pass_coffee",
                text: "I'll stick with regular coffee, but thanks!",
                next: "map_return",
                effects: {
                    relationships: { jesse: 3 }
                }
            }
        ]
    },

    map_day4_pat_conference: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "Pat is in the conference room sketching something on the whiteboard.",
            "They notice you. 'Oh hey. Just working through some design ideas. Sometimes I think better with a big whiteboard.'",
            "The sketches are actually really good - clean, thoughtful UI layouts.",
            "'Don't tell anyone I use whiteboards. It's not very cool designer of me.' They're clearly joking."
        ],
        choices: [
            {
                id: "compliment_work",
                text: "These look great! Love the layout",
                next: "map_return",
                effects: {
                    relationships: { pat: 6 }
                }
            },
            {
                id: "ask_advice",
                text: "Any design tips for marketing materials?",
                next: "map_return",
                effects: {
                    relationships: { pat: 7 }
                }
            }
        ]
    },

    // ===== DAY 5 MAP ENCOUNTERS =====
    map_day5_casper_breakroom: {
        day: 5,
        period: 2,
        periodName: "Late Morning",
        background: "break_room",
        character: "casper",
        characterExpression: "happy",
        text: [
            "Casper is refilling the coffee supplies and organizing the break room.",
            "'Oh hey! Yeah, I usually do this on Fridays. Someone's gotta keep this place functional, right?'",
            "He's genuinely helpful, making sure everyone has what they need.",
            "'First week almost done! You should come to the 7-11 walk later if Andre hasn't invited you yet. It's a Divvy tradition.'"
        ],
        choices: [
            {
                id: "offer_help",
                text: "Want some help organizing?",
                next: "map_return",
                effects: {
                    relationships: { casper: 8 }
                }
            },
            {
                id: "thank_him",
                text: "Thanks for keeping the break room stocked!",
                next: "map_return",
                effects: {
                    relationships: { casper: 5 }
                }
            }
        ]
    },

    // ===== ADDITIONAL MAP ENCOUNTERS =====
    map_day2_scott_breakroom: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "break_room",
        character: "scott",
        characterExpression: "happy",
        text: [
            "You walk into the break room and find Scott standing on a chair, dramatically gesturing at the coffee machine.",
            "'And THAT, ladies and gentlemen, is why French press is objectively superior to drip coffee!' He's giving a TED talk to an imaginary audience.",
            "He notices you and hops down. 'Oh perfect! A real audience! Okay so hear me out - sales enablement is basically just teaching people how to tell better stories, right? And I'm REALLY good at stories.'",
            "'Want to hear about the time I accidentally sent a meme to a VP instead of the sales deck? Actually made the deal close faster. True story!'"
        ],
        choices: [
            {
                id: "hear_story",
                text: "I HAVE to hear this story",
                next: "map_day2_scott_story",
                effects: {
                    relationships: { scott: 8 }
                }
            },
            {
                id: "laugh_and_leave",
                text: "Haha maybe later Scott, I'm on a coffee run",
                next: "map_return",
                effects: {
                    relationships: { scott: 3 }
                }
            }
        ]
    },

    map_day2_scott_story: {
        day: 2,
        period: 3,
        periodName: "Afternoon",
        background: "break_room",
        character: "scott",
        characterExpression: "happy",
        text: [
            "Scott pours himself coffee while telling the story with maximum drama.",
            "'So it's Q3 close, right? BIG enterprise deal. I'm supposed to send the updated pitch deck to the sales team. But I'm also in a group chat making memes about our competitor.'",
            "'I grab the wrong file. Send the MEME to the VP of Sales. Just... a perfectly crafted roast of our competitor. I immediately panic, send a follow-up like sorry-wrong-file-here's-the-deck.'",
            "'But plot twist - the VP LOVES it. Screenshots it. Sends it to the whole sales floor. Everyone's dying laughing. The energy is INCREDIBLE.'",
            "'Next day? Deal closes. VP tells me the team needed that morale boost. Sometimes chaos is the strategy.' He grins. 'That's my sales enablement philosophy.'",
            "You realize Scott's chaotic energy is actually calculated - he knows exactly what he's doing.",
            "'Anyway, that's why I do what I do. Make sales not suck, one meme at a time.' He fist-bumps you."
        ],
        choices: [
            {
                id: "appreciate_scott",
                text: "That's actually genius. You're good at this",
                next: "map_return",
                effects: {
                    relationships: { scott: 10 },
                    badges: ["scott_approved"]
                }
            },
            {
                id: "laugh_continue",
                text: "That's hilarious. Back to work!",
                next: "map_return",
                effects: {
                    relationships: { scott: 6 }
                }
            }
        ]
    },

    map_day4_pat_conference: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "You peek into the conference room. Pat is sitting alone, feet up on the table, scrolling through his phone.",
            "He looks up. 'Oh great, the intern. Here to judge my work ethic?' His tone is sarcastic but not mean.",
            "'I'm taking a strategic break. You know what nobody talks about? How exhausting it is to care about business strategy all day.'",
            "'Everyone's always like let's-pivot-to-enterprise, let's-optimize-conversion, let's-synergize-our-whatever.' He makes air quotes. 'Sometimes I just want to sit in a quiet room and scroll Twitter.'",
            "There's something oddly honest about his cynicism. He's not actually checked out - he's just tired."
        ],
        choices: [
            {
                id: "join_break",
                text: "Mind if I take a strategic break with you?",
                next: "map_day4_pat_real_talk",
                effects: {
                    relationships: { pat: 10 }
                }
            },
            {
                id: "defend_work",
                text: "The work matters though, right?",
                next: "map_day4_pat_debate",
                effects: {
                    relationships: { pat: 5 }
                }
            },
            {
                id: "leave_pat",
                text: "Fair enough, enjoy your break!",
                next: "map_return",
                effects: {
                    relationships: { pat: 2 }
                }
            }
        ]
    },

    map_day4_pat_real_talk: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "You pull up a chair. Pat looks slightly surprised that you actually stayed.",
            "'Huh. Most people just awkwardly leave when I get like this.' He puts his phone down. 'Okay fine, real talk time.'",
            "'I actually like working here. Like, genuinely. The people are great. The product's solid. Blake's a good CEO even if he's too optimistic sometimes.'",
            "'But I refuse to pretend that startup culture isn't exhausting. All the energy, all the passion, all the we're-changing-the-world stuff. Sometimes you just need to sit in a room and admit it's all kind of absurd.'",
            "'That's my superpower though - perspective. Everyone else gets caught up in the moment. I stay grounded. Sarcastic. Realistic.'",
            "He smirks. 'Also I'm really good at expense management ops, but that's less fun to talk about.'",
            "'You're alright, intern. You get it. Most people think cynicism means you don't care. Sometimes it just means you care differently.'"
        ],
        choices: [
            {
                id: "understand_pat",
                text: "That actually makes a lot of sense",
                next: "map_return",
                effects: {
                    relationships: { pat: 12 },
                    badges: ["pat_approved"]
                }
            },
            {
                id: "appreciate_honesty",
                text: "Thanks for being real with me",
                next: "map_return",
                effects: {
                    relationships: { pat: 8 }
                }
            }
        ]
    },

    map_day4_pat_debate: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "conference_room",
        character: "pat",
        characterExpression: "neutral",
        text: [
            "Pat raises an eyebrow. 'Oh, we're doing this? Okay.'",
            "'Does the work matter? Sure. Is it life-or-death important? No. We're not curing cancer - we're helping companies manage expenses slightly better.'",
            "'Don't get me wrong, it's good work. But let's not pretend we're saving the world here. We're a B2B SaaS startup in Utah. We're fine.'",
            "His cynicism is almost refreshing in its honesty.",
            "'But hey, if the optimism thing works for you, go for it. Just don't burn yourself out pretending everything's amazing all the time.'"
        ],
        choices: [
            {
                id: "see_point",
                text: "Fair point. Balance matters",
                next: "map_return",
                effects: {
                    relationships: { pat: 6 }
                }
            },
            {
                id: "disagree",
                text: "I think caring is important though",
                next: "map_return",
                effects: {
                    relationships: { pat: 3 }
                }
            }
        ]
    },

    // Return to work after map exploration (fallback - should be updated dynamically)
    map_return: {
        background: "office_desk",
        character: null,
        text: [
            "You head back to your desk.",
            "Office exploration is fun, but there's work to do."
        ],
        choices: [
            {
                id: "back_to_story",
                text: "Continue",
                next: "day1_morning_start", // Safe fallback
                effects: {}
            }
        ]
    }
};
