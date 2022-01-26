import React from 'react';
// import { Link } from 'react-router-dom';

import './css/body.css'
import ximi from './img/ximi.jpg';


function Body(props) {
  return (
    <div>
        <i className="far fa-snowflake snow"></i>
        <main>

            <div id='info'>
                <p className='greeting'>Hello, I'm</p>
                <h2 className='name'>Gzim Dardhishta</h2>
                <p className='job'>Software Developer</p>
                <p className="email"><i class="fas fa-envelope"></i> gzimdardhishta0@gmail.com</p>
                <p className="phone-number"><i class="fas fa-phone"></i> +383 45 842 753</p>
                <p className="location"><i class="fas fa-map-marker-alt"></i> Kosovo</p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/gzim-dardhishta-804705221/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Gzim-Dardhishta"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/gzimd_/?hl=en"><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                </div>
            </div>

            <div className="photo">
                <img src={ximi} alt="" />
            </div>
        </main>
    </div>
  );
}

export default Body;