import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import './style.css'
import Footer from '../../Footer/Footer'
export default class WorkSection extends Component {
    static propTypes = {

    }
    singleWorkExperience = {
        "company_name": "Vibe Inc.",
        "company_website" : "https://vibe.us",
        "job_title": "Account & Project Manager",
        "location": "Bellevue, WA",
        "start_date": "June 2019",
        "end_date": "March 2020",
        "description": "Description of this job at Vibe",
        "key_points" : ["key point one", "key point two", "key point three"]
    }
    workExperiences = [
        {
            "company_name": "Vibe Inc.",
            "company_website" : "https://vibe.us",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Technical Support Specialits",
            "location": "Remote",
            "start_date": "September 2020",
            "end_date": "January 2021",
            "description": "Description of this job at Vibe",
            "key_points" : ["key point one", "key point two", "key point three"]
        },
        {
            "company_name": "Vibe Inc.",
            "company_website" : "https://vibe.us",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Account & Project Manager",
            "location": "Bellevue, WA",
            "start_date": "June 2019",
            "end_date": "March 2020",
            "description": "Description of this job at Vibe",
            "key_points" : ["key point one", "key point two", "key point three"]
        },
        {
            "company_name": "Glimpsewearables",
            "company_website" : "https://glimpsewearables.com",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Full Stack Software Engineer",
            "location": "Seattle, WA",
            "start_date": "June 2018",
            "end_date": "September 2019",
            "description": "Description of this job at Glimpsewearables",
            "key_points" : ["key point one", "key point two", "key point three"]
        },


    ]
    createWorkExperienceSections() {
        console.log("Creating work experiences")
    }
    createSingleWorkExperience(workData) {
        console.log("Creating a single work experience")
        console.log(workData["company_name"])
        const card = React.createElement('div', {class: "blog-card"},
            React.createElement('div',{class: "meta"},
                React.createElement("div", {class:"photo"}),
                React.createElement('ul', {class:"details"},
                    [
                        React.createElement('li', { class: 'author' }, 'VibeTest'),
                        React.createElement('li', { class: 'date' }, 'Testdata')
                    ]
                ),
                React.createElement("div", {class:"description"}, 
                    React.createContext('h1', {}, "Testing Company Tame"),
                    React.createContext('h2', {}, "Testing Position"),
                    React.createContext('', {}, "Testing Decription")
                ),
            )
        );
        return card
    }

