# Divvy Days - Artwork Guide

## How to Add Character Portraits and Backgrounds

The game is currently set up to load images from the `assets/` folder. Follow this guide to add free anime-style artwork to your visual novel.

---

## 📁 Required Files

### Character Portraits (10 files needed)
Place these in `assets/characters/`:
- `andre.png` - Male, blue theme, senior engineer type
- `jordan.png` - Gender-neutral, teal theme, professional manager
- `colby.png` - Male, orange theme, marketing professional
- `ramona.png` - Female, pink theme, creative designer
- `woody.png` - Male, purple theme, casual gamer engineer
- `skylar.png` - Female, yellow theme, organized professional
- `tones.png` - Male, green theme, energetic salesperson
- `blake.png` - Male, red theme, CEO/executive
- `harper.png` - Female, green theme, friendly HR manager
- `alex.png` - Gender-neutral, blue theme, data analyst

**Recommended size**: 200x300px (portrait orientation)

### Background Images (7 files needed)
Place these in `assets/backgrounds/`:
- `lobby.jpg` - Modern office lobby entrance
- `office.jpg` - Desk workspace with computer
- `conference.jpg` - Meeting/conference room
- `breakroom.jpg` - Office kitchen/break area
- `restaurant.jpg` - Casual dining restaurant
- `store.jpg` - Convenience store (7-11 style)
- `gaming.jpg` - Gaming room with consoles/computers

**Recommended size**: 1920x1080px (landscape)

---

## 🎨 Where to Find Free Anime-Style Images

### Character Portraits

#### **Option 1: AI Generation (Fastest)**
Generate custom characters using free AI tools:

