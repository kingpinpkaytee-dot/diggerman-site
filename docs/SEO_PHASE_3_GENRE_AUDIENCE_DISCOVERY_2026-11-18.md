# DiggerMan SEO Phase 3 — Genre Audience Discovery & DSP Conversion
Updated: 2026-11-18
Status: IMPLEMENTED ON BRANCH — LOCAL QA PASS — PRODUCTION RELEASE PENDING

## Objective
Attract genuinely relevant listeners, DJs, playlist curators, radio and professional music contacts searching for DiggerMan in the artist's stated genres: Amapiano, Afro House and Deep House. Give those visitors a clear route to official catalogue pages, music services and legitimate enquiry contact.

This work extends the completed SEO foundation and Phase 2 SmartLinks conversion coverage. It does not rebuild the 68-track catalogue, 13 SmartLinks CTAs or existing artist identity metadata.

## Research basis
Google Search Central recommends helpful, people-first content, descriptive titles/headings, understandable link text and crawlable HTML links. Relevant primary guidance:
- Search Essentials: https://developers.google.com/search/docs/essentials
- Link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Page experience guidance: https://developers.google.com/search/docs/appearance/page-experience
- YouTube for Artists channel optimisation: https://artists.youtube/intl/en-GB/resources/channel-optimization/

## Implemented in this release
1. Added one consolidated official genre discovery hub:
   - https://kingpinpkaytee-dot.github.io/diggerman-site/genres/
   - Page title: DiggerMan Genres | South African Amapiano, Afro House & Deep House
   - Search description is 158 characters.
   - Canonical URL, index/follow directive, Open Graph and Twitter cards are present.
   - Responsive layout, descriptive headings, an official artist portrait, contact path and crawlable navigation links are included.
2. Added distinct editorial sections for Amapiano, Afro House and Deep House. The content targets natural audience intent such as South African Amapiano artist, Afro House from Johannesburg and Deep House by an independent South African artist.
3. Added genre-specific discovery links to Apple Music, YouTube Music, Deezer and TIDAL (12 platform search links total). These are labelled as search destinations, not falsely represented as verified direct artist pages. The existing official Spotify and SoundCloud artist profiles remain the direct profile destinations.
4. Added a clear contact CTA for bookings, collaborations, radio, playlist, media and professional music enquiries through the existing published business email.
5. Added a crawlable Genre Guide link from:
   - DiggerMan homepage navigation and hero action;
   - Official music catalogue navigation and discovery controls;
   - CELESTIAL SmartLinks navigation.
6. Added the new genre URL to the existing XML sitemap. Sitemap now contains 72 URLs. robots.txt continues to reference the existing sitemap.
7. Reused the existing DiggerMan MusicGroup identity, Spotify artist URL, MusicBrainz ID, official public profile links and Cloudinary artist portrait. No new artist identity claims or social accounts were invented.

## Important accuracy safeguard
Amapiano, Afro House and Deep House are published at artist level, consistent with the existing official DiggerMan artist description and MusicGroup structured data. The 68-track manifest does not assign a reliable individual genre to each track. Therefore:
- This release does not tag individual tracks as Amapiano, Afro House or Deep House.
- No release is assigned a specific subgenre solely from its title or artwork.
- Visitors are directed to the complete official catalogue and can inspect/listen to each release.
- Genre-specific platform links open search results; they do not claim an independently verified direct artist profile on Apple Music, YouTube Music, Deezer or TIDAL.

This avoids misleading listeners and search engines with unsupported track-level metadata or near-duplicate genre doorway pages.

## World-Class Coding Mode validation
Validation was run locally on a separate clone of the branch, leaving the active SynthesisOS working tree untouched.

