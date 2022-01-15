import './App.css';
import React from 'react';
import {Grid} from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Details from './components/Details';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Grid container>
	      <Grid item xs={12}>
        <Header />
        <Slider />
        <About />
        <Services />
        <Products />
        <Details />
        <Contact />
        <Footer />
	      </Grid>
      </Grid>
      

    
      
    </div>
  );
}

export default App;