import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

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
        <Route path="/temas" element={<ListaTema />} />
        <Route path="/posts" element={<ListaPostagem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
