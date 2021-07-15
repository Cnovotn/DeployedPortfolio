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
                <div className="eighty">
                    <Projects/>
                </div>
            </div>
        )
    }
}