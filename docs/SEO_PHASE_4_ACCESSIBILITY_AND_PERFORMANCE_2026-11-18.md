# DiggerMan SEO Phase 4 — Accessibility & Measurement Readiness

Date: 2026-11-18
Status: IMPLEMENTED ON ISOLATED BRANCH — STATIC QA PASS — PRODUCTION DEPLOYMENT PENDING

## Objective

Improve the usability of the four highest-value artist discovery/conversion pages without changing music metadata, release data, streaming destinations, or the established SEO architecture. Record the evidence needed before real performance and conversion reporting can be trusted.

## Scope

The production baseline inspected was commit `5ed87ceb9dac6809f4128842cc13b6bed20e878b` on `main`.

Pages audited:
- `/` — official artist homepage
- `/music/` — official music catalogue
- `/genres/` — genre audience discovery hub
- `/promotions/celestial-smartlinks/` — CELESTIAL SmartLinks

## Static audit findings

Before this patch:
- All four pages had a single H1 and a main landmark.
- All 34 images on those four pages had non-empty alternative text.
- All 25 catalogue cover-art links use image alternative text to provide the link's accessible name; these are intentional image-led links, not unlabeled empty links.
- External links opening a new tab included `rel="noopener"` (no exceptions found in the audited pages).
- None of the four pages had a keyboard skip link.
- None had a `prefers-reduced-motion` fallback, despite smooth scrolling on three pages.

This was a static source audit. It is not a complete WCAG conformance assessment or a substitute for assistive-technology testing.

## Implemented

On all four pages:
1. Added a visible-on-focus “Skip to main content” link as the first keyboard-accessible page control.
2. Added `id="main-content"` and `tabindex="-1"` to the main landmark so the skip link has a focusable destination.
3. Added `aria-label="Main navigation"` where the page's main navigation did not already have an accessible name.
4. Added a `prefers-reduced-motion: reduce` CSS rule to turn off transitions/animations and disable smooth scrolling for visitors who request reduced motion.

No catalogue entries, track genres, album artwork, DSP links, JSON-LD identity values, canonicals, robots directives, or sitemap URLs were changed.

## Post-change static QA

Each of the four updated pages passed:
- Skip link exists and points to `#main-content`.
- Main landmark has the matching ID and `tabindex="-1"`.
- Reduced-motion media query exists.
- Exactly one main landmark.
- Exactly one H1.
- Every image has an `alt` attribute.

Result: 6/6 checks passed on each page (24/24 page-level checks).

## Performance and analytics status

- A live Google PageSpeed Insights API request returned HTTP 429. No Lighthouse, accessibility, or Core Web Vitals score is claimed from that response.
- The Acer has Chrome and Edge installed, but no Lighthouse CLI was found on PATH. This release does not install new packages or run a heavy browser audit on the 4 GB machine.
- GA4 outbound-click measurement remains blocked until the owner supplies the actual GA4 Measurement ID (format `G-XXXXXXXXXX`) and confirms the preferred consent/measurement approach. No identifier or analytics property has been invented.
- Google Analytics enhanced measurement can automatically collect outbound-click events once the Google tag is properly installed and outbound-click measurement is enabled. See Google's official documentation: https://support.google.com/analytics/answer/13566436
- No current YouTube channel or owned video URLs could be verified from the available public links and repository content. VideoObject schema or video-specific SEO is therefore not fabricated.
- Google Search Console indexing/performance and DSP stream/listener changes still require owner-side reports. A page visit or outbound click is not a Spotify stream.

## Deployment and next gates

- Branch: `seo/phase-4-accessibility-motion-2026-11-18`
- Production deployment is pending pull request review and merge.
- After deployment, verify all four routes return HTTP 200 and the new skip-link / reduced-motion markers are present in production HTML.
- Then obtain GA4 Measurement ID and configure the agreed consent approach before installing analytics.
- Re-run PageSpeed/Lighthouse when a permitted measurement route is available; inspect mobile and desktop separately.
- Validate keyboard navigation and screen-reader behavior on a real browser, and compare field Core Web Vitals when Search Console or CrUX data is available.

## Guardrails

- Do not claim WCAG conformance from static checks alone.
- Do not invent GA4 IDs, channel URLs, direct DSP profile links, search rankings, leads, streams, or listener uplift.
- Do not add unverified track-level genre labels or misleading video metadata.
- Preserve the user's existing artist catalogue and official streaming links.
