import { ReactNode } from "react";
import { TPath } from "../types";

type TRoute = {
  path: string;
  element: ReactNode;
};

export const routeGenerator = (path: TPath[]) => {
  const routes = path.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path as string,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
