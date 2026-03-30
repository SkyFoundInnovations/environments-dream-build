

## Problem

The hero background still shows a dated kitchen (cream cabinets, granite counters, old appliances). Previous video regeneration attempts updated the asset JSON but the component imports the local file directly (`import heroVideo from "@/assets/hero-video.mp4"`), which kept serving the original bundled video.

## Plan

### 1. Generate a new hero video
Use `videogen` to create a proper time-lapse of a **truly modern** kitchen remodel: flat-panel handleless white cabinets, waterfall quartz island, induction cooktop, panel-ready dishwasher, LED strip lighting, large-format porcelain slab backsplash, brushed brass hardware, polished concrete-look floors.

### 2. Fix the video reference in Hero.tsx
Switch from the local file import to using the **asset JSON URL** so the newly generated video actually loads:

```tsx
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
// ...
<source src={heroVideoAsset.url} type="video/mp4" />
```

This ensures Hero.tsx always serves the latest generated video from the asset system instead of a stale bundled copy.

### 3. Fallback: AI-generated hero image
If the video still doesn't look modern enough, generate a high-quality AI image of a stunning ultra-modern kitchen as a static background fallback with a subtle Ken Burns zoom animation for visual interest.

