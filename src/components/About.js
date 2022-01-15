import React from "react";
import './About.css';



const About = () => {
    return (
      <>
        <div className='about'>

            <img src="/assets/images/about.png" className="img-about" alt="About us"/>

            <div className="text-about">
                <h2 className="title-about">About us <br/><span>We Help Businesses</span></h2>
                <p className="p-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <button className="btn btn-about">More info</button>
            </div>
            


        </div>

      </>
    );
  };
  
  export default About;
  