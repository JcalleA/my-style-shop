import React, { useState, useEffect } from 'react';
//import './components.css'
import { Link, useNavigate } from 'react-router-dom';
import "../Navigation/Nabvar.css"
// ICONS
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


const Barranav = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <>
            <header className="header">
                <div className="header__content">
                    <Link to="/" className="header__content__logo">
                        <img className="App-logo img-logo"
                            src="https://www.seekpng.com/png/detail/816-8167410_logo-image-barbe-shop-barber-logo-barber-shop.png"
                            alt="Imagen del logo">
                        </img>
                    </Link>
                    <nav
                        className={`${"header__content__nav"} 
                    ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
                }`}
                    >
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/servicios">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/reserva">Reserva</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <Link to="/registro">
                                <button className="btn">Registro</button>
                            </Link>
                            <Link to="/login">
                                <button className="btn btn__login">Login</button>
                            </Link>
                        </ul>
                    </nav>
                    <div className="header__content__toggle">
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                    </div>
                </div>
            </header>
        </>
    );

};
export default Barranav;
