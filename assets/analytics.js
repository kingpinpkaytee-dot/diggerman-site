/* DiggerMan Official — privacy-first GA4 measurement.
 * Disabled until a real GA4 Measurement ID is configured.
 */
(() => {
  "use strict";
  const CONFIG={measurementId:"G-EBV6T29B3P",consentKey:"diggerman_analytics_consent_v1",privacyPath:"/diggerman-site/privacy/"};
  if(!/^G-[A-Z0-9]{6,}$/i.test(CONFIG.measurementId)) return;

  const GRANTED="granted",DENIED="denied";
  const DENIED_STATE={ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"};
  let analyticsReady=false,panel,settingsButton;

  function readChoice(){try{const v=window.localStorage.getItem(CONFIG.consentKey);return v===GRANTED||v===DENIED?v:null;}catch(_){return null;}}
  function saveChoice(v){try{window.localStorage.setItem(CONFIG.consentKey,v);}catch(_){}}

  function bootGoogleAnalytics(){
    if(analyticsReady){if(typeof window.gtag==="function")window.gtag("consent","update",{analytics_storage:GRANTED});return;}
    analyticsReady=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function gtag(){window.dataLayer.push(arguments);};
    window.gtag("consent","default",DENIED_STATE);
    window.gtag("consent","update",{analytics_storage:GRANTED});
    window.gtag("js",new Date());
    window.gtag("config",CONFIG.measurementId,{send_page_view:true,allow_google_signals:false,allow_ad_personalization_signals:false});
    const tag=document.createElement("script");
    tag.async=true;
    tag.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(CONFIG.measurementId);
    tag.referrerPolicy="strict-origin-when-cross-origin";
    document.head.appendChild(tag);
  }

  function expireCookies(){
    document.cookie.split(";").map(p=>p.trim().split("=")[0])
      .filter(n=>n==="_ga"||n.startsWith("_ga_"))
      .forEach(n=>{
        document.cookie=n+"=; Max-Age=0; path=/; SameSite=Lax; Secure";
        document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      });
  }

  function applyChoice(v){
    saveChoice(v);
    if(v===GRANTED)bootGoogleAnalytics();
    else{if(typeof window.gtag==="function")window.gtag("consent","update",DENIED_STATE);expireCookies();}
    renderPanel(false);
  }

  function createUi(){
    const style=document.createElement("style");
    style.textContent=[
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
    panel=document.createElement("section");
    panel.id="dg-analytics-panel";
    panel.setAttribute("role","region");
    panel.setAttribute("aria-label","Optional analytics choices");
    panel.hidden=true;
    panel.innerHTML='<h2>Help improve DiggerMan Official</h2><p>Optional Google Analytics helps us understand which pages and music-service links visitors use. It does not measure actual Spotify or other streaming plays. Analytics stays off unless you choose Allow. Advertising measurement is disabled.</p><p><a href="'+CONFIG.privacyPath+'">Read the site privacy and analytics notice</a>.</p><div id="dg-analytics-actions"><button id="dg-analytics-allow" type="button">Allow analytics</button><button id="dg-analytics-deny" type="button">Decline analytics</button></div>';
    settingsButton=document.createElement("button");
    settingsButton.id="dg-privacy-settings";
    settingsButton.type="button";
    settingsButton.textContent="Privacy settings";
    settingsButton.hidden=true;
    document.body.appendChild(panel);
    document.body.appendChild(settingsButton);
    panel.querySelector("#dg-analytics-allow").addEventListener("click",()=>applyChoice(GRANTED));
    panel.querySelector("#dg-analytics-deny").addEventListener("click",()=>applyChoice(DENIED));
    settingsButton.addEventListener("click",()=>renderPanel(true));
  }

  function renderPanel(show){
    if(!panel||!settingsButton)return;
    panel.hidden=!show;
    settingsButton.hidden=show;
    if(show){const first=panel.querySelector("#dg-analytics-allow");if(first)first.focus();}
  }

  function pageType(){
    const p=window.location.pathname;
    if(p.includes("/music/tracks/"))return "track_detail";
    if(p.includes("/promotions/celestial-smartlinks/"))return "smartlinks";
    if(p.includes("/genres/"))return "genre_hub";
    if(p.includes("/music/"))return "catalogue";
    if(p.includes("/privacy/"))return "privacy_notice";
    return "artist_home";
  }
  function platformFor(h){
    if(h==="open.spotify.com"||h.endsWith(".spotify.com"))return "spotify";
    if(h==="music.apple.com"||h==="itunes.apple.com")return "apple_music";
    if(h==="music.youtube.com")return "youtube_music";
    if(h==="youtube.com"||h.endsWith(".youtube.com"))return "youtube";
    if(h==="deezer.com"||h.endsWith(".deezer.com"))return "deezer";
    if(h==="tidal.com"||h.endsWith(".tidal.com"))return "tidal";
    if(h==="soundcloud.com"||h.endsWith(".soundcloud.com"))return "soundcloud";
    if(h==="ffm.to"||h.endsWith(".feature.fm"))return "feature_fm";
    return null;
  }
  function destinationKind(url,platform){
    if(platform==="feature_fm")return "smartlink";
    const p=url.pathname.toLowerCase();
    if(platform==="spotify"){
      if(p.startsWith("/track/"))return "track";
      if(p.startsWith("/album/"))return "album";
      if(p.startsWith("/artist/"))return "artist";
      if(p.startsWith("/playlist/"))return "playlist";
    }
    return p.includes("/search")?"search":"music_destination";
  }
  function linkPosition(a){
    if(a.closest("nav"))return "navigation";
    if(a.closest("footer"))return "footer";
    if(a.matches(".button,.btn,[role=button]"))return "call_to_action";
    if(a.closest("article,.release-card,.smart-card,.track-list li"))return "release_card";
    return "content";
  }
  function trackNameFor(a){
    if(pageType()==="track_detail"){const h=document.querySelector("main h1,h1");return h?h.textContent.trim().slice(0,120):"";}
    const card=a.closest("article,.release-card,.smart-card,.track-list li,.card");
    const h=card&&card.querySelector("h3,h2,h1");
    return h?h.textContent.trim().slice(0,120):"";
  }
  function labelFor(a){
    const t=(a.innerText||a.getAttribute("aria-label")||a.title||"").replace(/\s+/g," ").trim();
    if(t)return t.slice(0,100);
    const img=a.querySelector("img[alt]");
    return img?img.alt.trim().slice(0,100):"image_or_icon_link";
  }
  function handleClick(event){
    if(!analyticsReady||typeof window.gtag!=="function"||readChoice()!==GRANTED||event.defaultPrevented)return;
    const a=event.target&&event.target.closest?event.target.closest("a[href]"):null;
    if(!a)return;
    let u;try{u=new URL(a.href,window.location.href);}catch(_){return;}
    if(u.protocol==="mailto:"){
      window.gtag("event","artist_contact_click",{contact_method:"email",page_type:pageType(),page_path:window.location.pathname,link_position:linkPosition(a),transport_type:"beacon"});
      return;
    }
    if((u.protocol!=="https:"&&u.protocol!=="http:")||u.origin===window.location.origin)return;
    const platform=platformFor(u.hostname.toLowerCase());
    if(!platform)return;
    window.gtag("event","music_outbound_click",{
      destination_platform:platform,
      destination_kind:destinationKind(u,platform),
      destination_domain:u.hostname.toLowerCase(),
      track_name:trackNameFor(a),
      link_text:labelFor(a),
      link_position:linkPosition(a),
      page_type:pageType(),
      page_path:window.location.pathname,
      transport_type:"beacon"
    });
  }
  function initialise(){
    createUi();
    document.addEventListener("click",handleClick,true);
    const choice=readChoice();
    if(choice===GRANTED){bootGoogleAnalytics();renderPanel(false);}
    else if(choice===DENIED)renderPanel(false);
    else renderPanel(true);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initialise,{once:true});
  else initialise();
})();
