import React, { Component } from 'react'
import './style.css'
import "../GenCSS/main.css"

import Navbar from '../../Navbar/Navbar'
export default class AboutMe extends Component {
    static propTypes = {

    }

    render() {
        const languages = [
            {
                "Name": "Python",
                "Percent" : 90
            },
            {
                "Name": "SQL",
                "Percent" : 90
            },
            {
                "Name": "Java",
                "Percent" : 85
            },
            {
                "Name": "React",
                "Percent" : 80
            },
            {
                "Name": "Javascript",
                "Percent" : 80
            },
            {
                "Name": "Node.JS",
                "Percent" : 80
            },
            {
                "Name": "Typescript",
                "Percent" : 70
            },
            {
                "Name": "GoLang",
                "Percent" : 60
            },
            {
                "Name": "Kotlin",
                "Percent" : 60
            },
            {
                "Name": "C#",
                "Percent" : 60
            },
        ]
        return (
            <div>
                <Navbar/>
                <main className="page-container">
                    <div className="flex-row">
                        <div id="about-left-side" className="centered">
                            <h1>Clayton Novotney</h1>
                        </div>
                        <div id="about-right-side" className="float-right">
                            <h1 className="centered">My Languages</h1>
                            <div id="skills-container">
                                <div className="single-skill flex-row centered">
                                    <div className="single-skill-title">Python</div>
                                    <div className="single-skill-center"></div>
                                    <div className="single-skill-percent">90%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="general-skills" className="flex-row">

                    </div>
                </main>
            </div>
        )
    }
}
