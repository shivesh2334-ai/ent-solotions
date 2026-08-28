# ENT Solution — Website

Portfolio website for **ENT Solution**, the Shalimar Bagh, Delhi clinic of
**Dr. Arijit Chakraborty, MBBS, DLO, MS (ENT)**, Senior ENT Consultant.

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## What's on the site

- Clinic name + logo, doctor name, photo placeholder and credentials
- OPD Procedures, ENT Surgeries and Head & Neck Services, grouped
- Sliding gallery of clinic/procedure photos (add your own — see
  `public/images/README.md`)
- Address, appointment timings, and a one-tap WhatsApp booking button
  (floating button + section button), pre-filled with a booking message
- Sticky announcement strip: "All patients seen by prior appointment" and
  "Enter clinic wearing a face mask"

## 1. Push this to GitHub

If you received this as a zip:

1. Unzip it.
2. Create a new repository on GitHub (e.g. `ent-solution`).
3. From inside the unzipped folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit — ENT Solution website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ent-solution.git
   git push -u origin main
   ```

   Or, using the GitHub web UI (no terminal): create the repo, then use
   **Add file → Upload files** and drag in the whole folder contents.

## 2. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in.
2. Import the `ent-solution` GitHub repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**. The included `vercel.json` pins the deployment to the
   Mumbai (`bom1`) region for fast loading in India.
5. Once deployed, you'll get a URL like `ent-solution.vercel.app`. You can
   attach a custom domain later from Project → Settings → Domains.

Every push to `main` on GitHub will auto-redeploy the live site.

## 3. Add real photos

The gallery and doctor photo currently show placeholders. Add real images by
uploading them into `public/images/` — see `public/images/README.md` for
exact filenames and an upload walkthrough directly on GitHub.

## 4. Edit clinic details

All clinic-specific content (name, address, phone, WhatsApp number, email,
timings, services, gallery captions) lives in one file: `lib/data.ts`. Edit
it and push — no need to touch the components.

## Local development (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
