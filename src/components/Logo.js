import React from 'react';
import logo from '../images/logo.png'

import '../styles/Logo.css'
const Logo = () => {
  return (
    <div className="logo-main">
      <img src={logo} alt="logo-main" />
    </div>
  );
}
 
export default Logo;