import React, { Component, useEffect, useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import './style.css'
const API_BASE_URL = "http://10.0.0.150:8080/";
// const API_BASE_URL = "http://localhost:8080/";

export default class InternetData extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: null,
            dates: null,
            selectedDate: null,
            selectedOptions: {download:true, upload:true, ping:true},
            selectedOption: null,
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }
    componentWillMount() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.setState({selectedDate: date}, () => this.populateDateSpecific());
        this.getAvailableDates();
    }
    componentDidMount() {
        // this.setState({selectedOptions:{"download":true, "upload":true, "ping":true}})
    }
    componentDidUpdate() {
        console.log("updating the component");
    }
    setSelectedOption(value) {
        this.setState({selectedOption: value});
    }

    getAvailableDates() {
        try {
            fetch(API_BASE_URL+'get_dates/', {mode: 'cors'})
            .then(response => response.json())
            .then(return_data => {
                let justDates = [];
                for(var i = 0; i< return_data.length; i++) {
                    justDates.push(return_data[i]['date']);
                }
                this.setState({ dates: justDates});
            })
            .catch((e) => {
                console.log(e)
            })
        } catch(error) {
            this.setState({error: error});
            console.log(error);
        }
    }

    populateDateSpecific = () => {
        console.log("populateDateSpecific");
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "date": this.state.selectedDate })
        };
        try {
            fetch(API_BASE_URL+'get_pings/', requestOptions)
            .then(response => response.json())
            .then(return_data => this.setState({ data: return_data, isLoaded: true}))
            .catch((e) => {
                console.log(e)
            })
        } catch(error) {
            this.setState({error: error});
            console.log(error);
        }
    }

    handleDateChange(e) {
        console.log("handlingChange");
        this.setState({selectedDate: e.target.value}, () =>{
            this.populateDateSpecific();
        });
        e.preventDefault();
    }

    handleOptionChange(e) {
        console.log(e.target.value);
        if(e.target.value == 'download') {
            console.log(!this.state.selectedOptions.download);
            this.setState(({ download }) => ({ download: !download }));
            // this.setState(prevState => ({
            //     download: !prevState.download
            //   }));
              
        }
        e.preventDefault();
    }
    render() {
        const state = this.state;
        if (!state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <div>
                    <h1>Data Vis for Internet Testing</h1>
                    <div id="internet_options_area">
                    <div id="data-input-toggles">
                        <button className="river-option-button" value='download' onClick={this.handleOptionChange.bind(this)}>{state.selectedOptions.upload ? "Hide Download": "Show Download"}</button>
                        <button className="river-option-button" value='upload' onClick={this.handleOptionChange.bind(this)}>Show Upload</button>
                        <button className="river-option-button" value='ping' onClick={this.handleOptionChange.bind(this)}>Show Ping</button>
                    </div>
                        <label for="dates">Choose a Date</label>
                        <select name="dates" id="dates_available" value={this.state.selectedDate} onChange={this.handleDateChange}>
                        {state.dates.map(date => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                            ))}
                        </select>
                        <p>Current Date: {state.selectedDate}</p>
                    </div>
                    <ResponsiveContainer width="100%" aspect={2.5}>
                        <LineChart data={this.state.data} title="Tellll">
                            <CartesianGrid/>
                            <XAxis dataKey="time" 
                                label="Time"
                                domain={['00:00:00', '23:59:00']}
                                />
                        
                            <YAxis domain={['dataMin', 'dataMax']}></YAxis>
                            <Legend />
                            <Tooltip />
                            {state.selectedOptions.download ? 
                                <Line dataKey="download"
                                    stroke="black" 
                                    dot={false}
                                    /> : null}
                            {state.selectedOptions.upload ?
                                <Line dataKey="upload"
                                    stroke="blue" 
                                    dot={false}
                                    /> : null}
                            {state.selectedOptions.ping ?
                                <Line dataKey="ping"
                                stroke="red" 
                                dot={false}
                                /> : null}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )
        }
    }
}