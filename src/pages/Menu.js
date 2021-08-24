import React from 'react';

import MenuItem from '../components/MenuItem'

import '../styles/Menu.css'

const Menu = props => {
  const menuItems = props.menu.map(item => (
    <MenuItem key={item.id} {...item}/>
  ))
  return ( 
    <div className="menu">
      <h1 className="page-title">Menu</h1>
      <ul className="menu-list">
        {menuItems}
      </ul>
    </div>
  );
}
 
export default Menu;
