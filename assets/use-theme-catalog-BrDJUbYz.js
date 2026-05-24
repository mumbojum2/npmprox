import {
  v as createLucideIcon,
  aF as React,
  T as ThemeCatalogContext,
} from './index-DoSs2pBs.js';

const searchCircle = {
  cx: '11',
  cy: '11',
  r: '8',
  key: '4ej97u',
};

const searchHandle = {
  d: 'm21 21-4.3-4.3',
  key: '1qie3q',
};

const SearchIcon = createLucideIcon('search', [
  ['circle', searchCircle],
  ['path', searchHandle],
]);

const xLineA = {
  d: 'M18 6 6 18',
  key: '1bl5f8',
};

const xLineB = {
  d: 'm6 6 12 12',
  key: 'd8bk6v',
};

const XIcon = createLucideIcon('x', [
  ['path', xLineA],
  ['path', xLineB],
]);

export function useThemeCatalog() {
  const catalog = React.useContext(ThemeCatalogContext);
  if (!catalog) {
    throw new Error('useThemeCatalog must be used inside ThemeProvider');
  }
  return catalog;
}

export { SearchIcon as S, XIcon as X, useThemeCatalog as u };
