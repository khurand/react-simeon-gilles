import React, { useEffect } from "react";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import Services from "./components/Services";
import About from "./components/About";
import ParallaxSection from "./components/ParallaxSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      // Parametres global
      once: true,
    });
  }, []);

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
