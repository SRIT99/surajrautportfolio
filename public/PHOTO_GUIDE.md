# 📷 Photo Replacement Guide

## What to do

Replace the placeholder photo with your own photo. Here's exactly what you need:

---

## File to replace

| Item | Value |
|------|-------|
| **Path** | `public/suraj-raut.jpg` |
| **Filename** | `suraj-raut.jpg` (keep this exact name) |
| **Format** | JPG or PNG (JPG preferred, smaller file size) |
| **Dimensions** | Portrait ratio — **400 × 500 px** or larger (same ratio) |
| **Subject** | Your face + upper body, clean background |

---

## How the photo is used

The photo appears in **two places** on the site:

1. **Home page** (`/`) — Large right-side hero panel
2. **About page** (`/about`) — Left column portrait

Both images have these attributes set for Google Images indexing:
```html
alt="Suraj Raut, Frontend Developer in Damak, Jhapa, Nepal"
title="Suraj Raut — Web Developer from Damak, Nepal"
itemProp="image"
```

**Do NOT change the alt text or title.** These are optimized for local SEO and Google Images.

---

## Steps

1. Take or find a photo of yourself (professional or semi-professional)
2. Crop it to portrait ratio (~4:5 works well)
3. Save it as `suraj-raut.jpg`
4. Drop it into the `public/` folder, replacing the existing file
5. Done — both pages update automatically

---

## JSON-LD Schema (auto-set in index.html)

The site's `index.html` includes a `Person` schema that references:
```json
"image": "https://surajraut88.com.np/suraj-raut.jpg"
```

This is what Google uses to show your photo in Knowledge Panels and Image search when someone searches `suraj raut web developer` or `suraj raut damak`.

> Once deployed, submit your site to [Google Search Console](https://search.google.com/search-console) and request indexing for faster discovery.

---

## Tips for a good developer photo

- Clean, minimal background (white/grey/dark) works best
- Look at the camera, slight smile — approachable but professional  
- Good lighting (natural window light is perfect)
- No heavy filters
- Dress code: smart casual (collared shirt, dark t-shirt, etc.)
