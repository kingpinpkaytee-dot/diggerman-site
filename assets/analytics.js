/* DiggerMan Official — consent-gated Google Tag Manager.
 * The GTM container is not requested until a visitor accepts optional analytics.
 * GA4 is delivered by a Google tag configured inside GTM, not by a second gtag.js loader.
 */
(() => {
  "use strict";

  const CONFIG = {
    containerId: "GTM-KWM2BWTS",
    consentKey: "diggerman_analytics_consent_v1",
    privacyPath: "/diggerman-site/privacy/"
  };

  if (!/^GTM-[A-Z0-9]+$/i.test(CONFIG.containerId)) return;

  const GRANTED = "granted";
  const DENIED = "denied";
  const DENIED_STATE = {
    ad_storage: DENIED,
    ad_user_data: DENIED,
    ad_personalization: DENIED,
    analytics_storage: DENIED
  };
  const GRANTED_STATE = {
    ad_storage: DENIED,
    ad_user_data: DENIED,
    ad_personalization: DENIED,
    analytics_storage: GRANTED
  };

  let tagManagerLoaded = false;
  let panel;
  let settingsButton;

  // Establish the data layer and denied defaults before any Google tag can load.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", DENIED_STATE);

  function readChoice() {
    try {
      const value = window.localStorage.getItem(CONFIG.consentKey);
      return value === GRANTED || value === DENIED ? value : null;
    } catch (_) {
      return null;
    }
  }

  function saveChoice(value) {
    try {
      window.localStorage.setItem(CONFIG.consentKey, value);
    } catch (_) {
      // The current-page consent choice still applies if storage is unavailable.
    }
  }

  function loadTagManager() {
    if (tagManagerLoaded) {
      window.gtag("consent", "update", GRANTED_STATE);
      return;
    }

    // Queue the consent update and GTM bootstrap before the asynchronous container.
    window.gtag("consent", "update", GRANTED_STATE);
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=" +
      encodeURIComponent(CONFIG.containerId);
    script.referrerPolicy = "strict-origin-when-cross-origin";
    script.addEventListener("error", () => {
      tagManagerLoaded = false;
    }, { once: true });
    document.head.appendChild(script);
    tagManagerLoaded = true;
  }

  function expireAnalyticsCookies() {
    document.cookie.split(";")
      .map(part => part.trim().split("=")[0])
      .filter(name => name === "_ga" || name.startsWith("_ga_"))
      .forEach(name => {
        document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax; Secure";
        document.cookie = name +
          "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      });
  }

  function applyChoice(value) {
    saveChoice(value);

    if (value === GRANTED) {
      loadTagManager();
    } else {
      // GTM may already be present from an earlier acceptance on this page.
      if (tagManagerLoaded) {
        window.gtag("consent", "update", DENIED_STATE);
      }
      expireAnalyticsCookies();
    }

    renderPanel(false);
  }

  function createUi() {
    const style = document.createElement("style");
    style.textContent = [
      "#dg-analytics-panel{position:fixed;left:16px;bottom:16px;z-index:2147483000;width:min(440px,calc(100vw - 32px));padding:18px;background:#101521;color:#fff;border:1px solid #d5ad3c;border-radius:10px;box-shadow:0 12px 40px #0008;font:14px/1.5 system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif}",
      "#dg-analytics-panel h2{margin:0 0 8px;font-size:17px;line-height:1.25;color:#f0c75e;border:0;padding:0}",
      "#dg-analytics-panel p{margin:0 0 10px;color:#f2f2f2}",
      "#dg-analytics-panel a{color:#f0c75e;text-decoration:underline}",
      "#dg-analytics-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}",
      "#dg-analytics-actions button,#dg-privacy-settings{font:700 13px system-ui,-apple-system,'Segoe UI',Arial,sans-serif;border-radius:5px;padding:9px 12px;cursor:pointer}",
      "#dg-analytics-allow{background:#d5ad3c;color:#111;border:1px solid #d5ad3c}",
      "#dg-analytics-deny{background:transparent;color:#fff;border:1px solid #d5ad3c}",
      "#dg-privacy-settings{position:fixed;left:16px;bottom:16px;z-index:2147482999;background:#101521;color:#fff;border:1px solid #d5ad3c;box-shadow:0 4px 18px #0005}",
      "#dg-analytics-panel button:focus-visible,#dg-privacy-settings:focus-visible{outline:3px solid #fff;outline-offset:3px}",
      "@media(prefers-reduced-motion:reduce){#dg-analytics-panel *,#dg-privacy-settings{transition:none!important;animation:none!important}}"
    ].join("");

    document.head.appendChild(style);
    panel = document.createElement("section");
    panel.id = "dg-analytics-panel";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-label", "Optional analytics choices");
    panel.hidden = true;
    panel.innerHTML =
      '<h2>Help improve DiggerMan Official</h2>' +
      '<p>Optional Google Analytics helps us understand which pages and music-service links visitors use. It does not measure actual Spotify or other streaming plays. Analytics stays off unless you choose Allow. Advertising measurement is disabled.</p>' +
      '<p><a href="' + CONFIG.privacyPath +
      '">Read the site privacy and analytics notice</a>.</p>' +
      '<div id="dg-analytics-actions">' +
      '<button id="dg-analytics-allow" type="button">Allow analytics</button>' +
      '<button id="dg-analytics-deny" type="button">Decline analytics</button>' +
      "</div>";

    settingsButton = document.createElement("button");
    settingsButton.id = "dg-privacy-settings";
    settingsButton.type = "button";
    settingsButton.textContent = "Privacy settings";
    settingsButton.hidden = true;

    document.body.appendChild(panel);
    document.body.appendChild(settingsButton);

    panel.querySelector("#dg-analytics-allow")
      .addEventListener("click", () => applyChoice(GRANTED));
    panel.querySelector("#dg-analytics-deny")
      .addEventListener("click", () => applyChoice(DENIED));
    settingsButton.addEventListener("click", () => renderPanel(true));
  }

  function renderPanel(show) {
    if (!panel || !settingsButton) return;
    panel.hidden = !show;
    settingsButton.hidden = show;
    if (show) {
      const first = panel.querySelector("#dg-analytics-allow");
      if (first) first.focus();
    }
  }

  function pageType() {
    const path = window.location.pathname;
    if (path.includes("/music/tracks/")) return "track_detail";
    if (path.includes("/promotions/celestial-smartlinks/")) return "smartlinks";
    if (path.includes("/genres/")) return "genre_hub";
    if (path.includes("/music/")) return "catalogue";
    if (path.includes("/privacy/")) return "privacy_notice";
    return "artist_home";
  }

  function platformFor(host) {
    if (host === "open.spotify.com" || host.endsWith(".spotify.com")) return "spotify";
    if (host === "music.apple.com" || host === "itunes.apple.com") return "apple_music";
    if (host === "music.youtube.com") return "youtube_music";
    if (host === "youtube.com" || host.endsWith(".youtube.com")) return "youtube";
    if (host === "deezer.com" || host.endsWith(".deezer.com")) return "deezer";
    if (host === "tidal.com" || host.endsWith(".tidal.com")) return "tidal";
    if (host === "soundcloud.com" || host.endsWith(".soundcloud.com")) return "soundcloud";
    if (host === "ffm.to" || host.endsWith(".feature.fm")) return "feature_fm";
    return null;
  }

  function destinationKind(url, platform) {
    if (platform === "feature_fm") return "smartlink";
    const path = url.pathname.toLowerCase();
    if (platform === "spotify") {
      if (path.startsWith("/track/")) return "track";
      if (path.startsWith("/album/")) return "album";
      if (path.startsWith("/artist/")) return "artist";
      if (path.startsWith("/playlist/")) return "playlist";
    }
    return path.includes("/search") ? "search" : "music_destination";
  }

  function linkPosition(anchor) {
    if (anchor.closest("nav")) return "navigation";
    if (anchor.closest("footer")) return "footer";
    if (anchor.matches(".button,.btn,[role=button]")) return "call_to_action";
    if (anchor.closest("article,.release-card,.smart-card,.track-list li")) return "release_card";
    return "content";
  }

  function trackNameFor(anchor) {
    if (pageType() === "track_detail") {
      const heading = document.querySelector("main h1,h1");
      return heading ? heading.textContent.trim().slice(0, 120) : "";
    }
    const card = anchor.closest("article,.release-card,.smart-card,.track-list li,.card");
    const heading = card && card.querySelector("h3,h2,h1");
    return heading ? heading.textContent.trim().slice(0, 120) : "";
  }

  function labelFor(anchor) {
    const text = (
      anchor.innerText ||
      anchor.getAttribute("aria-label") ||
      anchor.title ||
      ""
    ).replace(/\s+/g, " ").trim();

    if (text) return text.slice(0, 100);
    const image = anchor.querySelector("img[alt]");
    return image ? image.alt.trim().slice(0, 100) : "image_or_icon_link";
  }

  function handleClick(event) {
    if (readChoice() !== GRANTED || !tagManagerLoaded || event.defaultPrevented) return;

    const anchor = event.target && event.target.closest
      ? event.target.closest("a[href]")
      : null;
    if (!anchor) return;

    let url;
    try {
      url = new URL(anchor.href, window.location.href);
    } catch (_) {
      return;
    }

    if (url.protocol === "mailto:") {
      window.dataLayer.push({
        event: "artist_contact_click",
        contact_method: "email",
        page_type: pageType(),
        page_path: window.location.pathname,
        link_position: linkPosition(anchor)
      });
      return;
    }

    if ((url.protocol !== "https:" && url.protocol !== "http:") ||
        url.origin === window.location.origin) return;

    const platform = platformFor(url.hostname.toLowerCase());
    if (!platform) return;

    window.dataLayer.push({
      event: "music_outbound_click",
      destination_platform: platform,
      destination_kind: destinationKind(url, platform),
      destination_domain: url.hostname.toLowerCase(),
      track_name: trackNameFor(anchor),
      link_text: labelFor(anchor),
      link_position: linkPosition(anchor),
      page_type: pageType(),
      page_path: window.location.pathname
    });
  }

  function initialise() {
    createUi();
    document.addEventListener("click", handleClick, true);

    const choice = readChoice();
    if (choice === GRANTED) {
      loadTagManager();
      renderPanel(false);
    } else if (choice === DENIED) {
      renderPanel(false);
    } else {
      renderPanel(true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
