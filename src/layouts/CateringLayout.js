import React from 'react';
import { NavLink } from 'react-router-dom';


const CateringLayout = () => {
  return ( 
    <div className="catering-layout layouts">
      <p className="layout-content">
        Wypróbuj naszych usług...
      </p>
      <NavLink to="/catering" className="layout-button">
        Sprawdź ofertę!
      </NavLink>
    </div>
  );
}
 
export default CateringLayout;