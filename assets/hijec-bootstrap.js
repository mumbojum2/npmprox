(function () {
  "use strict";

  var WS_BAD = "canyoupleasesaysomething/cdn@main/websocket.txt";
  var WS_GOOD = "mumbojum2/npmprox@latest/websocket.txt";
  var AD_HOST =
    /21baseballacademy|googlesyndication|doubleclick|googleadservices|adservice\.google|fundingchoicesmessages|pagead2\.googlesyndication|popads|propellerads|run-ad-auction|join-ad-interest-group|verify\.titaniumnetwork\.org|canyoupleasesaysomething|chrome-extension:\/\/invalid/i;

  function isBlockedUrl(url) {
    return !!url && AD_HOST.test(String(url));
  }

  function isScriptNode(node) {
    return !!(node && node.tagName && node.tagName.toUpperCase() === "SCRIPT");
  }

  function emptyScript(node) {
    try {
      node.type = "javascript/blocked";
      node.textContent = "";
      node.removeAttribute("src");
    } catch (_) {
      /* ignore */
    }
  }

  function shouldBlockNode(node) {
    if (!isScriptNode(node)) return false;
    return isBlockedUrl(node.src || node.getAttribute("src") || "");
  }

  var origFetch = globalThis.fetch;
  if (typeof origFetch === "function") {
    globalThis.fetch = function (input, init) {
      var url =
        typeof input === "string"
          ? input
          : input && typeof input.url === "string"
            ? input.url
            : "";
      if (url.indexOf(WS_BAD) !== -1) {
        url = url.replace(WS_BAD, WS_GOOD);
        input =
          typeof input === "string"
            ? url
            : new Request(url, input instanceof Request ? input : undefined);
      }
      if (isBlockedUrl(url)) {
        return Promise.resolve(new Response(null, { status: 204 }));
      }
      return origFetch.call(this, input, init);
    };
  }

  function installScriptBlocker() {
    var originalAppend = Node.prototype.appendChild;
    Node.prototype.appendChild = function (node) {
      if (shouldBlockNode(node)) {
        emptyScript(node);
        return node;
      }
      return originalAppend.call(this, node);
    };

    var originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (node, before) {
      if (shouldBlockNode(node)) {
        emptyScript(node);
        return node;
      }
      return originalInsertBefore.call(this, node, before);
    };

    var originalReplaceChild = Node.prototype.replaceChild;
    if (typeof originalReplaceChild === "function") {
      Node.prototype.replaceChild = function (node, old) {
        if (shouldBlockNode(node)) {
          emptyScript(node);
          return old;
        }
        return originalReplaceChild.call(this, node, old);
      };
    }

    var originalSetAttribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (name, value) {
      if (
        isScriptNode(this) &&
        String(name).toLowerCase() === "src" &&
        isBlockedUrl(value)
      ) {
        emptyScript(this);
        return;
      }
      return originalSetAttribute.call(this, name, value);
    };

    try {
      var scriptProto = HTMLScriptElement.prototype;
      var srcDesc = Object.getOwnPropertyDescriptor(scriptProto, "src");
      if (srcDesc && srcDesc.set) {
        Object.defineProperty(scriptProto, "src", {
          configurable: true,
          enumerable: srcDesc.enumerable,
          get: srcDesc.get,
          set: function (value) {
            if (isBlockedUrl(value)) {
              emptyScript(this);
              return;
            }
            return srcDesc.set.call(this, value);
          },
        });
      }
    } catch (_) {
      /* older env */
    }

    function sweepScripts(root) {
      (root || document).querySelectorAll("script[src]").forEach(function (script) {
        if (isBlockedUrl(script.src || script.getAttribute("src") || "")) {
          script.remove();
        }
      });
    }

    sweepScripts(document.documentElement);

    new MutationObserver(function () {
      sweepScripts(document.documentElement);
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  installScriptBlocker();

  try {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key) continue;
      var lower = key.toLowerCase();
      if (
        lower.indexOf("advert") !== -1 ||
        lower.indexOf("popup") !== -1 ||
        (lower.indexOf("ad") !== -1 &&
          (lower.indexOf("enable") !== -1 || lower.indexOf("show") !== -1))
      ) {
        var val = localStorage.getItem(key);
        if (val === "true" || val === "1") localStorage.setItem(key, "false");
      }
    }
  } catch (_) {
    /* private mode */
  }

  var origOpen = window.open;
  if (typeof origOpen === "function") {
    window.open = function (url) {
      if (url && (!window.__HIJEC_ALLOW_POPUP__ || isBlockedUrl(url))) return null;
      return origOpen.apply(window, arguments);
    };
  }
})();
