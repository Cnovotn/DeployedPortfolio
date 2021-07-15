import React, { Component } from 'react'

import './style.css'
import "../GenCSS/main.css"
export default class Projects extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div>
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/glimpse/squareMobile.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info dark">GlimpseWearbles</h2>
                                    <div class="tile-secondary-content">
                                        <h2>GlimpseWearbles</h2>
                                        <p>Full Stack Engineer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="large-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/arrivedImages/2-1Homepage.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info dark">Arrived Homes</h2>
                                    <div class="tile-secondary-content">
                                        <h2>Arrived Homes</h2>
                                        <p>Back-End Developer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="large-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/info340/VisualHome.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info">UW - Client Side Development</h2>
                                    <div class="tile-secondary-content">
                                        <h2>UW - Client Side Development</h2>
                                        <p>Front-End & Middleware</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/ronovoImages/homepage.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info">Green Point Real Estate</h2>
                                    <div class="tile-secondary-content">
                                        <h2>Green Point Real Estate</h2>
                                        <p>Full Stack Engineer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/img/smarthome.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info">Personal Project</h2>
                                    <div class="tile-secondary-content">
                                        <h2>Personal Project</h2>
                                        <p>Smart Home Water Sensor</p>
                                        <h4>Hardware: Raspberry-pi (V1)</h4>
                                        <h4>Back-End: MSSQL on AWS</h4>
                                        <h4>Middleware: Node.JS API on AWS API-Gateway</h4>
                                        <h4>Front-End: React/React-Native for mobile and web application</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/img/raspberry-pi.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info">Personal Project</h2>
                                    <div class="tile-secondary-content">
                                        <h2>Personal Project</h2>
                                        <p>Kitchen Bandit</p>
                                        <h4>Hardware: Raspberry-pi</h4>
                                        <h4>Back-End: MySQL on AWS, S3 Buckets for video storage</h4>
                                        <h4>Middleware: Python using AWS rekognition to identify and notify individuals.</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/img/FullNovotneyLogo.png" alt=""/>
                                    </div>
                                    <h2 className="initial-info">Personal Project</h2>
                                    <div class="tile-secondary-content">
                                        <h2>Personal Project</h2>
                                        <p>Kitchen Bandit</p>
                                        <h4>Hardware: Raspberry-pi</h4>
                                        <h4>Back-End: MySQL on AWS, S3 Buckets for video storage</h4>
                                        <h4>Middleware: Python using AWS rekognition to identify and notify individuals.</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}