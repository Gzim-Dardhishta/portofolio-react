import React from 'react';
import html from './img/html.png';
import css from './img/css.png';
import javascript from './img/javascript.png';
import python from './img/python.png';
import java from './img/java.png';
import sql from './img/sql.png';
import react from './img/react.png'

import './css/skills.css'

function Skills() {
  return (
    <div className='container'>
        <div className="languages">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={javascript} className='javascript' style={{flexBasis: '160px'}} alt="" />
            <img src={react} className='react' style={{flexBasis: '300px'}} alt="" /><br />
            
        </div>
        <div className='languages-1'>
            <img src={java} alt="" />
            <img src={python} alt="" />
            <img src={sql} alt="" />
        </div>
    </div>
  );
}

export default Skills;
