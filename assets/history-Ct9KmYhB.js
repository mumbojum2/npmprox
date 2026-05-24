import { v as createLucideIcon } from './index-DoSs2pBs.js';

const clockPath = {
  d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8',
  key: '1357e3',
};

const cornerPath = {
  d: 'M3 3v5h5',
  key: '1fdv2h',
};

const handPath = {
  d: 'M12 7v5l4 2',
  key: '1xhq8a',
};

const HistoryIcon = createLucideIcon('history', [
  ['path', clockPath],
  ['path', cornerPath],
  ['path', handPath],
]);

export { HistoryIcon as H };
