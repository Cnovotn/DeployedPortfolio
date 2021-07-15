import React, { Component } from 'react'
import './style.css'
import "../GenCSS/main.css"
import SkillsSection from "../SkillSection/SkillsSection"

import Navbar from '../../Navbar/Navbar'
import SkillsCards from '../SkillSection/SkillsCards'
import Footer from '../../Footer/Footer'
import Personal from '../Personal/Personal'
export default class AboutMe extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar/>
                <main className="page-container">
                    <div className="intro-section">
                        <h1 className='section-name'>About Me</h1>
                        <hr></hr>
                    </div>
                    <Personal/>
                    <SkillsCards/>
                    <SkillsSection/>
                </main>
                <Footer/>
            </div>
        )
    }
}
