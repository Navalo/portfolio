# Portfolio

A personal portfolio built with Next.js (App Router, static export). It is deployed to GitHub Pages by GitHub Actions.

## Customize

All content is in **`data/portfolio.ts`**: profile, summary, tech stack, experience, projects, education and certifications.
Styles are in `app/globals.css`; the colors are CSS variables at the top of that file. Technology logos and their colors are in `components/techIcons.tsx`, matched by name.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site goes to ./out
```

## Deploy to GitHub Pages

1. Create a GitHub repo. Name it `<username>.github.io` for a root site, or anything else for a project site at `/<repo>`.
2. Push this project to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
   It sets the base path to the repo name for you.

The site will be at `https://<username>.github.io/` or `https://<username>.github.io/<repo>/`.
