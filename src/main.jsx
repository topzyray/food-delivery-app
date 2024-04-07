import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root.jsx';
import Restaurants from './pages/Restaurants.jsx';
import Recipes from './pages/Recipes.jsx';
import About from './pages/About.jsx';
import Pages from './pages/Pages.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
