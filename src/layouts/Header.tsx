import PcMenu from './components/PcMenu';
import HamburgerMenu from './components/HamburgerMenu';
import { MAIN_MENU } from '@/constants/menu';
import { useEffect, useState } from 'react';
import rooms from '@/data/rooms.json';
import { type Menu } from '@/types/menu';

export default function Header() {
  const [mainMenu, setMainMenu] = useState(MAIN_MENU);

  // 메뉴 이동
  const handleOpenUrl = (url?: string) => {
    if (url) {
      window.open(url);
    }
  };

  // 객실 메뉴만 추가
  useEffect(() => {
    setMainMenu((prevData: Menu[]) => {
      return prevData.map((d) => {
        if (d.id === 'rooms') {
          return {
            ...d,
            subMenu: rooms.map((room) => ({
              id: room.id,
              name: room.name,
              path: `/rooms/${room.id}`,
            })),
          };
        }
        return d;
      });
    });
  }, []);

  return (
    <div className="fixed top-1 left-0 w-full z-50">
      <header className="container">
        {/* PC 메뉴 */}
        <PcMenu onClick={handleOpenUrl} menuData={mainMenu} />

        {/* 모바일 메뉴 */}
        <HamburgerMenu onClick={handleOpenUrl} menuData={mainMenu} />
      </header>
    </div>
  );
}
