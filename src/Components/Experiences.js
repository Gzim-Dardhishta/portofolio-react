import React from 'react';

import './css/experiences.css';

function Experiences() {
  return (
      <div className='main'>
        <div className='main-info'>
            <h2 class="text">this is my portofolio</h2>

            <h3 class="text">For the past years in World of Tech I've learned so many things</h3>
            <h4 class="text">Here you have the link to my Github Profile</h4>
        </div>

        <div className='git-hub'>
            <a href="https://github.com/Gzim-Dardhishta" target="_blank">
              <i class="fab fa-github"></i><br/> 
              Github Profile
            </a>
        </div>
      </div>
  );
}

export default Experiences;
