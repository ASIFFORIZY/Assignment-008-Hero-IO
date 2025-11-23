import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Root/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../../Components/Home/Home';
import Apps from '../../Components/Apps/Apps';
import Installation from '../../Components/Installation/Installation';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path:'/',
                Component : Home
            },

            {
                path: "/apps",
                Component : Apps
            },

            {
                path: '/installation',
                Component : Installation
            }
        
        ]

    },
]);