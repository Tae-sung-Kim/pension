import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react';
import { Menu } from '@/types/menu';

type MenuProps = {
  onClick: (url?: string) => void;
  menuData: Menu[];
};

export default function HamburgerMenu({ onClick, menuData }: MenuProps) {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <GiHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuData.map((d) => {
            return (
              <Fragment key={d.id}>
                {d.url ? (
                  <DropdownMenuItem onClick={() => onClick(d.url)}>
                    {d.name}
                  </DropdownMenuItem>
                ) : d.subMenu ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Link to={d.path}>{d.name}</Link>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {d.subMenu.map((d2) => (
                          <Link to={d2.path} key={d2.id}>
                            <DropdownMenuItem>{d2.name}</DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <Link to={d.path}>
                    <DropdownMenuItem>{d.name}</DropdownMenuItem>
                  </Link>
                )}
              </Fragment>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
