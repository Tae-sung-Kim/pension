import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { type Menu } from '@/types/menu';

import { Link } from 'react-router-dom';

type MenuProps = {
  onClick: (url?: string) => void;
  menuData: Menu[];
};

export default function PcMenu({ onClick, menuData }: MenuProps) {
  return (
    <NavigationMenu className="container justify-center hidden md:flex">
      <NavigationMenuList>
        {menuData.map((d) => {
          return (
            <NavigationMenuItem key={d.id}>
              {d.url ? (
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                  onClick={() => onClick(d.url)}
                >
                  {d.name}
                </NavigationMenuLink>
              ) : (
                <>
                  {d.subMenu ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'cursor-pointer'
                        )}
                      >
                        <Link to={d.path}>{d.name}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {d.subMenu.map((d2) => {
                            return (
                              <Link
                                key={d2.id}
                                className="cursor-pointer"
                                to={d2.path}
                              >
                                {d2.name}
                              </Link>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link className={navigationMenuTriggerStyle()} to={d.path}>
                      {d.name}
                    </Link>
                  )}
                </>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
