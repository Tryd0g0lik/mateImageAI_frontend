/**
 * src\components\Router\index.tsx
 */
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { RegisterFC } from "src/pages/components/Register";

const router_ = createBrowserRouter([
  {
    path: "/",
    element: (
      <RegisterFC />
    )
  },
  {
    path: "/register",
    element: (
        <RegisterFC />
    )
  },
  {
    path: "/register/referral",
    element: (
        <RegisterFC />
    )
  }
  
],
  // {
  //   future: {
  //     v7_relativeSplatPath: true,
  //   }
  // }
);

const pagesProvider = (
  <RouterProvider router={router_} />
);

type RouterType = typeof pagesProvider;

export function PagesRouter(): RouterType {
  return pagesProvider;
}
