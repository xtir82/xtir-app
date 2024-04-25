import React from "react";  
import CartWidget from "./CartWidget";
import './NavBar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <h2><a class="menu-item" href="#">XtirDev</a></h2>
                <ul>
                    <li><a class="menu-item" href="#">Inicio</a></li>
                    <li><a class="menu-item" href="#portafolio">Portafolio</a></li>
                    <li><a class="menu-item" href="#contacto">Contacto</a></li>
                </ul>
                <CartWidget />
                </nav>
        </>
    )
}

export default Navbar;