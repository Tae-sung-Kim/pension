export type Menu = {
  id: string;
  name: string;
  path: string;
  url?: string;
  subMenu?: SubMenu[];
};

export type SubMenu = {
  id: string;
  name: string;
  path: string;
  url?: string;
};
