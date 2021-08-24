import React from 'react';

import '../styles/Catering.css'

import salt from '../images/salt_catering.jpg'
import sweet from '../images/sweet_catering.jpg'

const Catering = () => {
  return ( 
    <div className="catering">
      <h1 className="page-title">
        Oferta cateringi
      </h1>
      <h2 className="catering-sub">
        Na słono...
      </h2>
      <p className="catering-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quisquam adipisci voluptate nesciunt eveniet vero repellat, deserunt possimus hic laudantium voluptates reiciendis vel facere id saepe magnam eaque, expedita aliquam.
      </p>
      <div className="catering-img">
        <img src={salt} alt="catering" />
      </div>
      <h2 className="catering-sub">
        Na słodko...
      </h2>
      <p className="catering-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quisquam adipisci voluptate nesciunt eveniet vero repellat, deserunt possimus hic laudantium voluptates reiciendis vel facere id saepe magnam eaque, expedita aliquam.
      </p>
      <div className="catering-img">
        <img src={sweet} alt="catering" />
      </div>
    </div>
  );
}
 
export default Catering;