import React, { Component } from 'react'

import './style.css'
import "../GenCSS/main.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
export default class RiverHouse extends Component {
    static propTypes = {
    }
    render() {
        return (
            <div>
                <Navbar />
                <div id="projects-page" className="eighty">
                    <h1 className="section-name">River stuff</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}