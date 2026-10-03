# Fareez Ahmed · Portfolio

Personal portfolio at https://youngfreezy.github.io/, updated from the September 2026 resume. Plain HTML, CSS, and a small progressive-enhancement script; GitHub Pages publishes the root of `master`.

Preview: `python3 -m http.server 8080` and open http://localhost:8080.

Edit content in `index.html`, styles in `css/style.css`, and replace the named PDF when updating the resume (also update both download links). Project details use native HTML disclosures and all content works without JavaScript.

## October 2026 refresh

Replaced the 2015 resume page with current engineering work, AI evaluation roles, open-source projects, career history, education, and resume download. Added responsive layouts, keyboard focus indicators, reduced-motion support, metadata, and a custom favicon. Removed runtime dependencies on jQuery, remote profile imagery, and the obsolete Maps integration.

## Contact and typography refinement

Added a persistent contact button, direct hero email link, visible resume/social links, and an accent-colored contact section. Simplified career rows with small monograms and aligned dates, drawing on the compact personal-site presentation at https://www.nosaj.io/. No third-party code, copy, or assets were reused.

## Visual portfolio

Added seven product features: Ticketmaster, Mayo Clinic, The Infatuation, JobHunter Agent, Rivian, Etsy/Reverb, and Veterans Affairs. Removed eSimplicity from the page at Fareez's request; the downloadable source resume is unchanged. Native disclosures show additional screenshots and interaction states; all images link to their full-resolution versions and load lazily.

Screenshots captured from public pages on October 3, 2026. They show current product context, not a historical archive or a claim of sole authorship. Rivian is explicitly a public-site reference for internal supply-chain work. The Reverb image is the official help-center illustration of the bank-account settings entry point to Plaid. JobHunter onboarding uses example role/location inputs, with no resume upload or submission. Mayo's authentication capture contains empty fields and no patient information. Brand, editorial, and interface imagery remains with its respective owners.

Sources:

- https://www.ticketmaster.com/the-weeknd-tickets/artist/1697014
- https://www.ticketmaster.com/beyonce-tickets/artist/894191
- https://www.mayoclinic.org/ and https://www.mayoclinic.org/account
- https://www.theinfatuation.com/new-york/reviews/cafe-kestrel and the linked restaurant finder
- https://jobhunteragent.com/try
- https://rivian.com/
- https://help.reverb.com/hc/en-us/articles/41988533319579-Where-can-I-update-my-bank-account-on-file
- https://www.va.gov/claim-or-appeal-status/
- https://www.va.gov/asistencia-y-recursos-en-espanol

## AI systems and evaluation explorer

Six case studies share an explanation-depth selector: Signet AI Foundry, PioWorkflow, the Polaris agent runtime, Mayo Clinic AI content review, Handshake AI coding-agent evaluation, and OpenAI via Mercor writing/visual evaluation. The first four appear in reverse order from the original gallery. Engineering is the default, with ELI8 and ELI5 alternatives; the selected depth carries across case studies. The former standalone evaluation section is incorporated here.

Content is grounded in Fareez’s resume and selected professional work notes, accessed with permission. Raw notes, internal references, and evaluation task materials are outside this repository. Handshake distinguishes task authoring from comparative evaluation. OpenAI/Mercor describes Fareez’s own assessment workflow, including AI critique followed by human judgment. Replay is explicitly locally verified with production rollout pending.

Twenty-four original draw.io maps cover six cases, two explanation styles, and desktop/mobile layouts. Editable sources are in `diagrams/`; embedded editable SVG exports are in `images/agents/`. Technical maps show routing, gates, and feedback loops; introductory maps use robot illustrations. They are explanatory diagrams, not screenshots or live execution traces.

`js/agents.js` progressively enhances native buttons to select one case study and one depth. Without JavaScript, all six articles and all eighteen explanations remain readable. No libraries or remote APIs run in the browser. Edit styles in `css/agents.css` and content in `index.html`.

Validation for this revision: all eighteen case/depth combinations, keyboard activation, depth persistence across cases, and the JavaScript-disabled fallback passed browser checks. No horizontal overflow at 320, 390, 600, 768, 1024, or 1440px. Mobile scans at all three explanation depths and a desktop scan reported zero axe WCAG 2 AA / 2.1 AA violations. Local assets, fragment links, IDs, control targets, diagram XML, JavaScript syntax, and diff whitespace checks passed. All new diagrams were visually reviewed in desktop and phone layouts; technical phone labels were enlarged. Independent content/state review found no blocking issue after documentation and mobile-legibility follow-ups.
