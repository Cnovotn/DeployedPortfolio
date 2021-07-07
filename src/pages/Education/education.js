import React, { Component } from 'react'

import './style.css'
import '../GenCSS/intro-section.css'
import '../GenCSS/main.css'
import Navbar from '../../Navbar/Navbar'
export default class Education extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className='page-container'>
                    <div className="intro-section">
                        <h1 className='section-name'>Education</h1>
                    </div>
                    <div id='education-area'>
                        <div id='college-education' className='single-education'>
                            <div className="flex-row">
                                <h2 className='education-header'>University of Washington </h2>
                                <h2 className="education-dates">Sep 2016 - June 2021</h2>
                            </div>
                            <p className="education-description">
                                I attended the University of Washington from Fall 2016 to Spring 2021 studying Informatics with a custom focus in Software and Back-End Engineering. During the winter of 2019 I took the quarter off to pursue a start-up company as the lead full stack engineer in charge of developing and deploying the first version of our admin and customer facing React platform.  In the summer of 2019 I was accepted into the Informatics program and begin taking Info and CSE courses in the Fall of 2019 for my major. 
                            </p>
                            <div className="courses-completed">

                            </div>
                        </div>
                        <div id='bootcamp-education' className='single-education'>
                            <div className="flex-row">
                                <h2 className='education-header'>Coding Dojo </h2>
                                <h2 className="education-dates">Jun 2018 - Oct 2018</h2>
                            </div>
                            
                            <p className="education-description">
                                During the summer of 2018, I was still awaiting my acceptance into the Information school at the University of Washington. Knowing that I wanted to be in the software industry, I enrolled for this 14 week long coding bootcamp that was able to teach me three full stacks of web development. It not only gave me familiarity with a handful of new coding languages, but taught me the necessary skills for acquiring the ability to learn new languages and frameworks quickly and efficiently.
                            </p>
                        </div>
                        <div id='ski-patrol-education' className='single-education'>
                            <div className="flex-row">
                                <h2 className='education-header'>Ski Patrol </h2>
                                <h2 className="education-dates">Apr 2015 - Current</h2>
                            </div>
                            <p className="education-description">
                                Starting in the spring of my junior year of high school, I got involved with my local mountain of Mount Spokane and began going through my Outdoor Emergency Care (OEC), toboggan, and mountain protocol training. This was a 10 month curriculum that required me to learn first aid training to be administered in harsh mountain conditions with limited supplies. Graduating in January of 2016 allowed me to start patrolling on my own and be "first on" for injured guests on the mountain.  Every year we are required to complete a "refresher" which covers a third of our OEC manual, demonstrating retention of our first aid knowledge. Every other year, we have to get recertified for CPR.    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}