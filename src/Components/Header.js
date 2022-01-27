import React from 'react';

import { Link } from 'react-router-dom';
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
                    <li><Link className='a' to='/'>Home</Link></li>
                    <li><Link className='a' to='/about'>About</Link></li>
                    <li><Link className='a' to='/experiences'>Experinces</Link></li>
                    <li><Link className='a' to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Header;