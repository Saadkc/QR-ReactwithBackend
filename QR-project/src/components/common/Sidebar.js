import React from 'react';
import './../../Style/sidebar.css'
import icon1 from './../../assets/heroicons_user-group-solid.png';
import icon2 from './../../assets/Vector.png';
import icon3 from './../../assets/vector2.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <p className="logo-text">LOGO</p>
        <hr />
      </div>
      <nav>
        <ul>   
          <li>
          <img src={icon2} alt="Logo" />
            <a href="/Analytics"> Analytics</a>
          </li>
          <li>
          <img src={icon1} alt="Logo" />
            <a href="/Users"> Users</a>
          </li>
          <li>
          <img src={icon3} alt="Logo" />
            <a href="/Projects"> Projects</a>
          </li>
     
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
