import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import Root from './layout/Root.jsx';
import Restaurants from './pages/Restaurants.jsx';
import Recipes from './pages/Recipes.jsx';
import About from './pages/About.jsx';
import Pages from './pages/Pages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <div className="h-screen w-full flex justify-center items-center text-primary ">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl font-semibold">Page not found</p>
          <NavLink to="/" className="underline">
            Go back home
          </NavLink>
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Restaurants />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'pages',
        element: <Pages />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
