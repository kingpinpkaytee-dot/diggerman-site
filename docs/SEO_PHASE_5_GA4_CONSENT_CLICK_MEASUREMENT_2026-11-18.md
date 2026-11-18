# DiggerMan SEO Phase 5 — GA4 Consent & Music Click Measurement

Date: 2026-11-18  
Status: MEASUREMENT ID CONFIGURED — PRODUCTION DEPLOYED — CONSENT-GATED COLLECTION

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
1. GA4 Web stream Measurement ID supplied by the site owner: `G-EBV6T29B3P`. This public identifier is configured in `assets/analytics.js`; no secret credentials were requested or stored.
2. Before the owner interprets long-term reporting, choose and record the GA4 event-data retention period in Admin > Data settings > Data retention.
3. Review Enhanced Measurement outbound-click settings. GA4 may also emit a standard `click` event; do not add standard click counts to custom `music_outbound_click` counts as if they were a single conversion.
4. The configured Google tag is loaded only after a visitor selects “Allow analytics”. Visitors can decline or later withdraw their choice. Advertising storage and personalisation remain denied.
5. Complete a real-browser test with the site's actual GA4 property using DebugView / Realtime. Confirm a `page_view`, a `music_outbound_click`, and an `artist_contact_click` appear after opt-in; confirm no custom events are sent after denial or revocation.
6. Register event-scoped custom dimensions if reporting on them: `destination_platform`, `destination_kind`, `destination_domain`, `track_name`, `link_text`, `link_position`, `page_type`, `page_path`, `contact_method`.
7. Build reports for music clicks by platform/page, track-level click-through, genre-hub click-through, and artist contact clicks.
8. Compare click trends with Spotify for Artists / other DSP reports for matching time windows. Never label website click counts as streams.

## QA and guardrails
- All 72 existing HTML pages load the same shared module.
- Module is configured with `G-EBV6T29B3P` on the activation branch and does not load until a visitor opts in.
- Every click event also checks the stored consent choice; after revocation, no further custom click events are queued.
- Privacy notice is in the sitemap.
- Do not invent a GA4 property retention period, visitor consent choice, search ranking or stream uplift.
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


## Consent-flow simulation

A local Node VM harness used a temporary test-only Measurement ID and a mocked browser DOM; no real Google tag was requested and no visitor data was sent. All checks passed:
- Consent panel appears before a choice.
- No Google tag is appended before opt-in.
- Allow analytics queues consent defaults, grants analytics storage and prepares one Google tag.
- A Spotify track click generates `music_outbound_click` with Spotify destination and track context.
- Decline / revocation updates analytics storage back to denied.
- Re-allow after revocation grants analytics storage again without injecting a duplicate tag.

Result: 7/7 consent-flow simulation checks passed. The real production configuration remains blank and tracking remains disabled.


## Owner Measurement ID activation

- The owner supplied GA4 Measurement ID `G-EBV6T29B3P` on 18 November 2026.
- The activation branch configures this ID in the shared module.
- A review found that revocation must block the site's custom click handler as well as update Google consent; this is enforced by checking the saved consent choice before every outbound event.
- This configuration still uses basic consent gating: the Google tag is not requested until a visitor accepts.
- A mocked browser simulation must cover acceptance, denial, revocation and re-acceptance. A real GA4 DebugView / Realtime verification remains a final property-side check after deployment; this environment does not have access to the GA4 reporting interface.


## Production activation verification

- PR #13 was squash-merged to `main` as commit `e5438d97d2850f7ff5f1bcbac253de91edb712b2`.
- GitHub Pages deployment workflow run `44219459864` completed successfully.
- The supplied Measurement ID `G-EBV6T29B3P` was detected in the production analytics asset.
- The production analytics asset also contains the per-event consent check that stops custom click events after consent is withdrawn.
- The live privacy notice states that GA4 is configured and describes the opt-in choice.
- Cache-busted live requests verified the analytics asset, privacy page, homepage, one track detail page and sitemap. The homepage and track detail page load the shared module.
- A clean shallow clone of `main` was inspected: all 72 original artist-site HTML pages plus the new privacy notice (73 HTML pages total) reference the shared module; none were missing the script. Sitemap count: 73 URLs.
- Node syntax validation passed. A mocked browser simulation using the configured Measurement ID passed 9/9 checks without sending any request to the real GA4 property.
- Production deployment status: PASS. The Google tag remains blocked until each visitor opts in. A real GA4 DebugView / Realtime event confirmation has not been performed from this environment, and no real test event was sent.

## GA4 property-side finalisation

- In GA4 Admin > Data display > Custom definitions, register event-scoped custom dimensions for the custom parameters that need reporting, such as `destination_platform`, `destination_kind`, `destination_domain`, `track_name`, `link_text`, `link_position`, `page_type`, `page_path` and `contact_method`.
- Then use DebugView / Realtime with a consenting test browser to verify `page_view`, `music_outbound_click` and `artist_contact_click`.
- Google documents that custom parameters must be registered as custom dimensions before they become available in standard reports and Explorations. See https://developers.google.com/analytics/devguides/collection/ga4/event-parameters and https://support.google.com/analytics/answer/14239696.
