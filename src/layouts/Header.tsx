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
  return (
    <div className="fixed">
      <header>
        <Menubar>
          {MAIN_MENU.map((menu) => (
            <MenubarMenu key={menu.id}>
              <MenubarTrigger>
                <Link to={menu.path}>{menu.label}</Link>
              </MenubarTrigger>
              {menu.subMenu && (
                <MenubarContent>
                  {menu.subMenu.map((subMenu) => (
                    <MenubarItem key={subMenu.id}>{subMenu.label}</MenubarItem>
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
