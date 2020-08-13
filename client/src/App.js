import React from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import Services from "./components/Services";
import About from "./components/About";
import ParallaxSection from "./components/ParallaxSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BackToTop } from "react-jump";

function App() {
  return (
    <div className='app'>
      <div className='navbar-container' id='header'>
        <Header />
      </div>
      <div className='container-fluid' id='main-content'>
        <div className='main'>
          <div className='carousel-container' id='carousel'>
            <CarouselSlider />
          </div>
          <div className='card-container' id='services'>
            <Services />
          </div>
          <div className='about-container' id='about'>
            <About />
          </div>
          <div className='parallax-container' id='parallax'>
            <ParallaxSection />
          </div>
          <div className='contact-container' id='contact'>
            <Contact />
          </div>
        </div>
        <BackToTop options={{ offset: 50 }} className='b2t' showHeight={400}>
          <a href='#header'>
            <i className='fas fa-rocket'></i>
          </a>
        </BackToTop>
      </div>
      <div className='footer-container' id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
