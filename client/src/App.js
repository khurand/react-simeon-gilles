import React, { useEffect } from "react";
import ScrollIndicator from "./components/ScrollIndicator";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";
import Services from "./components/Services";
import About from "./components/About";
import ParallaxBanner from "./components/ParallaxBanner";
// import Contact from "./components/Contact";
import ContactHooks from "./components/form/ContactHooks";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import Aos from "aos";
import "aos/dist/aos.css";
import ContextProvider from "./contexts/Context";

function App() {
  useEffect(() => {
    Aos.init({
      // Parametres global
      once: true,
    });
  }, []);

  return (
    <div className='app'>
      <ContextProvider>
        <ScrollIndicator />
        <Header />
        <div className='container-fluid'>
          <div className='main'>
            <CarouselSlider />
            <Services />
            <About />
            <ParallaxBanner />
            <ContactHooks />
            <Cookie />
          </div>
        </div>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
