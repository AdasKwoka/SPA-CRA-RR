import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLayout = () => {
  return ( 
    <div className="menu-layout layouts">
      <p className="layout-content">
        Sprawdź nasze specjały...
      </p>
      <NavLink to="/menu" className="layout-button">
        Zobacz menu!
      </NavLink>
    </div>
  );
}
 
export default MenuLayout;