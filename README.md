# scviva-tools-website

Marketing/landing site for [scVIVA-Tools](https://github.com/YosefLab/scviva-tools), built with
[Docusaurus](https://docusaurus.io/). Structurally cloned from
[scvi-tools-site](https://github.com/YosefLab/scvi-tools-site); content is specific to scviva-tools.

This site does **not** host the full manual — tutorials, user guide, and API reference live at
[scviva-tools.readthedocs.io](https://scviva-tools.readthedocs.io/page/index.html) (built from the
[scviva-tools](https://github.com/YosefLab/scviva-tools) package's own Sphinx docs). This site links
out to them.

The intended domain, `scviva-tools.org`, has not been purchased/configured yet.

## Local development

```bash
npm install
npm start       # local dev server with hot reload
```

## Build

```bash
npm run build   # static output in build/
npm run serve   # serve the production build locally
```

## Tests

```bash
npm test        # runs `npm run build` then scripts/check-content.js content assertions
npm run lint    # prettier --check
```

`scripts/check-content.js` asserts that key content (model names, install commands, citations)
actually made it into the built HTML for each page — it's a lightweight regression check, not a
UI test.

## Structure

- `docusaurus.config.js`, `sidebars.js` — site configuration
- `get_started/get_started.md` — the single Get Started doc
- `src/pages/` — homepage, team, press, ecosystem
- `src/theme/` — ported UI components (Hero, Features, TeamCard, IconLink)
- `blog/` — blog posts
- `docs/superpowers/specs/` and `docs/superpowers/plans/` — the design spec and implementation plan
  this site was built from

## Contributing

Open a PR editing the relevant page under `get_started/`, `src/pages/`, or `blog/`. CI
(`.github/workflows/ci.yml`) runs `npm test` and `npm run lint` on every push and PR.
