import React from 'react';
import './css/header.css';

function Header() {
  return (
    <div>
        <header>
            <div className="logo">
                <h1>Ximi</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#" className='is-active'>Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Experiences</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Header;