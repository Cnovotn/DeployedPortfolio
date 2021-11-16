import React, { Component } from 'react'
import './style.css'
import "../GenCSS/main.css"
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import InternetData from './internetData'
export default class RiverHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    componentDidMount() {
        console.log("Mounting the page for the river page");
    }
    componentDidUpdate() {
        console.log("updating the component");
    }
    populateInternetData() {
        console.log("Populating the internet testing data");
    }
    populateWaterTempData() {
        console.log("Getting the water temperature data");
    }
    populateHouseHeaterTemp() {
        console.log("Getting the house heater shit.");
    }
    getCameraInformation() {
        console.log("Probably redirecting to the external page");
    }
    render() {
        return (
            <div>
                <Navbar />
                <div id="river-house-page" className="eighty">
                    <h1 className="section-name">River House</h1>
                    <div id="river-options">
                        <button id="internet-data-button" className="river-option-button" onClick={this.populateInternetData}>Internet Testing</button>
                        <button id="water-temp-button" className="river-option-button" onClick={this.populateWaterTempData}>Water Temp</button>
                        <button id="house-heater-button" className="river-option-button" onClick={this.populateHouseHeaterTemp}>House Heater</button>
                        <button id="cameras-button" className="river-option-button" onClick={this.getCameraInformation}>Check The View</button>
                    </div>
                    <div id="river-house-content">
                        <InternetData/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}