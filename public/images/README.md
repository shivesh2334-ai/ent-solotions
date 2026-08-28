# Images for ENT Solution website

Upload real photos into this folder using these exact filenames so they appear
automatically on the site (no code changes needed):

| Filename                  | Used for                                  |
|----------------------------|--------------------------------------------|
| `doctor-portrait.jpg`      | Dr. Arijit Chakraborty's photo in the hero section (also see note in `components/Hero.tsx`) |
| `clinic-reception.jpg`     | Gallery — reception                        |
| `consultation-room.jpg`    | Gallery — consultation room                |
| `endoscopy-setup.jpg`      | Gallery — endoscopy / diagnostic setup     |
| `audiometry-room.jpg`      | Gallery — audiometry room                  |
| `waiting-area.jpg`         | Gallery — waiting area                     |
| `procedure-room.jpg`       | Gallery — minor procedure room             |

## How to upload on GitHub (no computer needed)

1. Open this repository on github.com and navigate into `public/images/`.
2. Click **Add file → Upload files**.
3. Drag in your photos, renaming them to match the table above.
4. Commit directly to the `main` branch.
5. Vercel will automatically redeploy the site with the new photos within a
   couple of minutes.

## Tips

- Landscape photos (4:3 or 16:9) work best for the gallery.
- A portrait/vertical photo works best for `doctor-portrait.jpg`.
- Keep each file under ~500KB where possible (export at "Large" / 1600px wide)
  so the site stays fast on mobile data.
- Want more or fewer gallery photos, or different captions? Edit the
  `galleryImages` array in `lib/data.ts`.
