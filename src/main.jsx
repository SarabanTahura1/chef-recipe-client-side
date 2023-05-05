import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Home from "./Outlets/Home/Home";
import Errorpage from "./Shared/Errorpage/Errorpage";
import ChefData from "./Outlets/Chef/ChefData";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefData></ChefData>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://simply-recipes-three.vercel.app/chef-data/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
