import React from 'react';
import { NavLink } from 'react-router-dom';


const Contact = () => {
  return ( 
    <div className="contact-layout layouts">
      <p className="layout-content">
        Skontaktuj się z nami...
      </p>
      <NavLink to="/contact" className="layout-button">
        Sprawdź kontakt!
      </NavLink>
    </div>
  );
}
 
export default Contact;