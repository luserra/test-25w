import React from 'react';
/* import React, { useState, useEffect } from "react"; */
/* import { useParams } from "react-router-dom"; */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
/* import datos from "../datos/slider.json"; */
import './Slider.css';


const Slider = () =>{
   /*  const { slider } = useParams();
    const [datos, setDatosSlider] = useState({});

    useEffect(()=>{
        setDatosSlider(()=>datos.filter(datos => datos.slider === slider)[0]);
        }, []);

    const {
        title,
        description,
      } = datos; */


    return(

        <>

             <Carousel 
            showArrows={false}
            emulateTouch={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            swipeable={true}
            useKeyboardArrows={true}
            margin={0}
            padding={0}
            autoPlay={true}
            interval={5000}
            transitionTime={800}
            className="slider">
                <div>
                    <img src="/assets/images/slide1-background.png" alt="25Watts"/>
                    <div className='text'>
                        <h1 className='title'>Sed ut perspiciatis unde omnis iste natus</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <button className='btnRead'>Read More</button>
                    
                </div>

                <div>
                    <img src="/assets/images/slide2-background.png" alt="25Watts"/>
                    <div className='text'>
                        <h1 className='title'>Proin elementum massa et felis</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button className='btnRead'>Read More</button>
                    
                </div>

                <div>
                    <img src="/assets/images/slide3-background.png" alt="25Watts"/>
                    <div className='text'>
                        <h1 className='title'>Nulla rhoncus vulputate congue</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <button className='btnRead'>Read More</button>
                </div>
                
            </Carousel> 
        </>
    );
}

export default Slider;

