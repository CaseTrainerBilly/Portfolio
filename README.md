# Billy Richardson Portfolio version 2.0

A personal portfolio built with Next.js 14, React, and Tailwind CSS. The site highlights featured projects, gives each project its own detail page, and includes a recruiter-friendly contact flow that can open drafted emails in the user's mail app, Gmail, or Outlook Web.

## Highlights

- App Router-based Next.js portfolio
- Animated hero section with interactive shapes and a bouncing scroll cue
- Featured projects grid powered by a central data file
- Dynamic project detail pages generated from project slugs
- Theme toggle with light and dark mode support
- Dedicated contact page with prefilled email drafting options
- Static export and GitHub Pages deployment scripts

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- ESLint
- GitHub Pages for static deployment

## Project Structure

```text
app/
  components/          Reusable UI sections such as Hero, Header, Projects, Skills, and Contact
  contact/             Dedicated contact page and client-side contact form
  context/             Theme context for light/dark mode
  data/                Portfolio project content and metadata
  projects/[slug]/     Dynamic project detail route
  styles/              Component-scoped styling for hero and popup sections
public/Images/         Portfolio images and project artwork
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server locally
- `npm run lint` - run ESLint
- `npm run export` - build and export a static version of the site into `out/`
- `npm run deploy` - publish the exported `out/` directory to GitHub Pages

## Content Updates

Most portfolio content lives in [`app/data/projects.js`](./app/data/projects.js).

Update that file to:

- add or remove featured projects
- change project copy
- swap project images
- update technology badges
- define gallery sections for each project detail page

You will likely also want to update:

- [`app/components/Hero.js`](./app/components/Hero.js) for the homepage intro
- [`app/components/Contact.js`](./app/components/Contact.js) for contact callouts and profile links
- [`app/contact/ContactFormClient.js`](./app/contact/ContactFormClient.js) for email destination or contact form behaviour

## Deployment

This project already includes a GitHub Pages flow:

```bash
npm run export
npm run deploy
```

The export step writes a `.nojekyll` file into `out/` so static assets work correctly on GitHub Pages.

## Notes

- The project uses the Next.js App Router.
- Project detail pages are generated from the slugs defined in `app/data/projects.js`.
- Some project and metadata values are still placeholders and can be swapped for final production content.
