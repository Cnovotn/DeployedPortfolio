import React, { Component } from 'react'
import profilePic from '../../static/profilepics/ClayProfilePic.JPG'
import './style.css'
import '../GenCSS/card.css'
import '../GenCSS/header.css'
import '../GenCSS/main.css'
import '../GenCSS/icons.css'
import Navbar from '../../Navbar/Navbar'

export default class Landing extends Component {
    static propTypes = {

    }
    render() {
        return (
            <div>
                <Navbar />
                <main className="mainContainer">
                    <div id="main-background-section" className="blurImg">
                        <div id="intro-text">
                            <h1 className="introName">Clayton Novotney</h1>
                            <h4 className="introGeneral">Software Engineer</h4>
                            <h4 className="introGeneral">Backend Engineer</h4>
                            <h4 className="introGeneral">Data Engineer</h4>
                            <h4 className="introGeneral">Full Stack Developer</h4>
                        </div>
                    </div>
                    <div id="profile-section" className="container">
                        <div className="centered">
                            <img alt="Linked In Photo Of Me" src={profilePic} id="profile-pic"></img>
                            <h1>Clayton Novotney</h1>
                            <h2>Full-Stack Software Engineer</h2>
                            <p>I am a recent graduate from the University of Washington with a degree in Informatics focused in Software and Backend Engineering. I have been involved with a handful of full stack products that have allowed me to hone in my skills in all technical aspects of web and mobile development.</p>
                            <br></br>
                            <p>From database development and management, CRUD API's, to responsive front-end applications, I have worked and have a knack for development with all aspects of software engineering!</p>
                            <ul className="social-icons">
                                <li><a href="https://github.com/Cnovotn" target="_blank"><i className="fa fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/claytonnovotney/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/claytonnovotney/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="mailto:claytonnovotney@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                            <p className="bold">Let's build something together!</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}