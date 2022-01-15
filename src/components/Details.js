import React from "react";
import './Details.css';


const Details = () => {
    return (
      <>
        <div className='details'>

            <div className="text-services">
                <h2 className="title-services">More details</h2>
                <p className="p-services">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            
            <div className="icons-details">

                <div className="i-col">
                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-anchor.svg" alt="Anchor"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus vestibulum vel nex ex. Nunc sed velit ullamcorper.</p>
                    </div>

                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-bookmark.svg" className="iservices" alt="Bookmark"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus vestibulum vel nex ex. Nunc sed velit ullamcorper.</p>
                    </div>

                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-brush.svg" className="iservices" alt="Brush"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus.</p>
                    </div>
                </div>

                <div className="i-col">
                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-bell.svg" className="iservices" alt="Bell"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus vestibulum vel nex ex. Nunc sed velit ullamcorper.</p>
                    </div>

                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-bandcamp.svg" className="iservices" alt="Bandcap"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus.</p>
                    </div>

                    <div className="idetails">
                        <img src="/assets/icons/Icon-awesome-box-open.svg" className="iservices" alt="Box open"/>
                        <p className="p-details">Donec egestas tortor quis turpis finibus vestibulum vel nex ex. Nunc sed velit ullamcorper.</p>
                    </div>
                </div>

            </div>

        </div>

      </>
    );
  };
  
  export default Details;