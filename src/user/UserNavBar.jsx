import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavBar.css'; // Import the CSS file

const UserNavBar = () => {

    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-logo">
          User 
        </Link>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        <Link to="/auth" className="navbar-item">
            auth
          </Link>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/search" className="navbar-item">
            search laptops
          </Link>
          <Link to="/search-shop" className="navbar-item">
            search shops
          </Link>
          <Link to="/filter-laptop" className="navbar-item">
            filter laptops
          </Link>
          <button className="logout" onClick={() => logout()}>logout</button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavBar;