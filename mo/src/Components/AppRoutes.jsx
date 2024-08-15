import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import DetailCard from './DetailCard';
import AddMovies from './AddMovies'; 
import EditMovieSeries from './EditMovieSeries'; 

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movie/:id" element={<DetailCard />} />
        <Route path="series/:id" element={<DetailCard />} />
        <Route path="edit/:type/:id" element={<EditMovieSeries />} /> 
        <Route path="/add" element={<AddMovies />} /> 
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
