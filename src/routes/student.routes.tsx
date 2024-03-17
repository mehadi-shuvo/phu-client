import StudentLogin from "../pages/student/StudentLogin";

export const studentPath = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <div>student</div>,
  },
  {
    name: "Student",
    children: [
      {
        name: "login",
        path: "login",
        element: <StudentLogin></StudentLogin>,
      },
    ],
  },
];
