import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = item => {
  return ( 
    <li className="menu-item">
      <h2 className="title-item">{item.name}</h2>
      <p className="content-item">{item.content}</p>
      <p className="price-item">{(item.price).toFixed(2)} zł</p>
      <NavLink to={`/menu/${item.name}`} className="button-item">O produkcie</NavLink>
    </li>
  );
}
 
export default MenuItem;