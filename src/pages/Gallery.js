import React, { Component } from 'react';

import '../styles/Gallery.css'

import food_0 from '../images/food_0.jpg';
import food_1 from '../images/food_1.jpg';
import food_2 from '../images/food_2.jpg';

import event_0 from '../images/event_0.jpg'
import event_1 from '../images/event_1.jpg'
import event_2 from '../images/event_2.jpg'


class Gallery extends Component {
  state = { 
    active_photo_food: food_0,
    active_photo_event: event_0
  }
  photos_food = [food_0, food_1, food_2]
  photos_event = [event_0, event_1, event_2]
  index_food = 0
  index_event = 0

  handleChangeIndexPhoto = (text) => {
    if(text === "back_food") {
      if(this.index_food === 0) {
        this.index_food = this.photos_food.length - 1;
      }else {
        this.index_food--;
      }
    }else if(text === "next_food") {
      if(this.index_food === this.photos_food.length - 1) {
        this.index_food = 0;
      }else {
        this.index_food++;
      }
    }else if(text === "back_event") {
      if(this.index_event === 0) {
        this.index_event = this.photos_event.length - 1;
      }else {
        this.index_event--;
      }
    }else if(text === "next_event") {
      if(this.index_event === this.photos_event.length - 1) {
        this.index_event = 0;
      }else {
        this.index_event++;
      }
    }
    this.setState({ 
     active_photo_food : this.photos_food[this.index_food],
     active_photo_event: this.photos_event[this.index_event]
    });
  }
  render() {
    return ( 
      <div className="gallery">
        <h1 className="page-title">
          Nasze potrawy...
        </h1>
        <div className="gallery-images">
          <span className="back" onClick={() => this.handleChangeIndexPhoto("back_food")}>{'<'}</span>
          <img src={this.state.active_photo_food} alt="food" />
          <span className="next" onClick={() => this.handleChangeIndexPhoto("next_food")}>{'>'}</span>
        </div>
        <h1 className="page-title">
          Imprezy okolicznościowe...
        </h1>
        <div className="gallery-images">
          <span className="back" onClick={() => this.handleChangeIndexPhoto("back_event")}>{'<'}</span>
          <img src={this.state.active_photo_event} alt="events" />
          <span className="next" onClick={() => this.handleChangeIndexPhoto("next_event")}>{'>'}</span>
        </div>
      </div>
  );
  }
}
 
export default Gallery;