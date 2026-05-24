(function () {
  "use strict";

  const PROXY_NAME = "HIjec";
  const SPLASH_MS = 2800;
  const MERCY_URL = "https://classroom.google.com/";
  const GITHUB_URL = "https://github.com/mumbojum2";

  const MALWARE_HOST_PATTERNS = [
    /\.tk$/i,
    /\.ml$/i,
    /\.ga$/i,
    /\.cf$/i,
    /\.gq$/i,
    /doubleclick\./i,
    /googlesyndication\./i,
    /popads\./i,
    /propellerads\./i,
  ];

  function getBody() {
    return document.body || document.getElementsByTagName("body")[0] || null;
  }

  const SHORTCUTS = [
    {
      icon: "🎬",
      label: "Movies & TV",
      desc: "aether.mom",
      action: () => openProxied("https://aether.mom"),
    },
    {
      icon: "▶️",
      label: "YouTube",
      desc: "Proxied",
      action: () => openProxied("https://www.youtube.com"),
    },
    {
      icon: "🎵",
      label: "Spotify",
      desc: "Proxied",
      action: () => openProxied("https://open.spotify.com"),
    },
    {
      icon: "⌨️",
      label: "GitHub",
      desc: "mumbojum2",
      action: () => safeOpenExternal(GITHUB_URL),
    },
    {
      icon: "✨",
      label: "AI",
      desc: "Gemini or ChatGPT",
      action: () => openAiPicker(),
    },
    {
      icon: "🎮",
      label: "Games",
      desc: "Built-in /g",
      action: () => goInternal("/g"),
    },
  ];

  function isMalwareHost(hostname) {
    if (!hostname) return false;
    return MALWARE_HOST_PATTERNS.some((re) => re.test(hostname));
  }

  function installCookieGuard() {
    try {
      const proto = Document.prototype;
      const desc = Object.getOwnPropertyDescriptor(proto, "cookie");
      if (!desc || !desc.set) return;

      Object.defineProperty(proto, "cookie", {
        configurable: true,
        enumerable: desc.enumerable,
        get: desc.get,
        set(value) {
          try {
            if (isMalwareHost(location.hostname)) {
              console.warn("[HIjec] Blocked cookie write on suspicious host:", location.hostname);
              return;
            }
          } catch (_) {
            /* ignore */
          }
          return desc.set.call(this, value);
        },
      });
    } catch (_) {
      /* readonly env */
    }
  }

  function openProxied(url) {
    const full = url.match(/^https?:\/\//i) ? url : "https://" + url;
    try {
      if (isMalwareHost(new URL(full).hostname)) {
        alert("HIjec blocked navigation to a suspicious site.");
        return;
      }
    } catch (_) {
      return;
    }
    hideHome();
    window.location.assign("/scram/" + encodeURIComponent(full));
  }

  function safeOpenExternal(url) {
    try {
      window.__HIJEC_ALLOW_POPUP__ = true;
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setTimeout(() => {
        window.__HIJEC_ALLOW_POPUP__ = false;
      }, 0);
    }
  }

  function goInternal(path) {
    hideHome();
    const normalized = path.startsWith("/") ? path : "/" + path;
    if (location.hash || location.href.includes("#/")) {
      location.hash = "#" + normalized;
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.assign(normalized);
    }
  }

  function openAiPicker() {
    const choice = window.prompt(
      "Open AI through HIjec:\n\n1 = Gemini\n2 = ChatGPT\n\nEnter 1 or 2:",
      "1",
    );
    if (choice === "2") openProxied("https://chatgpt.com");
    else openProxied("https://gemini.google.com");
  }

  function triggerMercy() {
    try {
      window.stop();
    } catch (_) {
      /* ignore */
    }
    window.location.replace(MERCY_URL);
  }

  function isHomeRoute() {
    const path = location.pathname.replace(/\/$/, "") || "/";
    const hash = location.hash || "";
    if (path.includes("/scram/")) return false;
    if (/^\/(g|a|p|t|404)$/.test(path)) return false;
    if (path === "/" || path === "" || path.endsWith("/index.html") || path.endsWith("/logo.svg")) {
      return !hash || hash === "#" || hash === "#/";
    }
    return false;
  }

  function decodeScramUrl(href) {
    try {
      let candidate = new URL(href, location.href).href;
      const marker = "/scram/";
      for (let i = 0; i < 6; i++) {
        const parsed = new URL(candidate, location.href);
        const idx = parsed.pathname.indexOf(marker);
        if (idx === -1) return candidate;
        const encoded = parsed.pathname.slice(idx + marker.length) + parsed.search + parsed.hash;
        try {
          candidate = decodeURIComponent(encoded);
        } catch {
          candidate = encoded;
        }
      }
      return candidate;
    } catch {
      return href;
    }
  }

  function isOnAether() {
    return /aether\.mom/i.test(decodeScramUrl(location.href));
  }

  function renameBrandingTitle() {
    document.title = "JEC";
    const metaApp = document.querySelector('meta[name="application-name"]');
    if (metaApp) metaApp.setAttribute("content", PROXY_NAME);
  }

  function renameBrandingText() {
    const body = getBody();
    if (!body) return;
    const tw = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = tw.nextNode())) {
      if (n.textContent && /\bLucide\b/.test(n.textContent)) {
        n.textContent = n.textContent.replace(/\bLucide\b/g, PROXY_NAME);
      }
    }
  }

  function renameBranding() {
    renameBrandingTitle();
    renameBrandingText();
  }

  function buildSplash() {
    const body = getBody();
    if (!body) return null;
    const el = document.createElement("div");
    el.id = "jec-splash";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Welcome");
    el.innerHTML =
      '<div class="jec-splash__inner">' +
      '<span class="jec-splash__badge">' + PROXY_NAME + " · JEC</span>" +
      '<h1 class="jec-splash__title">Hello JEC students!</h1>' +
      '<p class="jec-splash__sub">Loading ' + PROXY_NAME + "…</p>" +
      '<div class="jec-splash__bar-wrap"><div class="jec-splash__bar" id="jec-splash-bar"></div></div>' +
      '<p class="jec-splash__pct" id="jec-splash-pct">0%</p>' +
      "</div>";
    body.appendChild(el);
    return el;
  }

  function runSplash(onDone) {
    const splash = document.getElementById("jec-splash") || buildSplash();
    if (!splash) {
      onDone();
      return;
    }
    const pct = document.getElementById("jec-splash-pct");
    const milestones = [0, 25, 50, 75, 100];
    milestones.forEach((p, i) => {
      setTimeout(() => {
        if (pct) pct.textContent = p + "%";
      }, (SPLASH_MS * i) / (milestones.length - 1));
    });
    setTimeout(() => {
      splash.classList.add("jec-splash--hide");
      setTimeout(() => {
        splash.remove();
        onDone();
      }, 550);
    }, SPLASH_MS);
  }

  let brandingTextTimer = 0;
  function scheduleBrandingText() {
    if (brandingTextTimer) window.clearTimeout(brandingTextTimer);
    brandingTextTimer = window.setTimeout(() => {
      brandingTextTimer = 0;
      renameBrandingText();
    }, 250);
  }

  function refreshBrandingSoon() {
    scheduleBrandingText();
    [500, 1500, 3500, 7000].forEach((ms) => {
      window.setTimeout(renameBrandingText, ms);
    });
  }

  function buildHome() {
    const body = getBody();
    if (!body) return null;
    const home = document.createElement("div");
    home.id = "jec-home";
    home.innerHTML =
      '<div class="jec-home__panel">' +
      '<div class="jec-home__brand"><h1>' + PROXY_NAME + "</h1>" +
      "<p>Pick a shortcut to get started</p></div>" +
      '<div class="jec-home__grid" id="jec-home-grid"></div>' +
      "</div>";

    const grid = home.querySelector("#jec-home-grid");
    SHORTCUTS.forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "jec-home__tile";
      btn.innerHTML =
        '<span class="jec-home__tile-icon">' + s.icon + "</span>" +
        '<span class="jec-home__tile-label">' + s.label + "</span>" +
        '<span class="jec-home__tile-desc">' + s.desc + "</span>";
      btn.addEventListener("click", s.action);
      grid.appendChild(btn);
    });
    body.appendChild(home);
    return home;
  }

  function showHome() {
    if (!isHomeRoute()) return;
    const home = document.getElementById("jec-home") || buildHome();
    if (!home) return;
    home.classList.add("jec-home--visible");
    const body = getBody();
    if (body) body.classList.add("jec-home-active");
    markBuiltinShortcuts();
  }

  function hideHome() {
    const home = document.getElementById("jec-home");
    if (home) home.classList.remove("jec-home--visible");
    const body = getBody();
    if (body) body.classList.remove("jec-home-active");
  }

  function markBuiltinShortcuts() {
    const root = document.getElementById("root");
    if (!root) return;
    root.querySelectorAll("section, [class*='shortcut'], [class*='Shortcut'], ul, ol, nav").forEach((el) => {
      if (el.closest("#jec-home")) return;
      const text = (el.textContent || "").toLowerCase();
      if (
        text.includes("shortcut") ||
        text.includes("youtube") ||
        text.includes("spotify") ||
        text.includes("roblox") ||
        el.querySelectorAll("a,button").length >= 3
      ) {
        el.setAttribute("data-jec-hide-shortcuts", "true");
      }
    });
  }

  function buildMercyButton() {
    const body = getBody();
    if (!body) return;

    const existingButtons = Array.from(
      document.querySelectorAll("#jec-mercy-btn, [data-hijec-panic='true']"),
    );
    if (existingButtons.length) {
      existingButtons.slice(1).forEach((btn) => btn.remove());
      return;
    }

    const btn = document.createElement("button");
    btn.id = "jec-mercy-btn";
    btn.dataset.hijecPanic = "true";
    btn.type = "button";
    btn.title = "Panic - switch to Google Classroom";
    btn.textContent = "Panic";
    btn.addEventListener("click", triggerMercy);
    body.appendChild(btn);
  }

  function buildAetherBanner() {
    const body = getBody();
    if (!body) return;
    if (document.getElementById("jec-aether-banner")) return;
    const banner = document.createElement("div");
    banner.id = "jec-aether-banner";
    banner.innerHTML =
      "<strong>Aether tip:</strong> If streams fail to load, try another site or check your network. This build runs without ads." +
      '<button type="button" id="jec-aether-dismiss">Got it</button>';
    banner.querySelector("#jec-aether-dismiss").addEventListener("click", () => {
      banner.classList.remove("jec-aether--show");
      sessionStorage.setItem("jec-aether-tip-dismissed", "1");
    });
    body.appendChild(banner);
  }

  function updateAetherBanner() {
    buildAetherBanner();
    const banner = document.getElementById("jec-aether-banner");
    if (!banner) return;
    const show = isOnAether() && sessionStorage.getItem("jec-aether-tip-dismissed") !== "1";
    banner.classList.toggle("jec-aether--show", show);
  }

  function ensureCookiesEnabled() {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        const lower = key.toLowerCase();
        if (lower.includes("cookie")) {
          const val = localStorage.getItem(key);
          if (val === "false" || val === "0") localStorage.setItem(key, "true");
        }
      }
    } catch (_) {
      /* private mode */
    }
  }

  function disableBuiltInAds() {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        const lower = key.toLowerCase();
        if (
          lower.includes("advert") ||
          lower.includes("popup") ||
          (lower.includes("ad") &&
            (lower.includes("enable") || lower.includes("show")))
        ) {
          const val = localStorage.getItem(key);
          if (val === "true" || val === "1") localStorage.setItem(key, "false");
        }
      }
    } catch (_) {
      /* private mode */
    }
  }

  function onRouteChange() {
    renameBrandingTitle();
    scheduleBrandingText();
    updateAetherBanner();
    buildMercyButton();
    hideHome();
  }

  function init() {
    if (window.__HIJEC_CUSTOM_INITIALIZED__) {
      buildMercyButton();
      return;
    }

    if (!getBody()) {
      document.addEventListener("DOMContentLoaded", init, { once: true });
      window.addEventListener("load", init, { once: true });
      return;
    }

    window.__HIJEC_CUSTOM_INITIALIZED__ = true;
    installCookieGuard();
    ensureCookiesEnabled();
    disableBuiltInAds();
    buildMercyButton();
    buildAetherBanner();

    const boot = () => {
      runSplash(() => {
        onRouteChange();
        refreshBrandingSoon();
      });
    };

    if (getBody()) boot();
    else document.addEventListener("DOMContentLoaded", boot);

    window.addEventListener("popstate", onRouteChange);
    window.addEventListener("hashchange", onRouteChange);
    let titleTimer = 0;
    const titleObserver = new MutationObserver(() => {
      if (titleTimer) return;
      titleTimer = window.setTimeout(() => {
        titleTimer = 0;
        renameBrandingTitle();
      }, 500);
    });
    titleObserver.observe(document.documentElement, {
      childList: true,
      subtree: false,
      attributes: true,
      attributeFilter: ["title"],
    });
  }

  init();
})();
