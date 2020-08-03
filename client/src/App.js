import React from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import About from "./components/About";
import ParallaxSection from "./components/ParallaxSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app' style={appStyle}>
      <div className='navbar-container'>
        <Header />
      </div>
      <div className='container-fluid'>
        <div className='main'>
          <div className='carousel-container'>
            <CarouselSlider />
          </div>
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
          <div className='footer-container'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

const appStyle = {
  background:
    "linear-gradient(90deg, rgba(0,82,212,1) 0%, rgba(67,100,247,1) 35%, rgba(111,177,252,1) 100%)",
};

export default App;
