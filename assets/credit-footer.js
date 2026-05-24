(function () {
    const FOOTER_ID = "mumbojum-credit";

    function mountCreditFooter() {
        const body = document.body || document.getElementsByTagName("body")[0];
        if (!body) {
            return;
        }

        if (document.getElementById(FOOTER_ID)) {
            return;
        }

        const footer = document.createElement("footer");
        footer.id = FOOTER_ID;
        footer.setAttribute("role", "contentinfo");
        footer.setAttribute("aria-label", "Build credit");
        footer.innerHTML =
            '<span class="mumbojum-credit__badge">Configured to work without ads</span>' +
            '<span class="mumbojum-credit__sep" aria-hidden="true">·</span>' +
            '<span>RE (reverse engineered) by: <a href="https://github.com/mumbojum2" target="_blank" rel="noopener noreferrer">mumbojum2</a></span>';

        body.appendChild(footer);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountCreditFooter);
    } else {
        mountCreditFooter();
    }
})();
