import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Root/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../../Components/Home/Home';
import Apps from '../../Components/Apps/Apps';
import Installation from '../../Components/Installation/Installation';
import About from '../../Components/AppsDetails/AppsDetails';
import AppsDetails from '../../Components/AppsDetails/AppsDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader:() => fetch('/HomeData.json'),
                path:'/',
                Component : Home,
                hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
            },

            {
                loader: () => fetch("/PublicData.json"),
                path: "/apps",
                Component : Apps
            },

            {
                path: '/installation',
                Component : Installation
            },

            {
                path: '/apps/:id',
                loader: () => fetch("/PublicData.json"),
                Component: AppsDetails,

            }
        
        ]

    },
]);