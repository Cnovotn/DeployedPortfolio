import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css'

export default class Navbar extends Component {
  
    render() {
      return (
        <div className="nav">
          <input type="checkbox" id="nav-check"/>
          <div className="nav-header">
            <div className="nav-title">
            <Link to="./">
              <button type="button" className="header-button">Clay Novotney</button>
            </Link>
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <Link to="/DeployedPortfolio/aboutme">
              <button type="button" className="header-button">About Me</button>
            </Link>
            <Link to="/DeployedPortfolio/projects">
              <button type="button" className="header-button">Projects</button>
            </Link>
            <Link to="/DeployedPortfolio/work">
              <button type="button" className="header-button">Experience</button>
            </Link>
            <Link to="/DeployedPortfolio/education">
              <button type="button" className="header-button">Education</button>
            </Link>
          </div>
        </div>
      )
    }
}