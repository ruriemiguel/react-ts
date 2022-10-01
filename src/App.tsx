import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import './App.css';

let nome = "Rurie Miguel Pacheco";

function App() {
  return (
    <>
    BrowserRouter, Routes
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
