# ✨ Real Images Added!

## What Changed

Instead of colored placeholder boxes, the game now uses **real professional photos** from [Unsplash](https://unsplash.com) - a free stock photo service.

---

## 🎭 Character Portraits

Each of the 10 characters now has a **real professional headshot**:

### Characters
1. **Andre** (Senior Engineer) - Professional male portrait
2. **Jordan** (Product Manager) - Professional portrait
3. **Colby** (Marketing Lead) - Professional male portrait
4. **Ramona** (Designer) - Professional female portrait
5. **Woody** (Engineer) - Casual male portrait
6. **Skylar** (Operations) - Professional female portrait
7. **Tones** (Sales) - Energetic male portrait
8. **Blake** (CEO) - Executive male portrait
9. **Harper** (HR Manager) - Friendly female portrait
10. **Alex** (Data Analyst) - Professional portrait

### Image Details
- **Source**: Unsplash (free, high-quality stock photos)
- **Size**: 400x600px optimized
- **Quality**: Professional photography
- **License**: Free to use (Unsplash License)

---

## 🏢 Background Images

Each location now has a **real illustrated environment**:

### Locations
1. **Divvy Lobby** - Modern office entrance with glass walls
2. **Office Desk** - Clean workspace with computers and windows
3. **Conference Room** - Professional meeting space
4. **Break Room** - Modern office kitchen/lounge
5. **Restaurant** - Cozy dining interior
6. **7-11 Store** - Convenience store shelves
7. **Gaming Room** - Gaming setup with monitors

### Image Details
- **Source**: Unsplash office and environment photos
- **Size**: 1920x1080px (Full HD)
- **Quality**: Professional photography
- **Style**: Modern, clean, professional spaces

---

## 🎨 How It Works

### Direct Hotlinking
All images use Unsplash's CDN with direct URLs:
```
https://images.unsplash.com/photo-[id]?w=400&h=600&fit=crop
```

### Benefits
- ✅ **No downloads needed** - Images load directly from Unsplash
- ✅ **High quality** - Professional photography
- ✅ **Fast loading** - Optimized sizes
- ✅ **Always available** - Reliable CDN hosting
- ✅ **Free to use** - Unsplash License allows commercial use
- ✅ **No attribution required** - Clean UI

---

## 📊 What You'll See Now

### In the Game
1. **Character portraits appear** when characters speak
   - Real professional headshots
   - Framed with Persona 5 style (white border, red shadow)
   - Different person for each character

2. **Background images show** for each location
   - Real office environments
   - Restaurant interiors
   - Store photos
   - Professional settings

3. **Slack modal** shows character portraits
   - Same professional photos
   - Angled frames
   - Yellow accent theme

---

## 🔄 Image Sources

### Character Photos From:
- [Unsplash Portrait Collection](https://unsplash.com/s/photos/portrait)
- Professional headshots
- Business casual to formal attire
- Diverse representation

### Background Photos From:
- [Unsplash Office Collection](https://unsplash.com/s/photos/office)
- [Unsplash Workspace Photos](https://unsplash.com/s/photos/workspace)
- Modern professional environments
- High-resolution interiors

---

## 💡 Technical Details

### Image URLs Updated In:
1. **`js/characters.js`** - All 10 character portrait URLs
2. **`js/scenarios.js`** - All 7 background image URLs

### Image Parameters:
- **Characters**: `w=400&h=600&fit=crop` (portrait ratio)
- **Backgrounds**: `w=1920&h=1080&fit=crop` (landscape Full HD)

### Loading Strategy:
- Images load with fallback to colored placeholders
- Graceful degradation if URL fails
- No errors if images can't load
- Automatic retry on network issues

---

## 🎮 Try It Now!

**The game is already open with real images!**

### What to Look For:
1. **Start a new game** → See background change to real office
2. **Make choices** → Character portraits appear with real photos
3. **Navigate scenes** → Different environments for each location
4. **Open Slack** → See all character photos in selection grid
5. **Check relationships sidebar** → Photos throughout the game

---

## 🌟 Before & After

### Before
- Colored rectangles with character names
- Solid colored backgrounds with text labels
- Placeholder-style appearance

### After
- **Real professional headshots** for each character
- **Real office environment photos** for backgrounds
- **Professional visual novel** appearance

---

## 🔧 Customization

### Want Different Images?

Just edit the URLs in the files:

**For Characters** (`js/characters.js`):
```javascript
portrait: 'https://your-image-url-here.jpg'
```

**For Backgrounds** (`js/scenarios.js`):
```javascript
divvy_lobby: "https://your-background-url-here.jpg"
```

### Find More Free Images:
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and vectors

---

## 📝 Credits

**Images provided by:**
- [Unsplash](https://unsplash.com) - Beautiful, free images
- Various professional photographers (credited on Unsplash)

**License:**
- Unsplash License - Free for commercial and non-commercial use
- No attribution required (but appreciated!)
- More info: https://unsplash.com/license

---

## ✨ Summary

**You asked for:** Real images instead of blank boxes
**You got:**
- 10 professional character portraits
- 7 office environment backgrounds
- All from high-quality free sources
- Instantly loaded via CDN
- No downloads required
- Professional visual novel appearance

**The game now looks like a real visual novel with professional photography!** 🎮✨

---

**Refresh the game and see the real images in action!** 📸
