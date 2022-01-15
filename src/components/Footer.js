import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="first-col">
            <img
                src="/assets/icons/logogris_25w.svg"
                className="logo-footer"
                alt="25Watts"
              />

              <p className="copyright">2020 © All rights reserved.</p>
        </div> 

        <div className="second-col">
            <ul>
                <li>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={600}
                        className="link"
                        >
                        About    
                    </Link>
                </li>
                <li>
                    <Link
                       to="services"
                       spy={true}
                       smooth={true}
                       offset={-120}
                       duration={600}
                       className="link"
                       >
                       Services     
                    </Link>
                </li>
                <li>
                    <Link
                       to="products"
                       spy={true}
                       smooth={true}
                       offset={-120}
                       duration={600}
                       className="link"
                       >
                       Products     
                    </Link>
                </li>
            </ul>
                
            <ul>
                <li>
                    <Link
                       to="details"
                       spy={true}
                       smooth={true}
                       offset={-120}
                       duration={600}
                       className="link"
                       >
                       Details    
                    </Link>
                </li>    
                <li>
                    <Link
                       to="contact"
                       spy={true}
                       smooth={true}
                       offset={-120}
                       duration={600}
                       className="link"
                       >
                       Contact     
                    </Link>
                </li>
            </ul>
        </div>

        <div className="third-col">
            <h4>Follow us</h4>

            <div className="social-media">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src="/assets/icons/Icon-simple-instagram.svg" alt="Instagram"/></a>

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src="/assets/icons/Icon-ionic-logo-facebook.svg" alt="Facebook"/></a>

                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img src="/assets/icons/Icon-simple-twitter.svg" alt="Twitter"/></a>

                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <img src="/assets/icons/Icon-simple-youtube.svg" alt="Youtube"/></a>

                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <img src="/assets/icons/Icon-awesome-linkedin-in.svg" alt="LinkedIn"/></a>
            </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
