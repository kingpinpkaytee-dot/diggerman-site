# DiggerMan SEO Phase 7 — Track-Level Keyword Optimization

Updated: 2026-11-18  
Status: IMPLEMENTED ON BRANCH — 68/68 TRACK PAGES VALIDATED — PRODUCTION RELEASE PENDING

## Objective
Strengthen organic discoverability for exact DiggerMan track-name searches by aligning every catalogue page's search title, snippet description, social preview metadata and MusicRecording structured data with the verified Spotify catalogue manifest.

## Keyword strategy
- Primary phrase per page: `DiggerMan [exact official track title]`.
- Secondary intent: `[exact track title] by DiggerMan`, `[exact track title] Spotify`, and the verified parent release title.
- Search titles begin with `DiggerMan` followed by the exact catalogue track name.
- Unique descriptions identify the exact track, artist, parent release and available streaming routes.
- Open Graph and Twitter titles/descriptions mirror the page-specific search metadata.
- MusicRecording JSON-LD now contains the same concise, page-specific description.
- Cover-art alternative text now connects the verified release artwork to the relevant track and artist.

## Google Search quality safeguards
- No `meta name="keywords"` tag was added: Google documents that this tag has no effect on indexing or ranking.
- No keyword stuffing, hidden text, fabricated lyrics, invented track descriptions, fake direct DSP links or doorway pages were added.
- Amapiano, Afro House and Deep House remain artist-level genres only. No individual track was assigned a genre because the catalogue manifest does not contain reliable track-level genre classifications.
- Existing canonical URLs, index/follow directives, visible H1 names, MusicRecording names, Spotify track IDs, release links, durations, track numbers, artwork URLs and DSP search destinations are preserved.
- Existing CELESTIAL SmartLinks CTAs are unchanged.

## Catalogue-wide result
- Verified source: `music/catalogue.json` (68 Spotify-verified tracks).
- Track pages updated: 68 of 68.
- Unique search titles: 68.
- Unique meta descriptions: 68.
- Description length: 102–159 characters.
- JSON-LD: page-specific descriptions added to all 68 MusicRecording records.
- Canonical URLs and Spotify IDs: preserved from existing source.
- Sitemap URL set: unchanged. Existing sitemap had no per-URL lastmod values, so no artificial dates were inserted.

