// DAYS 3, 4, 5 SCENARIOS - Comprehensive personality-driven finale

const day3_4_5_scenarios = {
    // ===== DAY 3: MORNING =====
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
            },
            {
                id: "slack_about_drama",
                text: "📱 Slack someone to see what's going on",
                type: "slack",
                next: "day3_late_morning_after_slack",
                effects: {}
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
                next: "day3_afternoon_start",
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
                next: "day3_afternoon_start",
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
                next: "day3_afternoon_start",
                effects: {}
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
            },
            {
                id: "slack_other_lunch",
                text: "📱 Slack someone else for lunch plans",
                type: "slack",
                next: "day3_afternoon_after_slack",
                effects: {
                    relationships: { ramona: -5 }
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
            "There's something almost like respect in his tone. Chandler doesn't give invites lightly."
        ],
        choices: [
            {
                id: "stay_late_team",
                text: "Yeah, I'm in. Let's get it done",
                next: "day3_end_late_night_crew",
                effects: {
                    relationships: { chandler: 12, andre: 7, jesse: 5 },
                    badges: ["late_night_crew", "team_player"]
                }
            },
            {
                id: "leave_on_time",
                text: "I appreciate the invite, but I should head home tonight",
                next: "day3_end_work_life_balance",
                effects: {
                    relationships: { chandler: -5 }
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
            "Chandler shrugs. 'Me, Andre, Jesse, probably Colby for a bit before he heads to the gym. The usual suspects.'",
            "'We'll probably put on music, order too much pizza, and actually get stuff done without everyone else around. It's when the best work happens, honestly.'",
            "He pushes off the desk. 'But like I said - no pressure. Just figured I'd ask since you've been pulling your weight this week.'",
            "Coming from Chandler, that's basically a compliment."
        ],
        choices: [
            {
                id: "stay_after_details",
                text: "Alright, I'm in. Sounds productive",
                next: "day3_end_late_night_crew",
                effects: {
                    relationships: { chandler: 10, andre: 7 },
                    badges: ["late_night_crew"]
                }
            },
            {
                id: "decline_after_details",
                text: "Thanks for the invite, but I'll pass tonight",
                next: "day3_end_work_life_balance",
                effects: {
                    relationships: { chandler: -3 }
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

    day3_end_work_life_balance: {
        day: 3,
        period: 4,
        periodName: "Late Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You pack up your things at 5:30 PM and head out.",
            "As you leave, you see Chandler, Andre, and Jesse settling in for the long haul. There's pizza being delivered as you walk past reception.",
            "Part of you wonders if you should have stayed - bonding happens in those late-night work sessions.",
            "But work-life balance matters too. You can't say yes to everything.",
            "Tomorrow is Thursday. Almost to the weekend.",
            "Day 3 done."
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
            "'You'll work with Ramona for customer insights, Jacob for product positioning, Pat and the design team for visuals. But the messaging? That's all you, bro.'",
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
                id: "work_solo_today",
                text: "I appreciate it, but I want to try this solo first",
                next: "day4_late_morning_solo",
                effects: {
                    relationships: { jacob: -3 }
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

    day4_late_morning_solo: {
        day: 4,
        period: 2,
        periodName: "Late Morning",
        background: "office_desk",
        character: "jacob",
        characterExpression: "neutral",
        text: [
            "Jacob nods understandingly. 'Totally get it. Sometimes you need to work through it yourself first. My door's always open if you want feedback later.'",
            "He walks away, no hard feelings. You continue working solo.",
            "The copy is coming together, though you wonder if Jacob's product perspective would have made it stronger. You're learning, but maybe you're learning the hard way.",
            "Still - there's value in figuring things out independently. You'll know for next time."
        ],
        choices: [
            {
                id: "continue_solo_work",
                text: "Keep working through lunch",
                next: "day4_afternoon_start",
                effects: {}
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
                id: "decline_work_focused",
                text: "I really need to finish this webinar campaign...",
                next: "day4_afternoon_decline_andre",
                effects: {
                    relationships: { andre: -8 }
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

    day4_afternoon_decline_andre: {
        day: 4,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: "andre",
        characterExpression: "neutral",
        text: [
            "Andre's face falls slightly - you can see he was really hoping you'd say yes.",
            "'Oh. Yeah-totally-get-it-the-campaign-is-important.' His voice is back to rapid-fire, but there's a hint of hurt underneath.",
            "'Just-remember-you-can-always-talk-to-me-if-you-need-anything-okay? That's-what-I'm-here-for.'",
            "He walks away with his energy drink. You wonder if you just made a mistake.",
            "The webinar campaign work fills your lunch hour, but something feels off. You may have prioritized the wrong thing."
        ],
        choices: [
            {
                id: "continue_afternoon_work",
                text: "Keep working through the afternoon",
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
            },
            {
                id: "slack_someone_friday",
                text: "📱 Slack someone to chat about the week",
                type: "slack",
                next: "day5_morning_after_slack",
                effects: {}
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
            "You watch reactions around the office. Pat (blake) reads it with his usual sarcastic expression, mutters something that sounds like 'finally made a damn decision.' Jacob (jordan) looks thoughtful, maybe a little resigned. Andre is already planning something, typing frantically."
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
            "You think about Ramona's perspective - the tension between helping small businesses and securing bigger, more stable revenue. Blake's betting on long-term growth. Jacob was advocating for staying true to original values.",
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
            "Behind her, you see Pat (blake) organizing something with Casper (tones) and Chandler (woody). They might be planning a group lunch.",
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
                id: "solo_lunch_friday",
                text: "I think I'll just do a quick solo lunch today",
                next: "day5_afternoon_solo_lunch",
                effects: {
                    relationships: { ramona: -5 }
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

    day5_afternoon_solo_lunch: {
        day: 5,
        period: 3,
        periodName: "Afternoon",
        background: "office_desk",
        character: null,
        text: [
            "You eat lunch alone at your desk one last time this week.",
            "The office is nearly empty. Most people went out to celebrate Friday.",
            "You get work done, but it feels hollow. The week is ending not with connection but with isolation.",
            "Sometimes you wonder if you're prioritizing the wrong things.",
            "The afternoon stretches ahead."
        ],
        choices: [
            {
                id: "continue_solo_afternoon",
                text: "Keep working",
                next: "day5_late_afternoon_start",
                effects: {}
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
            "'Oh-uh-let's-see.' Andre counts on his fingers. 'Me-Jesse-Chandler-Ramona-Pat-Casper-Jacob-usually-Colby-if-he's-around.'",
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
            "5:30 PM. The crew heads out together - about ten people total, laughing and chatting as you walk down the San Francisco street.",
            "The 7-11 is three blocks away. The late afternoon sun is perfect, the city energy is buzzing, and you're part of this.",
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
