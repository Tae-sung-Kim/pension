import { Menu } from '@/types/menu';

export const MAIN_MENU: Menu[] = [
  {
    id: 'home',
    name: '홈',
    path: '/',
  },
  {
    id: 'rooms',
    name: '객실소개',
    path: '/rooms', // default로 첫번째 객실
  },
  {
    id: 'information',
    name: '이용안내',
    path: '/information',
  },
  {
    id: 'reservation',
    name: '예약하기',
    path: '/reservation',
    url: 'https://www.naver.com',
  },
  {
    id: 'reviews',
    name: '후기보기',
    path: '/reviews',
    url: 'https://www.naver.com',
  },
  {
    id: 'location',
    name: '오시는길',
    path: '/location',
  },
  {
    id: 'faq',
    name: 'FAQ',
    path: '/faq',
  },
];
