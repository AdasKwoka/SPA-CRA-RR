import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css'
import logo from '../images/logo.png'

class Navigation extends Component {
  state = { 
    navClass: "disabled",
    barsClass: "open"
  }

  handleBarsClick = () => {
    console.log('click');
    if(this.state.navClass === "disabled" && this.state.barsClass === "open") {
      this.setState({ 
        navClass: "active",
        barsClass:  "close"
      });
    } else if(this.state.navClass === "active" && this.state.barsClass === "close") {
      this.setState({ 
        navClass: "disabled",
        barsClass:  "open"
      });
    }
  }

  handleNavClick = () => {
    this.setState({ 
      navClass: "disabled",
      barsClass:  "open"
    })
  }
  render() { 
    return ( 
      <div className="main-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`bars ${this.state.barsClass}`} onClick={this.handleBarsClick}></div>
        <h1 className="name">O'szamto</h1>
        <nav className={this.state.navClass}>
          <ul>
            <li>
                <NavLink to="/" exact onClick={this.handleNavClick}>Start</NavLink>  
            </li>
            <li>
                <NavLink to="/menu" onClick={this.handleNavClick}>Menu</NavLink>  
            </li>
            <li>
                <NavLink to="/contact" onClick={this.handleNavClick}>Kontakt</NavLink>  
            </li>
            <li>
                <NavLink to="/gallery" onClick={this.handleNavClick}>Galeria</NavLink>  
            </li>
            <li>
                <NavLink to="/catering" onClick={this.handleNavClick}>Catering</NavLink>  
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default Navigation;
