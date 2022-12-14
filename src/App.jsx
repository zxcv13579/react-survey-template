import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Result from "./pages/Result";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ],
  {
    basename:
      process.env.NODE_ENV === "development" ? "/" : "/react-survey-template",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
