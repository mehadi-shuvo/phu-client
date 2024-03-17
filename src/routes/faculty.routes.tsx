export const facultyPath = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <div>Faculty</div>,
  },
  {
    name: "management",
    children: [
      {
        name: "course",
        path: "course",
        element: <div>Course details</div>,
      },
      {
        name: "class routine",
        path: "routine",
        element: <div>class routine</div>,
      },
    ],
  },
];
