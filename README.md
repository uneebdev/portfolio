# Uneeb Ahmed — Portfolio

A modern, recruiter-facing portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**, positioning Uneeb Ahmed as an aspiring Data Analyst transitioning into Data Engineering.

## Design concept
A dark teal-to-navy gradient hero with a circular avatar, bold rounded headline (Sora display font + Inter body), hashtag-style skill tags, an icon-grid skills section, icon-badge project cards, and a closing contact CTA band — modeled after modern developer-portfolio design patterns.

- **Colors:** deep teal/navy gradient (`#0E2A2E` → `#0B2226`), base background `#0B1316`, mint-teal accent `#5FE3C4`, soft gold accent `#EFC675`
- **Type:** Sora (display/headings), Inter (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — personalize these

1. **Avatar photo:** Add your photo as `public/avatar.jpg` (square image, at least 200x200px). It will automatically replace the icon placeholder in the hero. If the file is missing, the icon placeholder shows instead — no errors.
2. **Resume:** Add your real CV as `public/Uneeb-Ahmed-CV.pdf` (the Hero "Download CV" button links there).
3. **Contact links:** Update the placeholder email, LinkedIn, and GitHub URLs in `components/Contact.tsx`.
4. **Headline copy:** Edit the hero headline/subtext directly in `components/Hero.tsx` if you want different wording.

## Deploy
Easiest path is [Vercel](https://vercel.com/new) — push this folder to a GitHub repo and import it, or run `npx vercel` from this directory.

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom theme tokens in `tailwind.config.js`)
- lucide-react for icons
- next/font for Google Fonts (Sora, Inter)
