import React from "react";
import './Services.css';


const Services = () => {
    return (
      <>
        <div className='services'>

            <div className="text-services">
                <h2 className="title-services">Services</h2>
                <p className="p-services">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            
            <div className="icons-services">
                <div className="iservices">
                    <img src="/assets/icons/Icon-awesome-globe-americas.svg" alt="World"/>
                    <p className="i-text">Stet clita kasd gubergren</p>
                </div>

                <div className="iservices">
                    <img src="/assets/icons/Icon-awesome-cloud-upload-alt.svg" className="iservices" alt="Cloud"/>
                    <p className="i-text">At vero eos et accusam</p>
                </div>

                <div className="iservices">
                    <img src="/assets/icons/Icon-awesome-headset.svg" className="iservices" alt="Headset"/>
                    <p className="i-text">Sed up perspiciatis unde</p>
                </div>

                <div className="iservices">
                    <img src="/assets/icons/Icon-awesome-user-friends.svg" className="iservices" alt="Friends"/>
                    <p className="i-text">Lorem ipsum dolor sit amet</p>
                </div>

            </div>


        </div>

      </>
    );
  };
  
  export default Services;