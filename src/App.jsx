import { useState } from 'react'
import Header from './components/Header/Header'
import MainSection from './components/MainSection';
import Colecoes from './components/Colecoes';
import ProductList from './components/ProductList';
import Categorias from './components/Categorias';
import Sobre from './components/Sobre';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MainSection />
      <Colecoes />
      <ProductList />
      <Categorias />
      < Sobre />
      < Newsletter />
      < Footer />
      
    </>
  )
}

export default App;
