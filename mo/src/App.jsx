import React from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Latest from './Components/Latest'
import Series from './Components/Series'
import Footer from './Components/Footer'
import AddMovies from './Components/AddMovies'


function App() {


  return (


    <div>

      <NavBar />
      <Latest />
      <Series/>
     <AddMovies/>
      <Footer/>


    </div>



  )
}

export default App
