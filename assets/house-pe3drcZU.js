import { v as createLucideIcon } from './index-DoSs2pBs.js';

const roofPath = {
  d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8',
  key: '5wwlr5',
};

const buildingPath = {
  d:
    'M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M3 10l9-6 9 6 M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6',
  key: 'r6nss1',
};

const HouseIcon = createLucideIcon('house', [
  ['path', roofPath],
  ['path', buildingPath],
]);

export { HouseIcon as H };
