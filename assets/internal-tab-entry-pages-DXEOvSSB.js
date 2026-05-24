import { aV as useLocation, an as Jsx, O as scramjetPathPrefix } from './index-DoSs2pBs.js';
import { N as NewTabPage } from './new-tab-page-DrU2xvlE.js';
import './settings-modal-DKGhuxvL.js';
import './use-theme-catalog-DZQm7k9p.js';
import './is-ref-object-Cpnybx3C.js';
import './layout-BJDRqdIF.js';
import './history-BRim-xll.js';

const SCRAM_URL_PREFIX = scramjetPathPrefix('scram/');

/**
 * Decode an external site URL from a `/scram/<encoded-url>` pathname.
 * Returns null when the path is not a valid proxied http(s) URL.
 */
function decodeExternalUrlFromPathname(pathname) {
  if (!pathname.startsWith(SCRAM_URL_PREFIX)) {
    return null;
  }

  const encoded = pathname.slice(SCRAM_URL_PREFIX.length);
  if (!encoded) {
    return null;
  }

  try {
    const decoded = decodeURIComponent(encoded);
    const url = new URL(decoded);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function createInternalTabEntryPage(initialInternalPath) {
  return function InternalTabEntryPage() {
    return Jsx.jsx(NewTabPage, { initialInternalPath });
  };
}

export const AITabEntryPage = createInternalTabEntryPage('/a');
export const GamesTabEntryPage = createInternalTabEntryPage('/g');
export const PrivacyTabEntryPage = createInternalTabEntryPage('/p');
export const TermsTabEntryPage = createInternalTabEntryPage('/t');
export const NotFoundTabEntryPage = createInternalTabEntryPage('/404');

/** New-tab shell for `/scram/<encoded-external-url>` routes. */
export function ScramjetTabEntryPage() {
  const location = useLocation();
  const externalUrl =
    decodeExternalUrlFromPathname(location.pathname) ?? undefined;

  return Jsx.jsx(NewTabPage, { externalUrl });
}