1. **[Vheer AI Anime Generator](https://vheer.com/ai-anime-portrait)** (FREE)
   - No registration required
   - Generate professional anime portraits
   - Example prompts:
     - "male anime character, blue suit, friendly smile, professional engineer"
     - "female anime character, pink hair, creative designer, cheerful"

2. **[Dreamina by CapCut](https://dreamina.capcut.com/tools/anime-portrait-generator)** (FREE)
   - Easy-to-use interface
   - Upload reference photos or use text prompts
   - High-quality anime style

3. **[OpenArt](https://openart.ai/generator/anime-portrait)** (FREE)
   - Unlimited free generation on basic models
   - Professional anime character creation
   - Multiple style options

**How to use:**
1. Visit one of the sites above
2. Enter a description (e.g., "professional male anime character in business attire, blue color scheme")
3. Generate and download the image
4. Rename it to match the character (e.g., `andre.png`)
5. Place in `assets/characters/` folder

#### **Option 2: Free Sprite Packs**

1. **[itch.io Visual Novel Sprites](https://itch.io/game-assets/free/genre-visual-novel/tag-sprites)**
   - Search for "CC0" or "free commercial use"
   - Look for business/office character packs
   - Download and extract

2. **[OpenGameArt CC0 Portraits](https://opengameart.org/content/cc0-portraits)**
   - Public domain character portraits
   - Free for any use
   - Various anime styles available

3. **[Lemma Soft Forums](https://lemmasoft.renai.us/forums/viewforum.php?f=52)**
   - Community-shared visual novel assets
   - Look for Creative Commons licensed sprites
   - Professional quality

**Recommended packs:**
- Search for "business character sprites"
- Look for "office anime characters"
- Filter by "CC0" or "Creative Commons" license

---

### Background Images

#### **Option 1: Unsplash (Real Photos - FREE)**

Visit [Unsplash](https://unsplash.com) and search for:

1. **Office Lobby**: [Search: "modern office lobby"](https://unsplash.com/s/photos/modern-office-lobby)
2. **Office Desk**: [Search: "office desk workspace"](https://unsplash.com/s/photos/office-desk-workspace)
3. **Conference Room**: [Search: "conference room meeting"](https://unsplash.com/s/photos/conference-room)
4. **Break Room**: [Search: "office kitchen"](https://unsplash.com/s/photos/office-kitchen)
5. **Restaurant**: [Search: "modern restaurant interior"](https://unsplash.com/s/photos/restaurant-interior)
6. **Store**: [Search: "convenience store interior"](https://unsplash.com/s/photos/store-interior)
7. **Gaming Room**: [Search: "gaming room setup"](https://unsplash.com/s/photos/gaming-setup)

**All Unsplash images are:**
- ✅ Free for commercial use
- ✅ No attribution required
- ✅ High quality (1920x1080+)

#### **Option 2: Anime-Style Backgrounds**

1. **[Freepik Anime Office Backgrounds](https://www.freepik.com/free-photos-vectors/anime-office-background)** (FREE)
   - Filter by "Free" license
   - Download anime-style office illustrations
   - Attribution may be required (check license)

2. **[Dreamstime Anime Backgrounds](https://www.dreamstime.com/photos-images/anime-office-background.html)** (FREE tier available)
   - Free accounts get limited downloads
   - Anime-style office backgrounds

3. **[WallpaperAccess Anime Office](https://wallpaperaccess.com/anime-office)** (FREE)
   - 101+ free anime office wallpapers
   - Download in HD
   - No registration required

#### **Option 3: AI Generated Backgrounds**

Use AI tools to generate custom anime-style backgrounds:

1. **[Bing Image Creator](https://www.bing.com/images/create)** (FREE with Microsoft account)
   - Prompt: "anime style modern office lobby, vibrant colors, detailed background"
   - Prompt: "anime style conference room, professional setting"
   - Download generated images

2. **[Leonardo.ai](https://leonardo.ai)** (FREE tier)
   - Anime preset available
   - Generate custom backgrounds
   - High quality output

---

## 🚀 Quick Setup (5 Minutes)

### Method 1: Use Unsplash Photos
This is the fastest way to get the game looking professional:

```bash
# 1. Create directories (if not exist)
mkdir -p assets/characters assets/backgrounds

# 2. Visit Unsplash and download 7 backgrounds:
# - Search terms above
# - Click download
# - Rename and move to assets/backgrounds/

# 3. Use AI generator for characters:
# - Visit vheer.com/ai-anime-portrait
# - Generate 10 characters using the descriptions below
# - Download and rename to match character names
```

### Method 2: Use AI for Everything
Generate all artwork with AI (takes 10-15 minutes):

**Character Prompts:**
1. **Andre**: "professional male anime character, blue business suit, friendly confident smile, senior engineer, short dark hair"
2. **Jordan**: "androgynous anime character, teal blazer, intelligent focused expression, product manager, glasses"
3. **Colby**: "male anime character, orange casual shirt, approachable marketing professional, wavy hair"
4. **Ramona**: "female anime character, pink creative outfit, designer style, cheerful artistic expression, long hair"
5. **Woody**: "male anime character, purple hoodie, casual gamer engineer, relaxed smile, messy hair"
6. **Skylar**: "female anime character, yellow professional attire, organized operations manager, neat appearance"
7. **Tones**: "energetic male anime character, green polo shirt, salesperson, big smile, dynamic pose"
8. **Blake**: "male anime CEO character, red power suit, serious executive, short professional hair, confident"
9. **Harper**: "friendly female anime character, green HR outfit, warm welcoming smile, professional kind expression"
10. **Alex**: "androgynous anime character, blue data analyst outfit, thoughtful glasses, analytical expression"

**Background Prompts:**
1. **Lobby**: "anime style modern office lobby, glass entrance, plants, reception desk, bright professional atmosphere"
2. **Office**: "anime style office desk workspace, computer monitors, organized desk, window with city view"
3. **Conference**: "anime style conference room, large table, modern chairs, presentation screen, professional setting"
4. **Breakroom**: "anime style office kitchen, coffee machine, tables, microwave, casual relaxed atmosphere"
5. **Restaurant**: "anime style casual dining restaurant interior, booths, warm lighting, modern decor"
6. **Store**: "anime style convenience store, aisles with products, bright fluorescent lighting, 7-11 style"
7. **Gaming**: "anime style gaming room, multiple screens, gaming chairs, LED lights, console setup, cozy atmosphere"

---

## 📐 Image Specifications

### Character Portraits
- **Format**: PNG (supports transparency)
- **Size**: 200x300px (or any portrait ratio)
- **Orientation**: Portrait (vertical)
- **Background**: Transparent or solid color
- **Style**: Anime/manga style preferred
- **Framing**: Head and shoulders visible

### Backgrounds
- **Format**: JPG or PNG
- **Size**: 1920x1080px minimum (Full HD)
- **Orientation**: Landscape (horizontal)
- **Ratio**: 16:9 aspect ratio
- **Style**: Anime style or realistic photos both work
- **Quality**: High resolution for clarity

---

## 🎨 Character Design Tips

When generating or selecting character portraits, consider:

### Color Coordination
Each character has a theme color (already defined in code):
- Use clothing, hair, or accessories in their theme color
- This helps players visually distinguish characters
- Theme colors are shown in the character list above

### Expression
- Default expression should be **neutral to friendly**
- Characters should look approachable (this is a workplace visual novel)
- Avoid overly dramatic or intense expressions
- Subtle smiles work well

### Age Range
- **Andre, Blake**: 30-35 (senior/leadership)
- **Jordan, Colby, Harper**: 28-32 (mid-level)
- **Woody, Skylar, Tones, Ramona, Alex**: 24-28 (junior/mid-level)

### Style Consistency
- Try to keep all characters in a similar art style
- If using multiple sources, try to match:
  - Line thickness
  - Color saturation
  - Shading style
  - Overall aesthetic

---

## 🔄 How to Replace Placeholders

Once you've downloaded your images:

1. **Place character portraits** in `divvy-days/assets/characters/`
   ```
   assets/characters/
   ├── andre.png
   ├── jordan.png
   ├── colby.png
   ├── ramona.png
   ├── woody.png
   ├── skylar.png
   ├── tones.png
   ├── blake.png
   ├── harper.png
   └── alex.png
   ```

2. **Place backgrounds** in `divvy-days/assets/backgrounds/`
   ```
   assets/backgrounds/
   ├── lobby.jpg
   ├── office.jpg
   ├── conference.jpg
   ├── breakroom.jpg
   ├── restaurant.jpg
   ├── store.jpg
   └── gaming.jpg
   ```

3. **Refresh the game** in your browser
   - The images will load automatically
   - If using a local server, hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

4. **Fallback behavior**
   - If an image is missing, the game will show a colored rectangle instead
   - This allows you to add images gradually
   - No errors will occur with missing images

---

## 💡 Pro Tips

### Image Optimization
Before adding images to the game:

1. **Resize large images** to save loading time:
   ```bash
   # Using ImageMagick (if installed)
   convert input.jpg -resize 1920x1080 output.jpg
   ```

2. **Compress images** for web:
   - Use [TinyPNG](https://tinypng.com) for PNG compression
   - Use [Squoosh](https://squoosh.app) for JPG compression
   - Target: <500KB per image for fast loading

3. **Use consistent formats**:
   - Character portraits: PNG (for transparency)
   - Backgrounds: JPG (for smaller file size)

### Testing
After adding images:
1. Open the game in browser
2. Navigate through a few scenes
3. Check that portraits appear correctly
4. Verify backgrounds load properly
5. Test on mobile/tablet if needed

---

## 📚 Resources Summary

### Free Character Portraits
- [Vheer AI Generator](https://vheer.com/ai-anime-portrait) - Best for quick generation
- [OpenArt](https://openart.ai/generator/anime-portrait) - Unlimited free generations
- [itch.io Sprites](https://itch.io/game-assets/free/genre-visual-novel/tag-sprites) - Pre-made packs

### Free Backgrounds
- [Unsplash](https://unsplash.com) - Real photos, highest quality
- [Freepik Anime Backgrounds](https://www.freepik.com/free-photos-vectors/anime-office-background) - Anime style
- [WallpaperAccess](https://wallpaperaccess.com/anime-office) - Anime wallpapers

### AI Generation Tools
- [Bing Image Creator](https://www.bing.com/images/create) - Free with Microsoft account
- [Leonardo.ai](https://leonardo.ai) - Free tier available
- [Dreamina](https://dreamina.capcut.com) - Easy to use

---

## ❓ Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify images are in correct folders
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check browser console for errors (F12)

**Images too large/slow loading?**
- Compress images using TinyPNG or Squoosh
- Resize backgrounds to 1920x1080
- Resize portraits to 200x300

**Want to change image paths?**
- Edit `js/characters.js` for character portraits
- Edit `js/scenarios.js` for backgrounds
- Update the `portrait` and background path properties

---

## 🎉 You're All Set!

Once you've added the artwork:
1. Your visual novel will look professional and polished
2. Characters will have unique personalities through visuals
3. Each location will feel distinct and immersive

The game is designed to work with or without images, so you can add them gradually as you find/create them!

Happy creating! 🎨
