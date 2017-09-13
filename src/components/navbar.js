import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PageArrow from './pageArrow';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: false,
      classNameBtn: "hamburger hamburger--spin hidden"
    }
  }

  toggleClass() {
    this.setState({ toggleClass: !this.state.toggleClass });
  }

  componentDidMount() {
    console.log('DID MOUNT NAV');
    setTimeout(() => {
      this.setState({ classNameBtn: "hamburger hamburger--spin" });
    }, 500);
  }

  render() {
    console.log(this.state);
    let classNameBtn = this.state.classNameBtn + (!this.state.toggleClass ? "" : " active");
    let classNameNav = "navigation" + (!this.state.toggleClass ? "" : " active");
    return (
      <div className="navbar">
        <button className={classNameBtn} type="button" onClick={this.toggleClass.bind(this)}>
          <div className="inner">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </button>
        <div className={classNameNav}>
          <ul>
            <li onClick={this.toggleClass.bind(this)}><NavLink exact to="/">home</NavLink></li>
            <li onClick={this.toggleClass.bind(this)}><NavLink to="/about">about</NavLink></li>
            <li onClick={this.toggleClass.bind(this)}><NavLink to="/projects">projects</NavLink></li>
            <li onClick={this.toggleClass.bind(this)}><NavLink to="/contact">contact</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
};

