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
      <Header />
      <div className='container-fluid' id='main-content'>
        <div className='main'>
          <CarouselSlider />
          <Services />
          <About />
          <ParallaxSection />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
