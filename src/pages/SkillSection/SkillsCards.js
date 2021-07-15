import React, { Component } from 'react'
import './SkillsStyle.css'
import '../GenCSS/main.css'

export default class SkillsCards extends Component {

    render() {
        return(
            <section>
                <div className="skills-container">
                    <div className="contain-skill">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                                    <h3>Design</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>Successful software starts in the planning and design stage. I love helping determine a roadmap for which features take priority via sprint planning, KanBan boards, and high level team discussions are the best way to spend a monday.</p>
                                    {/* <p>Looking at the high level needs of an application, roadmaps of what needs to get done, and how it needs to get done are a necessity for avoiding problems down the road. Sprint planning, KanBan boards and DevOps portals</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                                    <h3>Develop</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>Fueled by RedBull, inspired by Stack Overflow and filled with the desire to get the code to compile for deployment. I have the itch and ability to code what needs to get done, or learn how to do it, by the deadlines we want to reach.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                                    <h3>Deploy</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>The cloud is the future and I love learning about the hot new tools on the market. Setting up databases on RDS, connecting them to custom built API's, serving that connection to front-end applications, I can get it customer facing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}