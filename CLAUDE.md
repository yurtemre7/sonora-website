# Context

Read this first in every new chat or Claude Code session.

## What we're building
A website for Sonora: a free, open source music player that lets everyday people enjoy their own music library offline on their Android phone. App source: github.com/yurtemre7/sonora.

## Our Git
- Design system: github.com/yurtemre7/sonora-design-system
  Tokens (`assets/tokens.css`), components (`assets/components.css`), the storybook (`storybook.html`), the design skill (`SKILL.md`), and page designs in `prototypes/`.
- Website: github.com/yurtemre7/sonora-website
  The pages Claude Code builds. `main` is the live site, `staging` is the rehearsal, every change goes through a pull request.
- The design system repository is the source of truth. The website only uses what is in it.

## Stack
Plain HTML, CSS and a little JavaScript. No build step. Hosted on Netlify, connected to the website repository. There is no contact form: the contact page links to email, GitHub issues and Telegram (t.me/emredev).

## Pages
`index.html` (home) · `download.html` (replaces pricing: the app is free) · `support.html` (install guide, FAQ) · `ios.html` (iPhone: sideloading and adding music) · `about.html` · `contact.html` · `impressum.html` · `privacy.html` · `accessibility.html` · `404.html`. Japanese versions of the main pages live in `ja/` (legal pages stay English). Also `sitemap.xml`, `robots.txt`, share image `assets/img/og.png`.

## How we work: the loop
1. Design in Claude chat: prototype the page, try versions, check phone and desktop.
2. Update the design system: anything reused or a rule goes into tokens, components, storybook and SKILL.md. The page goes into `prototypes/`.
3. Push the design system repository to GitHub.
4. Claude Code, in the website repository: get the latest design system, update tokens and components to match, build the page from its prototype, on a new branch.
5. Test on localhost: phone and desktop, every link, Lighthouse. Not OK? The report goes back to Claude chat.
6. Pull request, check the Netlify preview link, merge. The site goes live.

## Rules for Claude Code
- Never make a design decision. Colours, fonts, spacing, layout, copy, motion and imagery are decided in Claude chat and live in the design system or the prototype.
- If something isn't defined there, stop and ask. Offer two or three options with a short reason for each. Don't pick one yourself.
- Use only tokens from `assets/tokens.css` and components from `assets/components.css`. Never hard-code a value.
- Work on a branch, never directly on `main`.
- After building, run the site locally, test phone and desktop, and report what you built, what you tested and every open question, before opening a pull request.

## Current state
First version built 2026-10-30 from the design system, copy drafted from the app README. Added: phone-frame screenshots, support page, Japanese pages, share image, sitemap. Added iOS info (unsigned IPA, sideload, tested on simulator only; copy from the app README, 2026-11-01). Added a light theme and a System/Light/Dark menu (light colours are in `assets/tokens.css` under `[data-theme="light"]`, derived by Claude Code, not yet reviewed in chat). Open: light-theme colours need a design review, Japanese copy needs a native review, privacy and accessibility texts need a legal check, no real testimonials, phone-frame and feature-row styles are in the website `components.css` but not yet in the design system repo.
