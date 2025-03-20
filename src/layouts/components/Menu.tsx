import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { MAIN_MENU } from '@/constants/menu';
import { Link } from 'react-router-dom';

type MenuProps = {
  onClick: (url?: string) => void;
};

export default function Menu({ onClick }: MenuProps) {
  return (
    <Menubar className="justify-center hidden md:flex">
      {MAIN_MENU.map((d) => (
        <MenubarMenu key={d.id}>
          {d.url ? (
            <MenubarTrigger
              className="cursor-pointer"
              onClick={() => onClick(d.url)}
            >
              {d.label}
            </MenubarTrigger>
          ) : (
            <MenubarTrigger>
              <Link to={d.path}>{d.label}</Link>
            </MenubarTrigger>
          )}

          {d.subMenu && (
            <MenubarContent>
              {d.subMenu.map((d2) => (
                <Link key={d2.id} to={d2.path}>
                  <MenubarItem className="cursor-pointer">
                    {d2.label}
                  </MenubarItem>
                </Link>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
