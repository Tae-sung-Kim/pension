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
import { MAIN_MENU } from '@/constants/menu';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react';

type MenuProps = {
  onClick: (url?: string) => void;
};

export default function HamburgerMenu({ onClick }: MenuProps) {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <GiHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {MAIN_MENU.map((d) => {
            return (
              <Fragment key={d.id}>
                {d.url ? (
                  <DropdownMenuItem onClick={() => onClick(d.url)}>
                    {d.label}
                  </DropdownMenuItem>
                ) : d.subMenu ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>{d.label}</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {d.subMenu.map((d2) => (
                          <Link to={d2.path}>
                            <DropdownMenuItem>{d2.label}</DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <Link to={d.path}>
                    <DropdownMenuItem>{d.label}</DropdownMenuItem>
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
