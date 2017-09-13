const css = require('../styles/app.scss');

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import NavBar from './navbar';
import Preloader from './preloader';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000);
    console.log('didMount');
  }

  render() {
    console.log('render');
    console.log(this.state);

    let options = {
      lines: 13,
      length: 10,
      width: 10,
      radius: 30,
      scale: 1.50,
      corners: 1,
      color: '#1ba0cd',
      opacity: 0.2,
      rotate: 0,
      direction: 1,
      speed: 2,
      trail: 60,
      fps: 60,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      shadow: false,
      hwaccel: false,
      position: 'absolute'
    };

    return (
      <Router>
        {this.state.isLoading ? <Preloader/>
          :
          <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        }
      </Router>
    );
  }
}