import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/about/Hero";
import Services from "./components/UI/Skills/Services";
import Portfolio from './components/UI/portfolio/Portfolio';
import Contact from "./components/UI/contact/Contact";
import NoPage from './components/UI/NoPage'
import {  Route, Routes } from "react-router-dom";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Hero />}/>
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
