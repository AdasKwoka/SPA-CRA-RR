import React from 'react';
import { NavLink } from 'react-router-dom';


const GalleryLayout = () => {
  return ( 
    <div className="gallery-layout layouts">
      <p className="layout-content">
        Zobacz naszą galerię...
      </p>
      <NavLink to="/gallery" className="layout-button">
        Zobacz teraz!
      </NavLink>
    </div>
  );
}
 
export default GalleryLayout;