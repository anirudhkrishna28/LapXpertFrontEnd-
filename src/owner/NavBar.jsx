import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {

  function logout() {
    localStorage.clear();
    window.location.href = '/';
}



  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-logo">
          OWNER
        </Link>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/add-shop" className="navbar-item">
            Add Shop
          </Link>
          <Link to="/add-laptop" className="navbar-item">
            Add Laptop
          </Link>
          <Link to="show-laptops" className="navbar-item">
            show all laptops
          </Link>
          <Link to="shop-info" className="navbar-item">
            shop info
          </Link>
          {//check if user is logged in}
}

        </div>
      </div>
    </nav>
  );
};

export default NavBar;