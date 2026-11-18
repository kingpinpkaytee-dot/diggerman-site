# DiggerMan SEO Phase 2 — Organic Music Discovery & Streaming Conversion
Updated: 2026-11-18
Status: INITIATED — PRIORITY TRACK CONVERSION UPDATE IN REVIEW

## Mission
Convert qualified organic search discovery into legitimate visits to DiggerMan's official streaming destinations. SEO can improve discoverability; it cannot guarantee streams, playlist placements, rankings, Knowledge Panels or DSP algorithmic reach.

## Production properties
- DiggerMan Official: https://kingpinpkaytee-dot.github.io/diggerman-site/
- Artist Frequency: https://global-music-submission-portal.pages.dev/
- The Kingpin Entertainment: https://kingpinpkaytee-dot.github.io/thekingpin-entertainment-site/
- DiggerMan sitemap: https://kingpinpkaytee-dot.github.io/diggerman-site/sitemap.xml

## Priority and health matrix

| Priority | Workstream | Health | Current evidence | Next action / acceptance |
|---|---|---|---|---|
| P0 | Search Console baseline | AMBER | Owner reports all three properties verified; DiggerMan and Kingpin sitemap indexing confirmed; Artist Frequency verified but not indexed. | Record GSC Performance, Pages, Sitemaps and URL Inspection baselines after daily quota resets. Never treat quota exhaustion as a site defect. |
| P0 | SmartLink conversion path | AMBER → IN REVIEW | Existing 68 track pages have direct Spotify links and search links for other DSPs; 13-item CELESTIAL SmartLinks collection exists. | Added prominent cross-platform SmartLinks CTA to priority track pages for We Are One, Dance With The Fire and CELESTIAL FREQUENCY. Validate live after merge/deploy. |
| P0 | Stream attribution | RED / BLOCKED | No verified GA4 measurement ID, Search Console API export, Feature.fm/FFM analytics export or approved first-party event collector is configured in this repository. | Owner to supply GA4 Measurement ID or approve an alternative analytics destination. Then configure consent-aware outbound-click events and validate without collecting personal data unnecessarily. |
| P1 | Release landing pages | AMBER | 68 individual track pages, 25 release groups and SmartLinks page are in sitemap; release metadata and MusicRecording JSON-LD are present. | Audit all 68 track pages for verified DSP destinations; replace search links with direct release links only when the exact official URL is confirmed. |
| P1 | Artist entity authority | AMBER | MusicGroup JSON-LD, Spotify artist ID, MusicBrainz MBID and official social links are published. | Reconcile naming, profile URLs and artist facts across MusicBrainz, Spotify, official site and credible independent publications. Knowledge Panel is not guaranteed. |
| P1 | Release campaign SEO | AMBER | NO LOOKING BACK is represented on the official homepage and scheduled for 15 December 2026 per owner-provided release plan. | Prepare release-specific landing page and metadata; publish only after artwork, final DSP URLs and release timing are confirmed. |
| P2 | Mobile and accessibility | AMBER / NOT FULLY VERIFIED | Static accessibility and responsive CSS checks passed; rendered keyboard, screen-reader, zoom and device tests remain outstanding. | Browser-rendered manual QA on phone and desktop; remediate any observed issues. |
| P2 | Performance / Core Web Vitals | RED / UNMEASURED | Prior PageSpeed requests were quota-limited; no Lighthouse or field Core Web Vitals score is available. | Re-run PageSpeed/Lighthouse when quota permits; record LCP, INP, CLS and opportunities. |
| P2 | Independent authority / PR | AMBER / ONGOING | Official artist, company and platform links exist; independent editorial citations are not yet evidenced in this audit. | Pursue genuine interviews, reviews, radio features and music-publication coverage; no paid or fabricated backlinks. |

## Implementation in this Phase 2 change
- Added a visible same-site CELESTIAL SmartLinks CTA to the three priority track pages:
  - We Are One - 1.0
  - Dance With The Fire - 1.0
  - CELESTIAL FREQUENCY - 1.0
- Existing direct Spotify play buttons and other DSP search destinations are preserved.
- The CTA directs listeners to the existing 13-item SmartLinks collection, rather than claiming unverified direct Apple Music, YouTube Music, Deezer or TIDAL URLs.
- Changes are isolated on branch `phase-2/streaming-conversion-landing-ctas-2026-11-18`; production is not changed until PR review/merge and GitHub Pages deployment.

