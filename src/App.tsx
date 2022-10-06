import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import './App.css';

let nome = "Rurie Miguel Pacheco";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
