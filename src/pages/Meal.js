import React from 'react';

import '../styles/Meal.css'

import img1 from '../images/menu_item1.jpg'

const Meal = props => {
  const item = props.menu.filter(item => item.name === props.info.match.params.id)[0];
  
  return ( 
    <div className="meal-wrap">
      <h1 className="page-title">{props.info.match.params.id}</h1>
      <p className="meal-description">{item.content}</p>
      <div className="meal-img">
        <img src={img1} alt="meal" />
      </div>
    </div>
  );
}
 
export default Meal;