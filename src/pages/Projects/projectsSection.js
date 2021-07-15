import React, { Component } from 'react'

import './style.css'
import "../GenCSS/main.css"
import Navbar from '../../Navbar/Navbar'
import Projects from "./projects"
export default class ProjectsSection extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="projects-page" className="eighty">
                    <h1 className="section-name">My Projects</h1>
                    <Projects/>
                </div>
            </div>
        )
    }
}