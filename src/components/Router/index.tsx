/**
 * src\components\Router\index.tsx
 */
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { ActiveGenerateFC } from 'src/pages/components/ActiveGenerate';
import { PayFC } from 'src/pages/components/Pay';
import { ProfileFC } from 'src/pages/components/Profile';
import { RegisterFC } from "src/pages/components/Register";

// LINK FOR THE LOGIN , i can't  see. !!!!
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
  },
   {
    path: "/profile",
    element: (
      <ProfileFC />
    )
  },
  {
    path: "/profile/generate",
    element: (
      <ActiveGenerateFC />
    )
  },
  {
    path: "/profile/deposit",
    element: (
      <PayFC />
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
