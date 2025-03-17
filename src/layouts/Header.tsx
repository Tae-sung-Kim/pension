import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { MAIN_MENU } from '@/constants/menu';
import { Link } from 'react-router-dom';

export default function Header() {
  const handleOpenUrl = (url?: string) => {
    if (url) {
      window.open(url);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="container">
        <Menubar className="justify-center">
          {MAIN_MENU.map((menu) => (
            <MenubarMenu key={menu.id}>
              {menu.url ? (
                <MenubarTrigger
                  className="cursor-pointer"
                  onClick={() => handleOpenUrl(menu.url)}
                >
                  {menu.label}
                </MenubarTrigger>
              ) : (
                <MenubarTrigger>
                  <Link to={menu.path}>{menu.label}</Link>
                </MenubarTrigger>
              )}

              {menu.subMenu && (
                <MenubarContent>
                  {menu.subMenu.map((subMenu) => (
                    <Link key={subMenu.id} to={subMenu.path}>
                      <MenubarItem className="cursor-pointer">
                        {subMenu.label}
                      </MenubarItem>
                    </Link>
                  ))}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
        </Menubar>
      </header>
    </div>
  );
}
