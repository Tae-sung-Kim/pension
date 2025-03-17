type Menu = {
  id: string;
  label: string;
  path: string;
  url?: string;
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
    path: '/rooms/1', // default로 첫번째 객실
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
      {
        id: 'room3',
        label: '객실3',
        path: '/rooms/3',
      },
      {
        id: 'room4',
        label: '객실4',
        path: '/rooms/4',
      },
    ],
  },
  {
    id: 'information',
    label: '이용안내',
    path: '/information',
  },
  {
    id: 'reservation',
    label: '예약하기',
    path: '/reservation',
    url: 'https://www.naver.com',
  },
  {
    id: 'reviews',
    label: '후기보기',
    path: '/reviews',
    url: 'https://www.naver.com',
  },
  {
    id: 'location',
    label: '오시는길',
    path: '/location',
  },
  {
    id: 'faq',
    label: 'FAQ',
    path: '/faq',
  },
];