    // Functions that will be called upon load of the page
    componentWillMount(){
        console.log("Is the component going to mount?")
    }
    componentDidMount(){
        console.log("Component Mounted")
        let cardToAdd = this.createSingleWorkExperience(this.singleWorkExperience)
        console.log(cardToAdd)
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="page-container">
                    <div className="intro-section">
                        <h1 className='section-name'>Work Experience</h1>
                        <p>Over the years I have worked with a number of different start ups and established companies. I have worked in many different positions, allowing me to understand the
                            ins and outs of all aspects of product development, management, maintenance, sales, and customer relations.
                        </p>
                    </div>
                    <div class="blog-card alt">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/companypics/arrived_homes.png)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="https://arrivedhomes.com/" target="_blank">ArrivedHomes.com</a></li>
                            <li class="date">Jan 2021 - Jun 2021</li>
                            <li class="tags">Python/Flask</li>
                            <li class="tags">MS SQL</li>
                            <li class="tags">AWS</li>
                        </ul>
                        </div>
                        <div class="description">
                            <h1>Backend Software Engineer</h1>
                            <h2>Arrived Homes - 6 Months</h2>
                            <p>Helped plan, develop and deploy a full-stack internal tool used for automating the underwriting and acquisition process. </p>
                            <p>Developed and deployed MSSQL database hosted on AWS RDS storing MLS data collected from web scrapers and public API’s.</p>
                            <p>Developed and deployed a Python/Flask API serving information stored in our database, while also completing calculations about each property.</p>
                            <p class="read-more">
                                <a href="https://arrived-homes-capstone.github.io/landingpage/" target="_blank">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/341b8ec179b82a06d54cd60319973e10fcec88cb/src/static/companypics/vibe-board.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="https://vibe.us/">Vibe.us</a></li>
                            <li class="date">Sep 2020 - Jan 2021</li>
                            <li class="tags">Python/Flask</li>
                            <li class="tags">MS SQL</li>
                            <li class="tags">AWS</li>
                        </ul>
                        </div>
                        <div class="description">
                            <h1>Technical Support Engineer</h1>
                            <h2>Vibe Inc - 3 Months</h2>
                            <p>Communicated with customers experiencing technical issues with their Vibe board via email and video calls.</p>
                            <p>Collected logs from customer devices to determine cause for chief complaint.</p>
                            <p>Communicated with product and engineering team about errors/bugs with systems causing issues with devices.</p>
                            <p>Consulted with the engineering team to determine possible solutions.</p>
                            <p class="read-more">
                                <a href="https://knowledge.vibe.us/" target="_blank">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div class="blog-card alt">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/341b8ec179b82a06d54cd60319973e10fcec88cb/src/static/companypics/vibe-board3.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="https://vibe.us/">Vibe.us</a></li>
                            <li class="date">Jun 2019 - March 2020</li>
                            <li class="tags">Hubspot</li>
                            <li class="tags">React/Node.JS</li>
                            <li class="tags">GoLang</li>
                            <li class="tags">MSSQL</li>
                            <li class="tags">AWS</li>
                        </ul>
                        </div>
                        <div class="description">
                            <h1>Account & Project Manager</h1>
                            <h2>Vibe Inc - 9 Months</h2>
                            <p>Monitored and analyzed customers usage of our product.</p>
                            <p>Liaison between customers and product development teams to produce new software features available on our hardware, mobile and web applications.</p>
                            <p>Helped customers through email, phone, screen-shares, online presentations and in-person meetings to maximize efficiency with our product.</p>
                            <p class="read-more">
                                <a href="https://vibe.us/customer/" target="_blank">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/companypics/glimpse.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="https://www.crunchbase.com/organization/glimpse-wearables">Funding Page</a></li>
                            <li class="date">Jun 2018 - Sep 2019</li>
                            <li class="tags">Python/Django</li>
                            <li class="tags">React/Node.JS</li>
                            <li class="tags">MS SQL</li>
                            <li class="tags">RaspberryPi-Linux</li>
                            <li class="tags">AWS</li>
                        </ul>
                        </div>
                        <div class="description">
                            <h1>Full Stack Developer</h1>
                            <h2>Glimpsewearables - 1.25 Years</h2>
                            <p>Built and deployed various full stack services, including websites, API’s, databases, and the beginning stages of machine learning processes.</p>
                            <p>Worked with and managed a team of 5 developers responsible for developing, deploying, maintaining and updating previously mentioned services.</p>
                            <p>Member of the founding team that helped lead direction of the company.</p>
                        </div>
                    </div>
                    <div class="blog-card alt">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(https://raw.githubusercontent.com/Cnovotn/DeployedPortfolio/master/src/static/companypics/NationalSkiPatrol.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="https://nspserves.org/">National Ski Patrol</a></li>
                            <li class="date">Apr 2015 - Current</li>
                            <li class="tags">CPR Certified</li>
                            <li class="tags">Outdoor Emergency Care (OEC) Certified</li>
                            <li class="tags">Toboggan Certified</li>
                        </ul>
                        </div>
                        <div class="description">
                            <h1>Alpine Patroller</h1>
                            <h2>National Ski Patrol - 6+ Years</h2>
                            <p>I completed 10-month Outdoor Emergency Care, CPR and toboggan courses to get certified in each respect. Each year I participate in a OEC refresher and every other year I get re-certified for CPR.</p>
                            <p>While patrolling, I provided customer service to all guests on the mountain, ranging from medical emergencies to conducting search and rescues.</p>
                            <p class="read-more">
                                <a href="https://nspserves.org/about-the-organization/" target="_blank">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
