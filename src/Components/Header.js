import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

const openCloseMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // close the hamburger menu
    const navLink = document.querySelectorAll(".nav-menu");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}

function Header() {

  return (
    <div>
        <header>
            <div className="logo">
                <h1>Ximi</h1>
            </div>

            <nav>
                <ul className='nav-menu'>
                    <li><Link className='a' to='/'>Home</Link></li>
                    <li><Link className='a' to='/about'>About</Link></li>
                    <li><Link className='a' to='/experiences'>Experinces</Link></li>
                    <li><Link className='a' to='/contact'>Contact</Link></li>
                </ul>

                <div class="hamburger" onClick={openCloseMenu}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    </div>
  );
}

export default Header;