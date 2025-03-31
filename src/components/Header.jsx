import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Jyoti_Future_Solutions_Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Jyoti Future Solutions Logo" className="header-logo" />
        <h1 className="header-title">Jyoti Future Solutions</h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-menu">
          <li className="nav-item"><NavLink to="/" className={({isActive})=>isActive?'active':'notactive'}>Home</NavLink></li>
          <li className="nav-item"><NavLink to="/courses" className={({isActive})=>isActive?'active':'notactive'}>Course Details</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