## Track keyword map
| Official track title | Parent release | Primary search phrase | Page |
|---|---|---|---|
| Genesis Flow - 1.0 | Riverlea Ext 9 (1.0) | `DiggerMan Genesis Flow - 1.0` | `music/tracks/riverlea-ext-9-1-0/genesis-flow-1-0/index.html` |
| Genesis Flow - 1.1 | Riverlea Ext 9 (1.0) | `DiggerMan Genesis Flow - 1.1` | `music/tracks/riverlea-ext-9-1-0/genesis-flow-1-1/index.html` |
| Night Life | Night Life | `DiggerMan Night Life` | `music/tracks/night-life/night-life/index.html` |
| Uptown | Night Life | `DiggerMan Uptown` | `music/tracks/night-life/uptown/index.html` |
| Ingelosi | The Gorilla Zone (2.0) | `DiggerMan Ingelosi` | `music/tracks/the-gorilla-zone-2-0/ingelosi/index.html` |
| Mandohndoh | The Gorilla Zone (2.0) | `DiggerMan Mandohndoh` | `music/tracks/the-gorilla-zone-2-0/mandohndoh/index.html` |
| Dico | The Gorilla Zone (2.0) | `DiggerMan Dico` | `music/tracks/the-gorilla-zone-2-0/dico/index.html` |
| AK-47 - Remastered 2025 | The Gorilla Zone II (1.0) | `DiggerMan AK-47 - Remastered 2025` | `music/tracks/the-gorilla-zone-ii-1-0/ak-47-remastered-2025/index.html` |
| Nongoloza - 1.0 | The Gorilla Zone II (1.0) | `DiggerMan Nongoloza - 1.0` | `music/tracks/the-gorilla-zone-ii-1-0/nongoloza-1-0/index.html` |
| Gomolemo - Remastered 2025 | The Gorilla Zone II (1.0) | `DiggerMan Gomolemo - Remastered 2025` | `music/tracks/the-gorilla-zone-ii-1-0/gomolemo-remastered-2025/index.html` |
| Push`karimayima | Earth Child (1.0) | DiggerMan Push\`karimayima | `music/tracks/earth-child-1-0/push-karimayima/index.html` |
| Nguye Yedwa | Earth Child (1.0) | `DiggerMan Nguye Yedwa` | `music/tracks/earth-child-1-0/nguye-yedwa/index.html` |
| Athandwe | Earth Child (1.0) | `DiggerMan Athandwe` | `music/tracks/earth-child-1-0/athandwe/index.html` |
| Fairy Tales | Fairy Tales | `DiggerMan Fairy Tales` | `music/tracks/fairy-tales/fairy-tales/index.html` |
| Fairy Tales II | Fairy Tales | `DiggerMan Fairy Tales II` | `music/tracks/fairy-tales/fairy-tales-ii/index.html` |
| Exodus - 1.0 | Exodus (1.0) | `DiggerMan Exodus - 1.0` | `music/tracks/exodus-1-0/exodus-1-0/index.html` |
| Exodus II - 1.1 | Exodus (1.0) | `DiggerMan Exodus II - 1.1` | `music/tracks/exodus-1-0/exodus-ii-1-1/index.html` |
| Sun Raze - 1.0 | Sun Raze (1.0) | `DiggerMan Sun Raze - 1.0` | `music/tracks/sun-raze-1-0/sun-raze-1-0/index.html` |
| Sun Raze II - 1.1 | Sun Raze (1.0) | `DiggerMan Sun Raze II - 1.1` | `music/tracks/sun-raze-1-0/sun-raze-ii-1-1/index.html` |
| Dusk Till Dawn - 1.0 | Sun Raze (1.0) | `DiggerMan Dusk Till Dawn - 1.0` | `music/tracks/sun-raze-1-0/dusk-till-dawn-1-0/index.html` |
| Dusk - 1.0 | Sun Raze (1.0) | `DiggerMan Dusk - 1.0` | `music/tracks/sun-raze-1-0/dusk-1-0/index.html` |
| Baby | Baby | `DiggerMan Baby` | `music/tracks/baby/baby/index.html` |
| Baby - Remix | Baby | `DiggerMan Baby - Remix` | `music/tracks/baby/baby-remix/index.html` |
| Celestial Signal | CELESTIAL SIGNAL | `DiggerMan Celestial Signal` | `music/tracks/celestial-signal/celestial-signal/index.html` |
| Celestial Signal - Remake | CELESTIAL SIGNAL | `DiggerMan Celestial Signal - Remake` | `music/tracks/celestial-signal/celestial-signal-remake/index.html` |
| Uncle Tom | Uncle Tom | `DiggerMan Uncle Tom` | `music/tracks/uncle-tom/uncle-tom/index.html` |
| SEGA | SEGA | `DiggerMan SEGA` | `music/tracks/sega/sega/index.html` |
| Insindiso Akukho Okunye | Insindiso Akukho Okunye | `DiggerMan Insindiso Akukho Okunye` | `music/tracks/insindiso-akukho-okunye/insindiso-akukho-okunye/index.html` |
| The Return Of Uncle Tom | The Return Of Uncle Tom | `DiggerMan The Return Of Uncle Tom` | `music/tracks/the-return-of-uncle-tom/the-return-of-uncle-tom/index.html` |
| King Julius | King Julius | `DiggerMan King Julius` | `music/tracks/king-julius/king-julius/index.html` |
| Native Language | Native Language | `DiggerMan Native Language` | `music/tracks/native-language/native-language/index.html` |
| Sky | Sky | `DiggerMan Sky` | `music/tracks/sky/sky/index.html` |
| Genesis II | Genesis II | `DiggerMan Genesis II` | `music/tracks/genesis-ii/genesis-ii/index.html` |
| Riverlea Extensionz | Riverlea Extensionz | `DiggerMan Riverlea Extensionz` | `music/tracks/riverlea-extensionz/riverlea-extensionz/index.html` |
| The SEGA Eclipse | The SEGA Eclipse | `DiggerMan The SEGA Eclipse` | `music/tracks/the-sega-eclipse/the-sega-eclipse/index.html` |
| Friday | Friday | `DiggerMan Friday` | `music/tracks/friday/friday/index.html` |
| Immortal | Immortal | `DiggerMan Immortal` | `music/tracks/immortal/immortal/index.html` |
| My Windowpane - 1.0 | My Windowpane (1.0) | `DiggerMan My Windowpane - 1.0` | `music/tracks/my-windowpane-1-0/my-windowpane-1-0/index.html` |
| City Signal - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan City Signal - 1.0` | `music/tracks/celestial-frequency-1-0/city-signal-1-0/index.html` |
| The City Is Alive (Remix) - 2.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan The City Is Alive (Remix) - 2.0` | `music/tracks/celestial-frequency-1-0/the-city-is-alive-remix-2-0/index.html` |
| We Are One - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan We Are One - 1.0` | `music/tracks/celestial-frequency-1-0/we-are-one-1-0/index.html` |
| African Night (Remix) - 2.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan African Night (Remix) - 2.0` | `music/tracks/celestial-frequency-1-0/african-night-remix-2-0/index.html` |
| Running Through The Lights - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Running Through The Lights - 1.0` | `music/tracks/celestial-frequency-1-0/running-through-the-lights-1-0/index.html` |
| Heartbeat Of Africa - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Heartbeat Of Africa - 1.0` | `music/tracks/celestial-frequency-1-0/heartbeat-of-africa-1-0/index.html` |
| Dance With The Fire - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Dance With The Fire - 1.0` | `music/tracks/celestial-frequency-1-0/dance-with-the-fire-1-0/index.html` |
| Golden Horizon - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Golden Horizon - 1.0` | `music/tracks/celestial-frequency-1-0/golden-horizon-1-0/index.html` |
| Funk In The City (Remix) - 2.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Funk In The City (Remix) - 2.0` | `music/tracks/celestial-frequency-1-0/funk-in-the-city-remix-2-0/index.html` |
| Lights Out - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Lights Out - 1.0` | `music/tracks/celestial-frequency-1-0/lights-out-1-0/index.html` |
| Log Drum Supremacy - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Log Drum Supremacy - 1.0` | `music/tracks/celestial-frequency-1-0/log-drum-supremacy-1-0/index.html` |
| MIDNIGHT MOTION - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan MIDNIGHT MOTION - 1.0` | `music/tracks/celestial-frequency-1-0/midnight-motion-1-0/index.html` |
| No Limits - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan No Limits - 1.0` | `music/tracks/celestial-frequency-1-0/no-limits-1-0/index.html` |
| Full Power - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan Full Power - 1.0` | `music/tracks/celestial-frequency-1-0/full-power-1-0/index.html` |
| CELESTIAL FREQUENCY - 1.0 | CELESTIAL FREQUENCY (1.0) | `DiggerMan CELESTIAL FREQUENCY - 1.0` | `music/tracks/celestial-frequency-1-0/celestial-frequency-1-0/index.html` |
| City Signal - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan City Signal - Remix 2.0` | `music/tracks/celestial-frequency-2-0/city-signal-remix-2-0/index.html` |
| The City Is Alive - 1.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan The City Is Alive - 1.0` | `music/tracks/celestial-frequency-2-0/the-city-is-alive-1-0/index.html` |
| We Are One - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan We Are One - Remix 2.0` | `music/tracks/celestial-frequency-2-0/we-are-one-remix-2-0/index.html` |
| African Night - 1.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan African Night - 1.0` | `music/tracks/celestial-frequency-2-0/african-night-1-0/index.html` |
| Running Through The Lights - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Running Through The Lights - Remix 2.0` | `music/tracks/celestial-frequency-2-0/running-through-the-lights-remix-2-0/index.html` |
| Heartbeat Of Africa - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Heartbeat Of Africa - Remix 2.0` | `music/tracks/celestial-frequency-2-0/heartbeat-of-africa-remix-2-0/index.html` |
| Dance With The Fire - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Dance With The Fire - Remix 2.0` | `music/tracks/celestial-frequency-2-0/dance-with-the-fire-remix-2-0/index.html` |
| Golden Horizon - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Golden Horizon - Remix 2.0` | `music/tracks/celestial-frequency-2-0/golden-horizon-remix-2-0/index.html` |
| Funk In The City - 1.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Funk In The City - 1.0` | `music/tracks/celestial-frequency-2-0/funk-in-the-city-1-0/index.html` |
| Lights Out - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Lights Out - Remix 2.0` | `music/tracks/celestial-frequency-2-0/lights-out-remix-2-0/index.html` |
| Log Drum Supremacy - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Log Drum Supremacy - Remix 2.0` | `music/tracks/celestial-frequency-2-0/log-drum-supremacy-remix-2-0/index.html` |
| MIDNIGHT MOTION - 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan MIDNIGHT MOTION - 2.0` | `music/tracks/celestial-frequency-2-0/midnight-motion-2-0/index.html` |
| No Limits - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan No Limits - Remix 2.0` | `music/tracks/celestial-frequency-2-0/no-limits-remix-2-0/index.html` |
| Full Power - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan Full Power - Remix 2.0` | `music/tracks/celestial-frequency-2-0/full-power-remix-2-0/index.html` |
| CELESTIAL FREQUENCY - Remix 2.0 | CELESTIAL FREQUENCY (2.0) | `DiggerMan CELESTIAL FREQUENCY - Remix 2.0` | `music/tracks/celestial-frequency-2-0/celestial-frequency-remix-2-0/index.html` |

## Validation
Automated source checks were run while preparing the change:
- 68 catalogue entries mapped to the 68 existing individual HTML pages.
- All page templates had the expected title, description, Open Graph and Twitter metadata, cover image alt attributes and MusicRecording JSON-LD block.
- All generated titles and descriptions are unique; descriptions are 102–159 characters.
- Every title contains DiggerMan and the exact catalogue track title.
- Every description contains the track, DiggerMan, parent release and accurate Spotify / platform-search wording.
- Existing canonical URLs and primary H1 names match the catalogue manifest.
- Existing JSON-LD parsed successfully before receiving its new description.
- No changes to track IDs, release URLs, catalogue order, sitemap URL count or analytics configuration.

## Production release gates
- Changes are isolated on branch `seo/catalogue-track-keyword-optimization-2026-11-18` and submitted for review.
- Production deployment is pending PR merge and GitHub Pages propagation.
- Google recrawl, indexing, rankings, clicks and streams are not claimed by this code change. Inspect the updated URLs in Search Console after deployment and when quota is available.
- Actual streams must continue to be assessed using DSP-side artist analytics; website clicks and search metrics are not streams.

## Google Search Central references
- Title-link guidance: https://developers.google.com/search/docs/appearance/title-link
- Snippet / meta description guidance: https://developers.google.com/search/docs/appearance/snippet
- Supported and unsupported meta tags: https://developers.google.com/search/docs/crawling-indexing/special-tags
- Search Essentials: https://developers.google.com/search/docs/essentials
