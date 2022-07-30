import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Pages from './Routes';
import Menu from './components/Menu';


function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Pages />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
