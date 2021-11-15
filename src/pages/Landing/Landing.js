import React, { Component } from 'react'
import profilePic from '../../static/profilepics/ClayProfilePic.JPG'
import './style.css'
import '../GenCSS/card.css'
import '../GenCSS/header.css'
import '../GenCSS/main.css'
import '../GenCSS/icons.css'
import Navbar from '../../Navbar/Navbar'
import SkillsCards from "../SkillSection/SkillsCards"
import SkillsSection from "../SkillSection/SkillsSection"
import WorkSection from "../WorkExperience/WorkSection"
import Projects from "../Projects/projects"
import ContactForm from '../../Contact/contactForm'
import Footer from '../../Footer/Footer'
import Pdf from '../../static/resumes/July2021ClayNovoResume.pdf'
import FadeIn from 'react-fade-in';
import Load from '../../LoadAnimation/load'

export default class Landing extends Component {
    static propTypes = {

    }
    render() {
        return (
            <div>
                <Load/>
                <FadeIn delay={2100}>
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
                        <div id="profile-section" className="container slanted-div padded-top">
                            <div className="centered eighty">
                                <img alt="Linked In Photo Of Me" src={profilePic} id="profile-pic"></img>
                                <h1>Clayton Novotney</h1>
                                <hr></hr>
                                <h2>Full-Stack Software Engineer</h2>
                                <p>I am a recent graduate from the University of Washington with a degree in Informatics focused in Software and Backend Engineering. I have been involved with a handful of full stack products that have allowed me to hone in my skills in all technical aspects of web and mobile development.</p>
                                <br></br>
                                <p>From database development and management, CRUD API's, to responsive front-end applications, I have worked and have a knack for development with all aspects of software engineering!</p>
                                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                                    <button className="resume-button" trailingIcon="picture_as_pdf" label="Resume">
                                        View My Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                        <section id="skills-section" className="container slanted-div-alt centered padded-top">
                            <div className="eighty">
                                <h1>What I Am About</h1>
                                <hr></hr>
                                <p>With all of the start-ups I have been apart of, projects I have worked on at school and on my own, I have been involved in all ends of software engineering/application development and am very understanding of the procedures that need to be followed to deploy an efficient product.</p>
                                <SkillsCards/>
                            </div>
                            <div className="eighty">
                                <p>My Knack for backend development has become apparent with my favorite (and best) languages being Python, Node.JS, and SQL.</p>
                                <p>I have dipped my toes into a lot of different languages and frameworks over the years of college classes, portfolio projects, start up involvement, and personal ventures. While I am not a master in one, I am very knowledgable in many, and most importantly, have acquired the ability to learn knew things quickly and effectively.</p>
                            </div>
                            <br/>
                            <SkillsSection/>
                        </section>
                        <section id="projects-section" className="container slanted-div padded-top">
                            <div className="eighty">
                                <h1 className="centered">My Favorite Projects</h1>
                                <hr></hr>
                                <Projects/>
                            </div>
                        </section>
                        <section id="contact-section" className="container slanted-div-alt centered padded-top">
                            <div className="eighty">
                                <h1>Get In Touch</h1>
                                <hr></hr>
                                <ContactForm/>
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </FadeIn>
            </div>
        )
    }
}