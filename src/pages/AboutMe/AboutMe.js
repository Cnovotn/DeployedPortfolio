import React, { Component } from 'react'
import './style.css'
import "../GenCSS/main.css"
import SkillsSection from "../SkillSection/SkillsSection"

import Navbar from '../../Navbar/Navbar'
import SkillsCards from '../SkillSection/SkillsCards'

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
                    <div className="intro-section">
                        <h1 className='section-name'>About Me</h1>
                        <hr></hr>
                    </div>
                    <SkillsSection/>
                </main>
            </div>
        )
    }
}
