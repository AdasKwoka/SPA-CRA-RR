import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Navigation from './Navigation';
import Start from '../pages/Start';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Catering from '../pages/Catering'
import Gallery from '../pages/Gallery';
import Meal from '../pages/Meal'
import Footer from './Footer';


import '../styles/App.css'
import '../styles/Layouts.css'




class App extends Component {
  state = {
    menu: [],
  }
  componentDidMount() {
    fetch("data.json")
     .then(response => response.json())
     .then(data => this.setState({ 
       menu: data.menu,
      }))
     .catch(err => console.log(err))
  }
  render() { 
    return (
      <Router basename={process.env.PUBLIC_URL}>   
      <Navigation/>
      <div className="wrapper">         
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/menu" exact component={() => <Menu menu={this.state.menu}/>} />
            <Route path="/menu/:id" component={(info) => <Meal info={info} menu={this.state.menu}/>} />
            <Route path="/contact" component={Contact} />
            <Route path="/catering" component={Catering} />
            <Route path="/gallery" component={() => <Gallery />}/>
            <Route component={() => <Redirect to="/" />} />
          </Switch>   
      <Footer/>
      </div>
      </Router>
    );
  }
}
 
export default App;
