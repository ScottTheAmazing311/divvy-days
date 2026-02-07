# Testing Guide - Days 3, 4, and 5

## Quick Path Reference for Testing

### Path to Gaming Room (Ultimate Ending)
This is the "true" ending - requires earning respect throughout the week.

**Day 3:**
1. Accept Alex's help → Ask deeper questions
2. Mind your business during drama OR Slack someone
3. Join Ramona's design lunch → Suggest collaboration
4. **CRITICAL: Stay late with the crew** (this builds Chandler's respect)

**Day 4:**
1. Accept project with bro energy → "Bro, I'm gonna crush this. Let's go!"
2. Collaborate with Jacob → Accept design help
3. **CRITICAL: Lunch with Andre** → Open up about impostor syndrome
4. Ask about the tradition (optional but helps)

**Day 5:**
1. Reflect on the week (optional)
2. Check on Jacob (shows empathy)
3. Lunch with Ramona → Ask about her story
4. **CRITICAL: Join 7-11 walk** → "Absolutely! I've been looking forward to this"
5. When Chandler invites to gaming room → **ACCEPT** → "Hell yeah! What time?"
6. Experience full gaming room scene

**Result:** Unlock all core experiences, maximum relationship scores, inner circle membership

---

### Path to 7-11 Only (Good Ending)
Solid week, participated in tradition, but didn't go the extra mile.

**Day 3:**
1. Any choices (doesn't matter much)
2. Optional: Skip staying late (still okay)

**Day 4:**
1. Accept project normally
2. Can work solo OR collaborate
3. Decline Andre's lunch (or accept)

**Day 5:**
1. Normal morning
2. Any lunch choice
3. **Join 7-11 walk**
4. **Decline gaming room** → "I'm exhausted"

**Result:** Core experience achieved, decent relationships, completed first week

---

### Path to Missing Everything (Regret Ending)
Work-focused, isolated, missed the point.

**Day 3:**
1. Decline Alex's help
2. Mind your business
3. Work through lunch
4. Leave on time (don't stay late)

**Day 4:**
1. Accept project nervously
2. Work solo
3. **Decline Andre's lunch** (big penalty)

**Day 5:**
1. Work normally
2. Solo lunch
3. **Skip 7-11 walk** → "I'm pretty exhausted"

**Result:** Low relationship scores, missed core experiences, hollow feeling

---

## Character Relationship Paths to Test

### Maximum Andre Relationship
- Day 3: Stay late (if available), he'll be there
- Day 4: **Accept his lunch invitation** → Open up vulnerably
- Day 5: Join 7-11 walk (he invites you)

### Maximum Chandler Relationship
- Day 3: **Stay late** (he invites you - key moment)
- Day 3 late: Show up and work hard
- Day 5: Join 7-11 walk
- Day 5: **Accept gaming room invite** (only available if you've earned it)

### Maximum Jacob Relationship
- Day 4: **Collaborate on campaign** → Accept design help loop-in
- Day 5: **Check on him after pivot announcement**
- Day 5: Join 7-11 walk (he'll be there)

### Maximum Ramona Relationship
- Day 3: **Join design lunch** → Suggest collaboration
- Day 5: **Lunch with her** → Ask about her first week story

### Maximum Colby Relationship
- Day 4: **Match his bro energy** → "Bro, I'm gonna crush this!"
- Continue being a bro throughout

---

## Badge Collection Paths

### Most Badges Possible
**Day 3:**
- `data_driven` - Accept Alex's help, ask to learn
- `design_team_lunch` - Join Ramona
- `cross_functional_thinker` - Suggest collaboration
- `late_night_crew` - Stay late
- `team_player` - Also from staying late

**Day 4:**
- `first_real_project` - Accept project
- `colby_approved` - Match bro energy
- `collaborative_mindset` - Work with Jacob
- `mentorship_moment` - Lunch with Andre
- `vulnerable_moment` - Open up to Andre
- `week_one_warrior` - Complete day

**Day 5:**
- `self_aware` - Reflect on week
- `social_butterfly` - Group lunch engaged
- `seven_eleven_walk` - Join tradition
- `core_experience` - Complete core experience
- `gaming_room_invite` - Get invited
- `inner_circle` - Complete gaming
- `inner_circle_member` - Full completion
- `week_one_complete` - Finish week

**Maximum: 18 badges across Days 3-5**

---

## Critical Choice Testing

### Day 3 Late Afternoon Decision Point
**The "Stay Late" choice is critical for gaming room access**

Test both paths:
1. Stay late → Bonds with Chandler → Earns respect → Gets gaming invite
2. Leave on time → Misses bonding → No gaming invite available

Verify that Day 5 gaming room invitation only appears if player stayed late Day 3.

### Day 4 Andre Lunch Decision
**This is a major relationship moment**

Test both paths:
1. Accept → Deep conversation → Big boost → Andre feels appreciated
2. Decline → Andre is hurt → Penalty → Affects Day 5 interactions

Verify Andre's enthusiasm is different on Day 5 based on this choice.

### Day 5 7-11 Walk Decision
**This is THE core experience of Divvy culture**

Test all three paths:
1. Join immediately → Full experience → Gaming room option
2. Ask who's going first → Still join → Gaming room option
3. Skip entirely → Regret text → No gaming room option

Verify this sets `coreExperience.sevenElevenWalk` flag.

---

## Dialogue Testing Checklist

### Andre's Speech Pattern
- [ ] Uses hyphens-between-words-like-this
- [ ] Mentions energy drinks
- [ ] Slows down during serious Day 4 lunch conversation
- [ ] Fast again during excitement (Day 5 7-11 invite)

### Chandler's Personality
- [ ] Short, direct sentences
- [ ] Sarcastic edge
- [ ] Headphones mentioned
- [ ] Only talks when HE wants to
- [ ] Respect must be earned
- [ ] Guards gaming room invite carefully

### Jesse's Pranks
- [ ] Mentions pranking Andre
- [ ] Makes jokes about cold brew/Wim Hof
- [ ] Has twinkle in his eye
- [ ] Pranks Andre during late-night work (Day 3)
- [ ] Opens up about music dreams (gaming room)

### Colby's Bro Energy
- [ ] Says "bro" and "dude" frequently
- [ ] Mentions gym/gains
- [ ] Simple language, doesn't get complicated stuff
- [ ] Excited about the webinar project
- [ ] Pumped when player matches his energy

### Jacob's Tech Focus
- [ ] Mentions Apple products
- [ ] Talks about design philosophy
- [ ] Professional but warm
- [ ] Helpful with product perspective
- [ ] Processing pivot loss gracefully

### Ramona's Warmth
- [ ] Genuinely welcoming
- [ ] Inclusive energy
- [ ] Shares her first week story
- [ ] Values cross-functional collaboration
- [ ] Makes people feel included

---

## Save/Load Testing

### Test Auto-Save Points
Each scene transition should trigger auto-save. Test:
1. Complete Day 3 → Close browser → Reopen → Should resume at Day 4
2. Get gaming room invite → Close → Reopen → Should still have invite
3. Complete 7-11 walk → Close → Reopen → Should trigger ending properly

### Test Manual Saves
1. Save at Day 3 morning
2. Play through to Day 5 gaming room
3. Load Day 3 save
4. Make different choices
5. Verify you reach different ending

---

## Ending Triggers

### Test Ending Sequence Trigger
After completing Day 5 (any path), game should:
1. Display ending_sequence scenario
2. Calculate relationship scores
3. Determine which ending unlocked
4. Show ending screen

### Verify Core Experiences Counted
Ending should consider:
- `coreExperience.companyMeeting` (from Day 2)
- `coreExperience.sevenElevenWalk` (from Day 5)
- `coreExperience.gamingRoomInvite` (from Day 5)

---

## Edge Cases to Test

### What if player has low relationships?
- Chandler shouldn't invite to late night work (Day 3)
- Gaming room should be inaccessible
- 7-11 walk still available but feels different

### What if player chose to oppose pivot?
- Jacob relationship should be higher
- Blake relationship lower
- Doesn't block any Day 3-5 content

### What if player worked solo all week?
- Lower relationship scores
- Still can access 7-11 walk
- Gaming room probably not accessible
- Ending reflects isolation

---

## Performance Testing

### Verify No Errors
Check browser console for:
- [ ] No missing scenario errors
- [ ] No undefined character references
- [ ] All character IDs match (jordan=Jacob, woody=Chandler, etc.)
- [ ] All backgrounds load properly
- [ ] All character portraits exist

### Verify Smooth Transitions
- [ ] Scene transitions are smooth
- [ ] Text appears correctly
- [ ] Choices render properly
- [ ] Relationship sidebar updates
- [ ] Badge notifications appear

---

## Recommended Test Order

1. **Full Optimal Path** (Gaming Room ending) - ~20 mins
2. **7-11 Only Path** (Good ending) - ~15 mins
3. **Skip Everything Path** (Regret ending) - ~12 mins
4. **Random Choices Path** (See what happens) - ~15 mins
5. **Save/Load Testing** - ~10 mins

**Total testing time: ~70 minutes for comprehensive coverage**

---

## Known Character ID Mappings
(In case of confusion in code)

| Display Name | Character ID | Role |
|--------------|--------------|------|
| Andre | andre | Director of Revenue Ops |
| Jacob | jordan | Lead Product Manager |
| Chandler | woody | Marketing Intern |
| Jesse | skylar | Marketing Ops |
| Colby | colby | Senior Engineer |
| Ramona | ramona | Business Development Rep |
| Casper | tones | Customer Success Manager |
| Pat | blake | Customer Success Manager (NOT CEO) |
| Harper | harper | HR Manager |
| Alex | alex | Data Analyst |

**Note:** In the story, "Blake" is the CEO character but uses "blake" ID which is actually Pat in characters.js. This is intentional for the narrative.

---

## Success Criteria

✅ All 28 scenarios load without errors
✅ Character personalities are distinct and consistent
✅ Choices have meaningful consequences
✅ Relationship scores update correctly
✅ Badges unlock appropriately
✅ Core experiences track properly
✅ Gaming room only accessible if earned
✅ 7-11 walk feels special and climactic
✅ Ending sequence triggers correctly
✅ Player feels week progression (Monday → Friday)
✅ Emotional payoff on successful paths
✅ Regret on isolated paths

## Quick Test Commands
(To be run in browser console if needed)

```javascript
// Check current game state
console.log(game.state);

// Check relationship scores
console.log(game.state.relationships);

// Check core experiences
console.log(game.state.coreExperiences);

// Check badges earned
console.log(game.state.badges);

// Force jump to specific scene (testing only)
game.goToScene('day5_gaming_room_invitation');

// Check if scenario exists
console.log(getScenario('day3_morning_start'));
```
