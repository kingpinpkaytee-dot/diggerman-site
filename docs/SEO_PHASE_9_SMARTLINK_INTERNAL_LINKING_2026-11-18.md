# SEO Phase 9 — CELESTIAL SmartLink Reciprocal Internal Linking
Date: 2026-11-18
Repository: kingpinpkaytee-dot/diggerman-site
Branch: seo/phase-9-smartlink-reciprocal-links

## Objective
Connect the 13 existing CELESTIAL SmartLink cards to their matching canonical DiggerMan track pages, and connect each track page back to its matching official Feature.fm SmartLink. Improve useful navigation and crawl paths without creating duplicate pages or changing track identity.

## Scope
- Updated the existing SmartLinks collection page: `promotions/celestial-smartlinks/index.html`.
- Updated all 13 existing track pages listed below.
- Added a descriptive “Official track page” link to each SmartLink card.
- Added a “Listen via Feature.fm” button to each corresponding track page.
- External Feature.fm buttons open in a new tab with `rel="noopener noreferrer"`.
- Preserved official track names, titles, descriptions, canonicals, Open Graph/Twitter metadata, Spotify IDs, release metadata, artwork, MusicRecording JSON-LD, ItemList JSON-LD and sitemap structure.
- No new landing pages, no keyword stuffing, no meta-keywords tag, and no schema URL substitutions.

## 13 track-to-SmartLink mappings
1. `music/tracks/celestial-signal/celestial-signal/index.html` ↔ https://ffm.to/celestial-signal
2. `music/tracks/celestial-signal/celestial-signal-remake/index.html` ↔ https://ffm.to/celestial-signal-remake
3. `music/tracks/celestial-frequency-1-0/celestial-frequency-1-0/index.html` ↔ https://ffm.to/celestial-frequency-10
4. `music/tracks/celestial-frequency-1-0/log-drum-supremacy-1-0/index.html` ↔ https://ffm.to/log-drum-supremacy-10
5. `music/tracks/celestial-frequency-1-0/no-limits-1-0/index.html` ↔ https://ffm.to/no-limits-10
6. `music/tracks/celestial-frequency-1-0/lights-out-1-0/index.html` ↔ https://ffm.to/lights-out-10
7. `music/tracks/celestial-frequency-1-0/funk-in-the-city-remix-2-0/index.html` ↔ https://ffm.to/funk-in-the-city-remix-20
8. `music/tracks/celestial-frequency-1-0/golden-horizon-1-0/index.html` ↔ https://ffm.to/golden-horizon-10
9. `music/tracks/celestial-frequency-1-0/heartbeat-of-africa-1-0/index.html` ↔ https://ffm.to/heartbeat-of-africa-10
10. `music/tracks/celestial-frequency-1-0/african-night-remix-2-0/index.html` ↔ https://ffm.to/african-night-remix-20
11. `music/tracks/celestial-frequency-1-0/running-through-the-lights-1-0/index.html` ↔ https://ffm.to/running-through-the-lights-10
12. `music/tracks/celestial-frequency-1-0/dance-with-the-fire-1-0/index.html` ↔ https://ffm.to/dance-with-the-fire-10
13. `music/tracks/celestial-frequency-1-0/we-are-one-1-0/index.html` ↔ https://ffm.to/we-are-one-10

## Source validation
- Confirmed exactly 13 SmartLink cards and matched each card using its exact Feature.fm URL.
- Confirmed all 13 canonical track-page paths existed before editing.
- Changes are additive link navigation; page metadata and structured-data blocks were not rewritten.

## Deployment and production QA
- Source updates are committed to the feature branch for pull-request review.
- Production HTTP checks, deployed reciprocal-link checks, and post-deployment structured-data validation remain pending until merge and GitHub Pages publication.
