import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app" style={appStyle}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-0 container">
            <div>
              <Header />
            </div>
            <div>
              <Carousel />
            </div>
            <div>
              <About />
            </div>
            <div>
              <Form />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const appStyle = {
  background:
    'linear-gradient(90deg, rgba(0,82,212,1) 0%, rgba(67,100,247,1) 35%, rgba(111,177,252,1) 100%)',
};

export default App;
