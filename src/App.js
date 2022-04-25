import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/portfolio" element={ <Portfolio/> }/>
          <Route path="/contact" element={ <Contact name="Coucou les amis"/> }/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;