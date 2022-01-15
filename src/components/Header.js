import React, {useState, useEffect} from 'react';
//import {Link as Linke, useParams} from 'react-router-dom';
import { Link } from "react-scroll";
import './Header.css';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [scrollNav, setScrollNav] = useState(true);

    const handleClick = ()=>{
        setNavOpen(!navOpen);
    }

    const handleClickLink = () => {
        setNavOpen(!navOpen);
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    }, [])

    const handleScroll = () => {
        window.scrollY === 0 ? setScrollNav(true) : setScrollNav(false)
    }


    return (

        <>
             <header className={scrollNav?`header`:`header header-scroll`}>        
                <nav className="navbar">
                        <Link to="/">
                            <img src="/assets/icons/logo_25w.svg" alt="25Watts" className="logoMobile"/>
                            
                        </Link>
                    <div className="burger-container" onClick={handleClick}><div className={navOpen? 'burger burger-close': 'burger burger-branding'} ></div></div>
                    <div className={navOpen? 'navbar-responsive open': 'navbar-responsive'}>
                        <Link to="/">
                            <img src="/assets/icons/logo_25w.svg" alt="25Watts" className="logo"/>
                        </Link>

                    <div className="nav-text">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            Home
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            About us
                        </Link>

                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            Services
                        </Link>

                        <Link
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            Products
                        </Link>

                        <Link
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            Details
                        </Link>

                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={600}
                            className="link"
                            onClick={handleClickLink}
                            >
                            Contact
                        </Link>
                        </div>
                    </div>
                    
                </nav>
            </header>
        
        </>
    );
}

export default Header;