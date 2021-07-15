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
                {/* <div className="page-container">
                    <div className="intro-section">
                        <h1 className='section-name'>Projects</h1>
                        <p>
                            Glimpse,
                            Arrived Homes,
                            Nba Magnet Board,
                            Mock Shazam,
                            Ronovo,
                            Big Beertha,
                            Water Temperature Sensor,

                        </p>
                    </div>
                </div> */}
                <div className="page-container">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="small-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/ronovoImages/homepage.png" alt=""/>
                                    </div>
                                    <div class="tile-secondary-content">
                                        <h2>Green Point Real Estate</h2>
                                        <p>Backend Developer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="large-tile tile tile-case">
                                <a href="#">
                                    <div className="tile-primary-content">
                                        <img className="tile-image" src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/arrivedImages/ViewPage.png" alt=""/>
                                    </div>
                                    <div class="tile-secondary-content">
                                        <h2>Green Point Real Estate</h2>
                                        <p>Backend Developer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div className="grid-row">
                            <div className="small-tile tile"></div>
                            <div className="small-tile tile"></div>
                            <div className="small-tile tile"></div>
                        </div>
                        <div className="grid-row">
                            <div className="large-tile tile"></div>
                            <div className="small-tile tile"></div>
                        </div> */}
                        <div>
                            {/* <ul class="masonry-list">
                            <li class="tile-case small-tile">
                                <a href="#">
                                    <div class="tile-primary-content">
                                        <img src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/ronovoImages/homepage.png" alt=""/>
                                    </div>
                                    <div class="tile-secondary-content">
                                        <h2>Green Point Real Estate</h2>
                                        <p>Backend Developer</p>
                                        <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                    </div>
                                </a>
                            </li>
                            <li class="tile-case large-tile">
                                <a href="#">
                                <div class="tile-primary-content">
                                    <img src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/arrivedImages/ViewPage.png" alt=""/>
                                </div>
                                <div class="tile-secondary-content">
                                    <h2>Green Point Real Estate</h2>
                                    <p>Backend Developer</p>
                                    <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                </div>
                                </a>
                            </li>
                            <li class="tile-case small-tile">
                                <a href="#">
                                <div class="tile-primary-content">
                                    <img src="https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/ronovoImages/homepage.png" alt=""/>
                                </div>
                                <div class="tile-secondary-content">
                                    <h2>Green Point Real Estate</h2>
                                    <p>Backend Developer</p>
                                    <h3>A real estate management platform for investors, current tenents, possible tenents, and company employees.</h3>
                                </div>
                                </a>
                            </li>
                        </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}