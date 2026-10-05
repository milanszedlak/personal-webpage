# Mark Milan Szedlak — Personal Webpage

Personal portfolio built for the AERO62520 CPD coursework. Next.js 16 (App Router, static export) + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Editing content

All copy, links and projects live in [`lib/site.ts`](lib/site.ts). Search it for `TODO` to find the
placeholders to replace (project repository/report links, MSc dates).

## Deploying to GitHub Pages

1. Push to a GitHub repository on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site automatically,
   setting the correct base path for either `<user>.github.io` or a project repository.

## Structure

- `app/page.tsx`: page sections (Hero, About, Skills, Projects, Experience, Contact)
- `components/`: navigation with scroll-spy, scroll-reveal wrapper, project diagrams, UI primitives
- `lib/site.ts`: content
- `lib/asset.ts`: base-path helper for files in `/public`

Motion respects `prefers-reduced-motion`; colours follow the system light/dark setting.

## Acknowledgements

The portrait and the experience described are my own. The site's code, project diagrams, icons,
favicon and wording were generated with [Claude Code](https://claude.com/claude-code), an AI
assistant by Anthropic, under my direction. Third-party material:

- Typefaces: [Geist and Geist Mono](https://vercel.com/font) (Vercel) and
  [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Instrument), all under the
  SIL Open Font License 1.1.
- Built with [Next.js](https://nextjs.org), [React](https://react.dev) and
  [Tailwind CSS](https://tailwindcss.com), all MIT licensed.
- Product names mentioned (Azure, .NET, Elasticsearch, Confluence, Proxmox, ROS 2 and others) are
  trademarks of their respective owners, used only to describe my experience.
