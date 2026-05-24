import { an as Jsx, d as Link } from './index-DoSs2pBs.js';
import { H as HouseIcon } from './house-pe3drcZU.js';

const GRID_MESSAGE_TYPE = 'lucide:go-home';

function postGoHomeToParent(event) {
  if (window.parent === window) {
    return;
  }

  event.preventDefault();
  window.parent.postMessage(
    { type: GRID_MESSAGE_TYPE },
    window.location.origin,
  );
}

const houseIconProps = { size: 15, strokeWidth: 2 };

export function NotFoundPage() {
  return Jsx.jsxs('motion.div', {
    className:
      'app-grid-bg flex min-h-screen items-center justify-center px-4',
    children: Jsx.jsxs('motion.div', {
      className:
        'w-full max-w-lg rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.25)]',
      children: [
        Jsx.jsx('p', {
          className:
            'text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]',
          children: 'Error 404',
        }),
        Jsx.jsx('h1', {
          className: 'mt-3 text-2xl font-semibold text-[var(--text)]',
          children: 'Page not found',
        }),
        Jsx.jsx('p', {
          className: 'mt-2 text-sm text-[var(--muted)]',
          children:
            'This route does not exist. It may have moved, or the URL might be incorrect.',
        }),
        Jsx.jsxs('motion.div', {
          className: 'mt-6 flex flex-wrap gap-2',
          children: Jsx.jsxs(Link, {
            to: '/',
            onClick: postGoHomeToParent,
            className:
              'inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--border)]/80 hover:bg-[var(--muted)]/45',
            children: [Jsx.jsx(HouseIcon, houseIconProps), 'Go Home'],
          }),
        }),
      ],
    }),
  });
}
