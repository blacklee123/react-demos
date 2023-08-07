import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { AuthRouteObject } from "react-router-auth-plus";
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'

const routes: AuthRouteObject[] = [
  {
    path: '/',
    element: <Layout></Layout>,
    auth: [],
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: 'home',
        element: <Home />,
        auth: ['home'],
      },
      {
        path: 'about',
        element: <About />,
        auth: ['about'],
      },
    ],
  },
]

export default routes;
