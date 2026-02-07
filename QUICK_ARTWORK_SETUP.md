# Quick Artwork Setup (5-10 Minutes)

## 🎯 Goal
Add placeholder or real artwork to make your visual novel look professional.

---

## ⚡ Super Quick Method (2 minutes)

### Option 1: Use Built-in Placeholder Generator

1. **Open the placeholder generator:**
   ```bash
   open generate_placeholders.html
   ```

2. **The page will auto-generate all placeholder images**
   - 10 character portraits (200x300px, colored rectangles with names)
   - 7 backgrounds (1920x1080px, colored gradients with labels)

3. **Download each image:**
   - Click the "Download" button under each image
   - Or right-click and "Save Image As..."

4. **Save to correct folders:**
   - Character portraits → `assets/characters/`
   - Backgrounds → `assets/backgrounds/`
   - Use the exact filenames shown

5. **Refresh the game** and the images will appear!

**Result:** Simple colored placeholders with character names. Works great for testing and can be replaced later.

---

## 🎨 Better Looking Method (10 minutes)

### Option 2: Use Free AI Generator

**Best for:** Professional-looking anime-style characters

1. **Visit [Vheer AI Generator](https://vheer.com/ai-anime-portrait)** (FREE, no signup)

2. **Generate each character using these prompts:**

   ```
   Andre: "professional male anime character, blue business suit, friendly smile, senior engineer"
   Jordan: "androgynous anime character, teal blazer, intelligent expression, glasses"
   Colby: "male anime character, orange shirt, marketing professional, approachable"
   Ramona: "female anime character, pink creative outfit, designer, cheerful, long hair"
   Woody: "male anime character, purple hoodie, gamer engineer, relaxed smile"
   Skylar: "female anime character, yellow professional attire, operations manager"
   Tones: "energetic male anime character, green polo, salesperson, big smile"
   Blake: "male anime CEO, red power suit, serious executive, confident"
   Harper: "friendly female anime character, green HR outfit, warm smile"
   Alex: "androgynous anime character, blue analyst outfit, glasses, thoughtful"
   ```

3. **For each character:**
   - Paste prompt into AI generator
   - Click "Generate"
   - Download image
   - Rename to match character (andre.png, jordan.png, etc.)
   - Save to `assets/characters/`

4. **For backgrounds:** Visit [Unsplash](https://unsplash.com) and search:
   - "modern office lobby" → save as `lobby.jpg`
   - "office desk workspace" → save as `office.jpg`
   - "conference room" → save as `conference.jpg`
   - "office kitchen" → save as `breakroom.jpg`
   - "restaurant interior" → save as `restaurant.jpg`
   - "convenience store" → save as `store.jpg`
   - "gaming room setup" → save as `gaming.jpg`

5. **Save to:** `assets/backgrounds/`

6. **Refresh game** - Now you have professional artwork!

---

## 📁 Folder Structure Check

After adding images, your folders should look like this:

```
divvy-days/
├── assets/
│   ├── characters/
│   │   ├── andre.png
│   │   ├── jordan.png
│   │   ├── colby.png
│   │   ├── ramona.png
│   │   ├── woody.png
│   │   ├── skylar.png
│   │   ├── tones.png
│   │   ├── blake.png
│   │   ├── harper.png
│   │   └── alex.png
│   └── backgrounds/
│       ├── lobby.jpg
│       ├── office.jpg
│       ├── conference.jpg
│       ├── breakroom.jpg
│       ├── restaurant.jpg
│       ├── store.jpg
│       └── gaming.jpg
```

---

## ✅ Testing

1. Open the game: `open index.html`
2. Start a new game
3. Check that character portraits appear when characters speak
4. Verify backgrounds change for different locations
5. Open Slack modal - character portraits should appear there too

---

## 🔧 Troubleshooting

**Images not showing?**
- Check filenames are exactly correct (case-sensitive!)
- Ensure images are in the right folders
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

**Game still shows colored rectangles?**
- This is normal! The game works with or without images
- Colored rectangles are fallbacks
- Add images gradually as you create/find them

**Want higher quality?**
- See full guide: `ARTWORK_GUIDE.md`
- Lists 10+ free sources for professional anime art
- Includes AI generation tips and sprite pack recommendations

---

## 🎯 Recommended Approach

**For quick testing:** Use the placeholder generator (Option 1)

**For better visuals:** Use AI generation (Option 2)

**For professional polish:** Follow full ARTWORK_GUIDE.md

You can always start with placeholders and upgrade to better artwork later!

---

## 📚 More Resources

- **Full Artwork Guide:** `ARTWORK_GUIDE.md`
- **Free Sources:**
  - [Vheer AI](https://vheer.com/ai-anime-portrait) - Free AI character generator
  - [Unsplash](https://unsplash.com) - Free professional photos
  - [itch.io Sprites](https://itch.io/game-assets/free/genre-visual-novel/tag-sprites) - Free character packs
  - [OpenArt](https://openart.ai/generator/anime-portrait) - Unlimited free generation

---

**Time Investment:**
- Placeholders: 2 minutes
- AI Generated: 10 minutes
- Professional curated: 30-60 minutes

All options work perfectly with the game. Choose based on your time and quality needs!

Happy creating! 🎨✨
