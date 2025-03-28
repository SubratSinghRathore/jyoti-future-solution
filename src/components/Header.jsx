import React from 'react';
import { Link } from 'react-router-dom';
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
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/courses">Course Details</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
