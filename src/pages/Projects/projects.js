import React, { Component } from 'react'

import './style.css'
import "../GenCSS/main.css"
import Navbar from '../../Navbar/Navbar'
export default class Projects extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="page-container">
                    <div className="intro-section">
                        <h1 className='section-name'>Projects</h1>
                    </div>
                </div>
            </div>
        )
    }
}