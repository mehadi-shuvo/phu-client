import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPath } from "./admin.routes";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <div> this is about</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPath),
  },
]);
