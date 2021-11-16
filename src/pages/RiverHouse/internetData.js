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
        data: null
    }
    componentWillMount() {
        console.log("Component will mount");
        try{
            console.log("Fetching Todays Internet Data");
            fetch("http://localhost:8080/get_today_pings", {mode:'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({data:result, isLoaded:true})
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                }
            )
        } catch(error) {
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
                <h1 className="text-heading">
                    Line Chart Using Rechart
                </h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={this.state.data} >
                        <CartesianGrid/>
                        <XAxis dataKey="time" 
                            interval={'preserveStartEnd'} 
                            domain={["dataMin", "dataMax + 1"]}/>
                        <YAxis domain={["dataMin", "dataMax + 1"]}></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="download"
                            stroke="black" activeDot={{ r: 1 }} />
                        <Line dataKey="upload"
                            stroke="red" activeDot={{ r: 1 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}