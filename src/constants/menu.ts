type Menu = {
  id: string;
  label: string;
  path: string;
  subMenu?: Menu[];
};

export const MAIN_MENU: Menu[] = [
  {
    id: 'home',
    label: '홈',
    path: '/',
  },
  {
    id: 'rooms',
    label: '객실소개',
    path: '/rooms',
    subMenu: [
      {
        id: 'room1',
        label: '객실1',
        path: '/rooms/1',
      },
      {
        id: 'room2',
        label: '객실2',
        path: '/rooms/2',
      },
    ],
  },
  {
    id: 'reservation',
    label: '예약하러가기',
    path: '/reservation',
  },
  {
    id: 'directions',
    label: '오시는길',
    path: '/directions',
  },
  {
    id: 'guide',
    label: '이용안내',
    path: '/guide',
  },
  {
    id: 'reviews',
    label: '후기보러가기',
    path: '/reviews',
  },
  {
    id: 'gallery',
    label: '갤러리',
    path: '/gallery',
  },
  {
    id: 'faq',
    label: 'FAQ',
    path: '/faq',
  },
];
