import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('userToken');

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
  };

  const links = [
    { path: '/home', title: 'Home' },
    { path: '/signup', title: 'Signup' },
    { path: '/login', title: isLoggedIn ? 'Logout' : 'Login' }, // Conditional label for login/logout link
    { path: '/product', title: 'Product' },
  ];

  return (
    <div className="navbar">
      <div className='navbar-1'>
        <p>Help</p>
        <br />
        <p>Orders & Returns</p>
        <br />
        <p>Hi, John</p>
        <br />
      </div>
      <div className='navbar-2'>
        <div className='heading'>
          <h1>ECOMMERCE</h1>
        </div>
        <div className='link-tag'>
          {links.map((item) => (
            <Link key={item.path} to={item.path} className='title' onClick={item.title === 'Logout' ? handleLogout : null}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className='icons-img'>
          <FaSearch className='icon-1' style={{ color: "#333333" }} />
          <FaShoppingCart className='icon-2' />
        </div>
      </div>
      <div className='navbar-3'>
        <div>
          <p>&lt;</p>
          <p>Get 10% Off on business sign up</p>
          <p>&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
