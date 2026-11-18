# DiggerMan SEO Phase 6 — Consent-Gated Google Tag Manager Migration

Date: 2026-11-18  
Status: SITE-SIDE IMPLEMENTATION VALIDATED — GTM CONTAINER PUBLICATION AND LIVE PROPERTY TEST PENDING

## Objective

Migrate the site's measurement delivery from a directly loaded GA4 gtag.js script to the owner's Google Tag Manager web container while retaining the existing visitor-controlled, basic-consent design.

## Identifiers

- Google Tag Manager container: **GTM-KWM2BWTS**
- Intended GA4 Web stream Measurement ID: **G-EBV6T29B3P**
- Shared website module: **assets/analytics.js**
- Public privacy notice: **privacy/index.html**

The GTM container ID is a public installation identifier, not a secret. The GA4 Measurement ID is configured in the GTM workspace's Google tag. The website code no longer directly loads a GA4 Measurement ID or a separate gtag.js library.

## Site-side implementation

- The shared module establishes window.dataLayer and consent defaults synchronously before any GTM library can load.
- The shared module queues `gtag('js', new Date())` after the denied consent defaults, matching the initialization command in the supplied Google tag snippet.
- The GTM JavaScript request remains dynamically injected only after Allow analytics; it is intentionally not pasted as an unconditional static script immediately after `<head>`, because that would violate the site's basic-consent policy.
- All four Consent Mode v2 states default to denied: analytics_storage, ad_storage, ad_user_data and ad_personalization.
- No GTM network request is made for a first-time visitor before a choice, or for a visitor who has declined.
- On Allow, the module queues the analytics-only consent update, queues the gtm.js bootstrap event and then injects the GTM loader for GTM-KWM2BWTS.
- The module does not inject the GTM noscript iframe. An unconditional iframe would bypass the basic-consent gate.
- On withdrawal, analytics consent is updated to denied, the module attempts to expire first-party GA cookies, and its custom click handler stops queuing events.
- Re-allowing consent updates the existing container state without injecting a second GTM script.
- The direct GA4 gtag.js loader and direct gtag('event', ...) custom event calls have been removed from the shared module.

## Data-layer events

The shared module pushes plain data-layer event objects only after consent has been granted.

### music_outbound_click

Parameters:
- destination_platform
- destination_kind
- destination_domain
- track_name
- link_text
- link_position
- page_type
- page_path

Supported destinations remain Spotify, Apple Music, YouTube Music, YouTube, Deezer, TIDAL, SoundCloud and Feature.fm.

### artist_contact_click

Parameters:
- contact_method (email)
- page_type
- page_path
- link_position

The email address itself is not placed in the data layer.

### page_view

The GA4 Google tag in GTM should send the normal page view when the consent-gated container initializes. Do not add a second page-view event tag unless the Google tag's automatic page view is intentionally disabled.

## Required GTM workspace configuration before GA4 events can be received

The website's GTM loader is implemented, but this repository connection cannot inspect or publish the private GTM workspace. In Tag Manager, verify and publish the following in container GTM-KWM2BWTS:

1. Create or verify one **Google tag** with tag ID **G-EBV6T29B3P**. Set it to fire on **Initialization – All Pages** (or the equivalent all-pages initialization trigger). Keep automatic page views enabled.
2. Create a **GA4 Event** tag named music_outbound_click, event name exactly music_outbound_click, triggered by a Custom Event trigger with the same exact event name.
3. Create a **GA4 Event** tag named artist_contact_click, event name exactly artist_contact_click, triggered by a Custom Event trigger with the same exact event name.
4. For the event parameters listed above, create Data Layer Variables using the exact parameter names and map each variable to its matching GA4 event parameter.
5. Make sure the Google tag and GA4 event tags use the container's built-in consent checks and require analytics_storage to be granted. Do not override the site's denied advertising consent states.
6. Audit the container for any other tags, especially Ads, remarketing or third-party tags. Remove or separately govern anything not covered by this site's consent notice.
7. Preview the container with Tag Assistant, then publish the workspace.

Do not configure the same GA4 property through both a direct gtag.js installation and GTM. That would risk duplicate page views and double measurement.

## Verification checklist

Repository-side checks completed on PR #14 and follow-up PR: 
- JavaScript syntax parsing passed.
- Confirmed the shared module contains the GTM ID and no direct GA4 gtag.js loader.
- No artist-page HTML references were changed; the shared analytics module and privacy notice remain the common implementation points.
- Mocked-browser verification passed 14/14 checks: first visit makes no GTM request; denied consent defaults are queued first; Decline keeps GTM unloaded; Allow injects exactly one script; the supplied container ID is used; consent update precedes the GTM bootstrap; Spotify and email clicks push the expected events; the email address is omitted from event payloads; revocation updates consent to denied and blocks later custom events; re-consent does not inject a duplicate script.
- Privacy notice contains both the GTM container ID and intended GA4 Measurement ID.

Live checks after the GTM workspace is published:
- First-visit / declined session: verify no request to googletagmanager.com/gtm.js and no Google Analytics requests.
- Accepted session: use Tag Assistant to confirm consent defaults and update are processed in order and only the expected GA4 Google tag and event tags fire.
- GA4 DebugView / Realtime: verify page_view, music_outbound_click and artist_contact_click.
- Revoke consent and verify no subsequent custom events are sent.

A repository change alone does not prove that the GTM container contains the required GA4 tags or that GA4 has received a real event. No live GTM workspace edit or real GA4 event is claimed in this memo.

## Official references

- Google Consent Mode setup for websites: https://developers.google.com/tag-platform/security/guides/consent
- Google Tag Manager data layer: https://developers.google.com/tag-platform/tag-manager/datalayer
- Tag Manager consent mode support: https://support.google.com/tagmanager/answer/10718549
- Google consent debugging with Tag Assistant: https://developers.google.com/tag-platform/security/guides/consent-debugging
