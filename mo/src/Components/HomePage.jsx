// src/Components/HomePage.jsx
import React from 'react';
import NavBar from './NavBar';  
import Footer from './Footer';  
import Latest from './Latest';
import Series from './Series'; 

const HomePage = () => {
  return (
    <div>
      <NavBar /> 
      <Latest />
      <Series />
      <Footer />  
    </div>
  );
};

export default HomePage;