Result: PASS.
- Exactly one H1.
- Unique anchor IDs and valid Amapiano, Afro House and Deep House section anchors.
- 158-character meta description.
- Correct canonical URL and index/follow directive.
- Open Graph and Twitter metadata present.
- JSON-LD parses; MusicGroup genres match the visible artist-level genre copy and use the existing DiggerMan entity ID.
- All 12 genre-specific DSP search links present and correctly labelled.
- Official Spotify, SoundCloud, catalogue and SmartLinks routes present.
- Mailto enquiry path present.
- XML sitemap parses and contains the new genre URL exactly once with lastmod 2026-11-18.
- Sitemap count is 72.
- Homepage, catalogue and SmartLinks crosslinks all present.
- robots.txt sitemap reference unchanged.
- Diff is scoped to five files only: genres/index.html, index.html, music/index.html, promotions/celestial-smartlinks/index.html and sitemap.xml.
- No existing track page, catalogue manifest, release metadata, or previously completed SEO component was rewritten.

## Priority and health matrix
| Priority | Workstream | Health | Evidence / next gate |
|---|---|---|---|
| P0 | Genre discovery page | GREEN / QA PASS | New consolidated page coded and local checks passed. Production verification after merge. |
| P0 | Crawlable internal discovery | GREEN / QA PASS | Homepage, catalogue and SmartLinks link to Genre Guide; sitemap includes page. |
| P0 | Artist entity alignment | GREEN / QA PASS | Reuses existing MusicGroup @id, Spotify artist ID and MusicBrainz identifier. |
| P0 | Cross-platform genre searches | GREEN / QA PASS | 12 correctly labelled search-result links for four non-Spotify DSPs across three genres. |
| P0 | Legitimate enquiry route | GREEN / CODED | Existing business email exposed as a mailto link; no unnecessary personal-data form. |
| P1 | Google indexing | AMBER / EXTERNAL | Submit genre URL via Search Console URL Inspection after daily quota is available; sitemap discovery is not indexing confirmation. |
| P1 | Query and organic audience baseline | AMBER / DATA REQUIRED | Record impressions, clicks, queries, countries, devices and page CTR from GSC once owner reports are available. No GSC performance data is inferred here. |
| P1 | Outbound DSP click attribution | RED / BLOCKED | Requires a configured analytics property/approved destination and consent approach. No Measurement ID or script has been guessed. |
| P1 | Actual stream / listener impact | AMBER / DSP DATA REQUIRED | Compare platform-side streams, listeners, saves and followers against matching reporting windows; outbound clicks are not streams. |
| P2 | Track-level genre tags | AMBER / NOT ASSIGNED | Requires reliable artist editorial classification or verified audio/release metadata for each track. |
| P2 | Performance and accessibility | AMBER / NOT YET MEASURED | Run browser-rendered mobile, keyboard and assistive-technology checks plus PageSpeed/Lighthouse when available. |
| P2 | Independent artist authority | AMBER / ONGOING | Earn legitimate interviews, radio mentions, curator features and editorial citations; do not buy or fabricate links. |

## Next operating actions
1. After the release is live, inspect the genre URL in Google Search Console and request indexing only when the daily allowance is available.
2. Monitor queries containing DiggerMan + Amapiano, Afro House, Deep House, South Africa and Johannesburg.
3. Record the genre page's impressions, clicks, CTR, average position, country and device in a baseline report.
4. Add outbound-click analytics only after a real GA4 Measurement ID or approved alternative is provided and the consent/privacy approach is checked.
5. Compare website and outbound-click signals with Spotify for Artists, Apple Music for Artists, YouTube Studio, Deezer Backstage and TIDAL Artist Home reports when those owner reports are available.
6. Use genuine content and relationships for discovery: DJ/curator pitches, radio submissions, interviews, music features and useful artist updates.

## Measurement and compliance rules
- Google impressions, search clicks, sessions and outbound clicks are separate measures from DSP streams.
- Search-result links must never be described as verified artist profiles unless the exact official profile is confirmed.
- Do not claim ranking growth, Knowledge Panel appearance, new leads or stream uplift without the corresponding evidence.
- No bots, stream farms, artificial repeat plays, misleading redirects, fake engagement, scraped lead lists or unsolicited bulk messages.
- The email route is for voluntary enquiries. A future lead form requires a clear purpose, consent, data minimisation, security and POPIA-aligned retention controls.
