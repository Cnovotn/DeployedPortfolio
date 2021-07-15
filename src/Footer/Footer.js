import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Footer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
  
    render() {
      return (
        <footer  className="site-footer centered">
            <h4>Created By Clayton Novotney 2021</h4>
            <ul className="social-icons">
                <li><a href="https://github.com/Cnovotn" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/claytonnovotney/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/claytonnovotney/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li><a href="mailto:claytonnovotney@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
            <p className="bold">Let's build something together!</p>
        </footer>
      )
    }
}