# Divvy Days - A Visual Novel Experience

A browser-based visual novel/dating sim where you play as a marketing intern at Divvy (expense management company) during your first week. Make choices over 5 days to build friendships, collect experiences, and unlock different endings.

## Features

- **5-Day Story**: Experience your first week as an intern at Divvy
- **10 Characters**: Build relationships with diverse coworkers
- **Multiple Endings**: 10 different endings based on your choices (Best to Worst)
- **Core Experiences**: Three special moments that unlock the best endings
  - Company All-Hands Meeting Decision
  - Friday 7-11 Walk Tradition
  - Secret Gaming Room Invite
- **Badge System**: 20+ achievements to unlock
- **Slack Messaging**: Message coworkers during work hours
- **Relationship System**: 5 status levels from Friend to Dislikes
- **Save/Load System**: 3 save slots + auto-save
- **Mobile Responsive**: Play on desktop, tablet, or phone

## How to Play

1. **Open `index.html`** in any modern web browser
2. **Welcome Screen** will appear with options:
   - 🎮 New Game - Start fresh
   - ▶️ Continue - Resume from auto-save
   - 📁 Load Game - Load from save slot
3. **Make choices** by clicking buttons at the bottom of the screen
3. **Build relationships** by choosing to interact with different characters
4. **Track progress** in the sidebars:
   - Left: Relationship statuses and scores
   - Right: Badges earned and progress trackers
5. **Save your progress** using the Save button in the header
6. **Aim for the best ending** by making 5+ friends and collecting all 3 core experiences

## Controls

- **Click choices** to progress through the story
- **💾 Save**: Save your progress to one of 3 slots
- **📁 Load**: Load a saved game
- **☰ Menu**: Access new game, endings gallery, and options
- **📱 Slack**: Message coworkers (when available as a choice)

## Relationship System

Relationships have 5 statuses based on your score with each character:

- **Friend** (Green): Default status, neutral to positive
- **Talked to** (Gray): Score ≥ 20, you've had conversations
- **Attempting** (Yellow): Score ≥ 40, becoming good friends
- **Not Interested** (Orange): Score ≤ -20, they're avoiding you
- **Dislikes** (Red): Score ≤ -40, bridge is burned

## Endings

There are 10 possible endings ranked by score:

- **Ending 10**: Perfect Week (Best) - 5+ friends, all 3 core experiences
- **Ending 9**: Making Connections - 5+ friends, 2 core experiences
- **Ending 8**: Social Success - 5+ friends, 1 core experience
- **Ending 7**: Experience Collector - 3+ friends, 3 core experiences
- **Ending 6**: Balanced Approach - 3+ friends, 2 core experiences
- **Ending 5**: Just Another Week (Average) - 2+ friends, 1 core experience
- **Ending 4**: The Quiet Intern - 1 friend, 0 core experiences
- **Ending 3**: Flying Solo - 0 friends, 1+ core experiences
- **Ending 2**: The Problem Intern - 2+ characters dislike you
- **Ending 1**: Worst Week Ever (Bad) - 0 friends, 0 core experiences, multiple dislikes

## Tips for Success

1. **Be social**: Accept lunch invitations and talk to different people
2. **Participate**: Attend meetings and company events
3. **Stay consistent**: Build relationships gradually over all 5 days
4. **Don't burn bridges**: Avoid negative choices that hurt relationships
5. **Join traditions**: The 7-11 walk on Friday is important!
6. **Make friends**: You need 5+ friends (Attempting status) for the best endings
7. **Track progress**: Use the sidebars to monitor your relationships and badges

## Characters

Meet the 10 Divvy employees:

- **Andre** - Senior Engineer (Blue) - Your helpful mentor
- **Jordan** - Product Manager (Teal) - Strategic thinker
- **Colby** - Marketing Lead (Orange) - Your supervisor
- **Ramona** - Designer (Pink) - Creative and friendly
- **Woody** - Engineer (Purple) - Gaming enthusiast
- **Skylar** - Operations (Yellow) - Keeps things running smoothly
- **Tones** - Sales (Green) - High energy salesperson
- **Blake** - CEO (Red) - Company leader
- **Harper** - HR Manager (Green) - Supportive and caring
- **Alex** - Data Analyst (Blue) - Numbers person

## Technical Details

- **Tech Stack**: Vanilla JavaScript, HTML5, CSS3
- **No dependencies**: No frameworks or build tools required
- **Local storage**: Saves stored in browser localStorage
- **Browser support**: Chrome, Firefox, Safari, Edge (latest versions)
- **Screen sizes**: Optimized for 375px (mobile) to 1920px+ (desktop)

## File Structure

```
divvy-days/
├── index.html              # Main game container
├── css/
│   ├── main.css           # Layout & responsive design
│   ├── components.css     # UI components styling
│   └── slack.css          # Slack modal styling
├── js/
│   ├── game.js            # Game engine & state management
│   ├── scenarios.js       # All narrative content
│   ├── characters.js      # Character definitions
│   ├── badges.js          # Achievement system
│   ├── ui.js              # DOM rendering & animations
│   ├── save.js            # Save/load system
│   ├── slack.js           # Slack messaging
│   └── endings.js         # Ending calculation
└── assets/                # (Empty - uses CSS placeholders)
```

## Adding Artwork (Optional)

The game works perfectly with or without custom artwork. By default, it shows colored placeholders.

### Quick Setup (2 minutes)
1. Open `generate_placeholders.html` in your browser
2. Download the auto-generated placeholder images
3. Save to `assets/characters/` and `assets/backgrounds/`
4. Refresh the game!

### Professional Artwork (10-30 minutes)
Use free AI generators or sprite packs to create anime-style characters:
- **See:** `QUICK_ARTWORK_SETUP.md` for step-by-step guide
- **See:** `ARTWORK_GUIDE.md` for comprehensive resources

**Free Resources:**
- [Vheer AI Generator](https://vheer.com/ai-anime-portrait) - Free anime character generation
- [Unsplash](https://unsplash.com/s/photos/modern-office) - Free office backgrounds
- [itch.io Visual Novel Sprites](https://itch.io/game-assets/free/genre-visual-novel/tag-sprites) - Free character packs

## Development

This game includes a built-in placeholder generator and supports custom artwork. To add custom art:

1. Add images to `assets/backgrounds/` and `assets/characters/`
2. Update the rendering functions in `ui.js` to use `<img>` tags instead of colored divs
3. Adjust character colors in `characters.js` if using custom portraits

## Credits

Created as a visual novel experience showcasing workplace culture, relationship building, and narrative choice systems.

Version 1.0

## License

All rights reserved.
