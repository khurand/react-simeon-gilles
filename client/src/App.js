import React from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import Services from "./components/Services";
import About from "./components/About";
import ParallaxSection from "./components/ParallaxSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <div className='navbar-container' id='header'>
        <Header />
      </div>
      <div className='container-fluid'>
        <div className='main'>
          <div className='carousel-container'>
            <CarouselSlider />
          </div>
          <div className='card-container' id='services'>
            <Services />
          </div>
          <div className='about-container' id='about'>
            <About />
          </div>
          <div className='parallax-container'>
            <ParallaxSection />
          </div>
          <div className='contact-container' id='contact'>
            <Contact />
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
