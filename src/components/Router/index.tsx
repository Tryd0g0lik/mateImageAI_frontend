/**
 * src\components\Router\index.tsx
 */
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { ActiveGenerateFC } from 'src/pages/components/ActiveGenerate';
import { ProfileFC } from 'src/pages/components/Profile';
import { RegisterFC } from "src/pages/components/Register";

const router_ = createBrowserRouter([
  {
    path: "/",
    element: (
      <ActiveGenerateFC />
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
  },
   {
    path: "/profile",
    element: (
      <ProfileFC />
    )
  },
  
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
