/**
 * src\components\Router\index.tsx
 */
import React, {useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentMeta} from "reduxToolkit/features/pagestate/pageSlice";
import { ActiveGenerateFC } from 'src/pages/components/ActiveGenerate';
import { PayFC } from 'src/pages/components/Pay';
import { ProfileFC } from 'src/pages/components/Profile';
import { RegisterFC } from "src/pages/components/Register";
import { PageMeta } from '@interfeces';
import { RootState } from 'reduxToolkit/store';

// 'pageMeta' - Data from redux
const router_ = (pageMeta: PageMeta) => createBrowserRouter([
  {
    path: "/login",
    element: <RegisterFC {...pageMeta}/>
  },
  {
    path: "/register",
    element: <RegisterFC {...pageMeta}/>
  },
  {
    path: "/register/referral",
    element: <RegisterFC {...pageMeta} />
  },
   {
    path: "/profile",
    element: <ProfileFC />
  },
  {
    path: "/profile/generate",
    element: <ActiveGenerateFC />
  },
  {
    path: "/profile/deposit",
    element: <PayFC />
  }
  
],
);
export const MetaListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const pathname =  window.location.pathname.toLowerCase().trim();
    const pageName =
      pathname.includes("register") ? "Регистрация" :
      pathname.includes("login") ? "Авторизуйтесь" :
      pathname.includes("profile") ? "Профиль" :
      pathname.includes("/profile/deposit") ? "Депозит" :
      pathname.includes("generate") ? "Генерация" :
      pathname.includes("/register/referral") ? "Реферальная ссылка" : "Главная";

    const state: PageMeta = {
      page: {
        title: pageName,
        pathName: pathname,
        description: "",
        keywords: [],
      },
    };

    dispatch(setCurrentMeta(state));
  }, [location.pathname, dispatch]);

  return null;
};

export function PagesRouter() {
  const currantMeta:PageMeta = useSelector((state: RootState) => state.metapage);
  return (
    <>
      <MetaListener /> 
      <RouterProvider router={router_(currantMeta)} />
    </>
  );
};
