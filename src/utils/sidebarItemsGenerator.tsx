import { TPath } from "../types";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type TAdminSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebarItem[];
};
export const sidebarItemsGenerator = (path: TPath[], rootPath: string) => {
  const sidebarItems = path.reduce((acc: TAdminSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${rootPath}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: (
            <NavLink to={`/${rootPath}/${child.path}`}>{child.name}</NavLink>
          ),
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
