# DiggerMan SEO Phase 5 — GA4 Consent & Music Click Measurement

Date: 2026-11-18  
Status: MERGED — PRODUCTION LIVE VERIFIED — TRACKING DISABLED UNTIL OWNER CONFIGURES MEASUREMENT ID

## Objective
Prepare attribution from official artist-site visits to legitimate streaming destinations without confusing website clicks with DSP streams or activating analytics before the owner configures a Measurement ID and the visitor opts in.

## Scope
- All 72 existing HTML pages: homepage, catalogue, genre hub, CELESTIAL SmartLinks and 68 track detail pages.
- Shared module: `assets/analytics.js`.
- Public notice: `privacy/index.html`.
- Sitemap: privacy notice adds URL 73.

## Privacy-first activation gate
The shared module has an intentionally empty `measurementId` setting. It exits immediately if no valid `G-...` ID is configured. While blank:
- Google Analytics is not loaded.
- No analytics event requests are sent.
- No analytics banner is shown.
- No analytics cookies are created by this module.

After the site owner configures a valid ID, an opt-in notice appears. The Google tag loads only after the visitor selects “Allow analytics”. “Decline analytics” keeps measurement off; the choice is stored locally and can be changed later with “Privacy settings”.

Consent defaults set `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` to denied. On opt-in only `analytics_storage` becomes granted. Advertising measurement remains denied.

## Custom event plan
- Automatic `page_view` after opt-in.
- `music_outbound_click` records clicks to Spotify, Apple Music, YouTube Music, YouTube, Deezer, TIDAL, SoundCloud and Feature.fm; includes destination platform/type/domain, page type/path, visible link label, link position and track/release heading where available.
- `artist_contact_click` records a click on a `mailto:` link and the page context; it does not transmit the email address.

The custom click event omits the full destination URL and query string. It measures a website click only, not a stream, save, follow, playlist add or listener.

## GA4 setup still required
1. Create or select the GA4 property and Web data stream for the official site.
2. Copy its Measurement ID (`G-XXXXXXXXXX`). The Measurement ID is public by design. Do not share a service-account key, OAuth secret or API secret.
3. Before activation, choose the GA4 event-data retention period in Admin > Data settings > Data retention. Do not claim a retention period in the notice until configured.
4. Review Enhanced Measurement outbound-click settings. GA4 may also emit the standard `click` event; do not add standard click counts to the custom music-click counts as if they were a single conversion.
5. After the ID is inserted, test Allow, Decline and revocation in a real browser using GA4 DebugView / Realtime. Confirm no Google measurement calls occur before opt-in or after denial.
6. Register event-scoped custom dimensions if reporting on them: `destination_platform`, `destination_kind`, `destination_domain`, `track_name`, `link_text`, `link_position`, `page_type`, `page_path`, `contact_method`.
7. Build reports for music clicks by platform/page, track-level click-through, genre-hub click-through, and artist contact clicks.
8. Compare click trends with Spotify for Artists / other DSP reports for matching time windows. Never label website click counts as streams.

## QA and guardrails
- All 72 existing HTML pages load the same shared module.
- Module remains dormant with the empty Measurement ID.
- Privacy notice is in the sitemap.
- Do not invent a GA4 ID, property, retention period, consent choice, search ranking or stream uplift.
- No Google Ads or advertising-personalisation tags are installed.
- This technical implementation is not a legal opinion; the site owner should review the final notice and legal basis before enabling analytics publicly.

## Official Google references
- GA4 outbound click tutorial: https://support.google.com/analytics/answer/13566436
- Google Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
- Consent Mode debugging: https://developers.google.com/tag-platform/security/guides/consent-debugging
- Google Analytics data safeguards: https://support.google.com/analytics/answer/6004245


## Production release verification

- PR #12 was squash-merged to `main` as commit `2a65b3ebece922da3fd845bf3db6bdbb89110cd5`.
- GitHub Pages deployment workflow run `44211414786` completed successfully.
- Cache-busted production checks completed successfully for the shared analytics asset, privacy notice, homepage, one track detail page, catalogue, genre hub, CELESTIAL SmartLinks and sitemap.
- The production sitemap contains 73 URL entries, including `/privacy/`.
- The production homepage, catalogue, track detail, genre hub and SmartLinks pages reference the shared analytics module.
- The production module passes `node --check`; the production privacy notice and analytics asset return successfully.
- The deployed module still has a blank Measurement ID. A Node runtime check confirmed the module exits without needing browser APIs or making Google requests in the disabled state.
- Production rollout status: PASS for the dormant analytics foundation and privacy notice. GA4 event collection remains OFF until a valid owner-supplied Measurement ID is configured and the owner reviews the final privacy notice and retention setting.
