import React, { Component } from 'react'
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

export default class InternetData extends Component {
    state = {
        isLoaded: false,
        error: null,
        data: null,
        dates: null,
        selectedOptions: null
    }
    componentWillMount() {
        console.log("Component will mount");
        try{
            console.log("Fetching Todays Internet Data");
            fetch("http://localhost:8080/get_dates", {mode:'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({dates:result, isLoaded:false})
                },
                (error) => {
                    this.setState({error: error});
                }
            )
        } catch(error) {
            this.setState({error: error});
            console.log(error);
        }
        try{
            console.log("Fetching Todays Internet Data");
            fetch("http://localhost:8080/get_today_pings", {mode:'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({data:result, isLoaded:true})
                },
                (error) => {
                    this.setState({error: error});
                }
            )
        } catch(error) {
            this.setState({error: error});
            console.log(error);
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        console.log("updating the component");
    }
    render() {
        return (
            <div>
                <h1>Data Vis for Internet Testing</h1>
                <div>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                </div>
                <label for="dates">Choose a car:</label>
                <select name="dates" id="dates_available">
                </select>
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
                        <Line dataKey="download"
                            stroke="black" 
                            dot={false}
                            />
                        <Line dataKey="upload"
                            stroke="blue" 
                            dot={false}
                            />
                        <Line dataKey="ping"
                            stroke="red" 
                            dot={false}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}