// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import HomePage from './Components/HomePage';
import AddMovies from './Components/AddMovies'; // Ensure path is correct

import DetailCard from './Components/DetailCard';
import { detailCardLoader } from './Components/dataLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/add',
    element: <AddMovies />,
  },

  {
    path: '/:type/:id',
    element: <DetailCard />,
    loader: detailCardLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