## Measurement rules
- Search Console impressions/clicks are search visibility metrics, not streams.
- SmartLink outbound clicks are intent signals, not confirmed plays.
- Confirm stream changes using Spotify for Artists and each relevant DSP's artist analytics, comparing equivalent date windows and accounting for release/playlist promotion.
- Do not use bots, stream farms, artificial repeat plays, misleading redirects or incentivised fake engagement.
- Do not add analytics scripts until a valid measurement property/destination and privacy/consent approach are confirmed.

## 7-day operating cadence
1. Daily: GSC indexing and crawl errors; no repeated indexing requests when quota is exhausted.
2. Twice weekly: search query impressions/clicks for DiggerMan, song names and album names.
3. Weekly: SmartLinks outbound clicks, DSP listener/stream/follower deltas and campaign source breakdown.
4. At release milestones: compare 7-day pre/post windows and annotate playlist/radio/editorial campaigns.
5. Monthly: update Knowledge Graph/entity corroboration and technical health.

## Release gates
- No analytics ID or secrets are guessed or committed.
- No unverified DSP destination is represented as a direct track URL.
- No production deployment is claimed until PR merge and live HTTP verification.
- No Knowledge Panel, ranking or stream uplift is guaranteed.
- No stream uplift is claimed without DSP-side evidence.

## Next owner inputs needed
1. GA4 Measurement ID (format G-XXXXXXXXXX), if GA4 is the chosen analytics destination; do not share account passwords or API secrets.
2. Confirmation of which DSP analytics exports can be supplied weekly (Spotify for Artists, Apple Music for Artists, YouTube Studio, Deezer Backstage, TIDAL Artist Home).
3. Final confirmed DSP links for NO LOOKING BACK when available.


## World-Class Coding Mode review — 2026-11-18
- Applied the project engineering charter: inspect existing work first, preserve the existing production catalogue, make the smallest scoped change, test the isolated branch and do not repeat the completed 68-page SEO implementation.
- Created a clean, separate validation clone at `C:\Users\USER\source\repos\diggerman-phase2-validation`; the existing SynthesisOS working directory and its uncommitted files were not altered by this website audit.
- Validation script result: PASS. Confirmed the 71 sitemap URLs parse, the 68 track-page file paths exist, and all three modified track pages preserve their canonical, index/follow directive, single H1, existing Spotify play link, four DSP search links, valid JSON-LD and closing HTML structure.
- Confirmed each of the three selected pages contains exactly one CELESTIAL SmartLinks CTA and that its href points to the existing canonical SmartLinks page.
- The validation clone's tracked Git worktree is clean. The untracked validation script is test tooling only and was not part of the source PR.
- GitHub Actions returned no PR workflow runs for this branch head; no automated CI status is claimed. The tests above were executed locally against the cloned PR branch.
- Merge eligibility was independently rechecked through the repository PR search: PR #8 reports open and mergeable=true. No production deploy is claimed until merge and live HTTP verification.

## Updated completion gates
- Code implementation and branch-level QA: PASS for the three selected CELESTIAL track pages.
- Production deployment and live CTA verification: PENDING merge / GitHub Pages publish.
- GA4 outbound-click analytics: BLOCKED pending a valid Measurement ID / approved tag destination and consent approach. Google Analytics Enhanced Measurement can record outbound clicks when configured; no ID or script is invented.
- Artist Frequency GSC indexing: EXTERNAL / GOOGLE-CRAWL PENDING; this is separate from DiggerMan's Phase 2 code release.
- Performance/Core Web Vitals and rendered accessibility: still unmeasured / incomplete; retain as follow-on audit items.


## Phase 2 code release — production verification
- PR #8 was squash-merged to `main` as commit `09ebe6c91c041f7d107b8aabf0a02778badab059`.
- GitHub Pages initially continued serving the previous track-page HTML. A subsequent no-cache live check observed all three production pages updated successfully.
- Live HTTP verification returned 200 for:
  - `/music/tracks/celestial-frequency-1-0/we-are-one-1-0/`
  - `/music/tracks/celestial-frequency-1-0/dance-with-the-fire-1-0/`
  - `/music/tracks/celestial-frequency-1-0/celestial-frequency-1-0/`
- All three live pages now contain the CELESTIAL SmartLinks CTA while retaining the direct Spotify play button.
- Live sitemap remains HTTP 200 with 71 URL entries. The Phase 2 CTA change did not create or duplicate URLs.
- Code-release status: COMPLETE for the three selected track-page conversion updates.
- Phase-level measurement closure remains OPEN: GA4 configuration needs a real Measurement ID / approved destination; Search Console baseline data and DSP-side stream comparisons require owner-accessible reporting; rendered accessibility and Core Web Vitals remain unmeasured.
- No stream increase, search-ranking improvement or Google Knowledge Panel result is claimed from this code deployment.
