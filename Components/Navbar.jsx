import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/ico-dh.png" alt="Logo"/>
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favorites">Favorites</Link></li> 
        <button onClick={toggleTheme}>
          <img src="/images/ico-moon_change_theme.png" alt="Change Theme"/>
        </button>
      </ul>
    </div>   
  );
};

export default Navbar;


