import React from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import About from "./components/About";
import ParallaxSection from "./components/ParallaxSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <div className='navbar-container'>
        <Header />
      </div>
      <div className='container-fluid'>
        <div className='main'>
          <div className='carousel-container'>
            <CarouselSlider />
          </div>
          <hr />
          <div className='card-container'>
            <About />
          </div>
          <hr />
          <div className='parallax-container'>
            <ParallaxSection />
          </div>
          <hr />
          <div className='contact-container'>
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
