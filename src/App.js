import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/AboutMe/AboutMe'
import Education from './pages/Education/education'
import WorkSection from './pages/WorkExperience/WorkSection'
import FadeIn from 'react-fade-in';
import Load from './LoadAnimation/load'
import ProjectsSection from './pages/Projects/projectsSection';
import RiverHouse from './pages/RiverHouse/riverHouse';

function App() {
  return (
    <Router>
      <div className="App">
          <Load/>
          <FadeIn delay={2100}>
            <Switch>
              <Route path="/DeployedPortfolio/riverhouse" exact component={RiverHouse}></Route>
              <Route path="/DeployedPortfolio/aboutme" exact component={AboutMe}></Route>
              <Route path="/DeployedPortfolio/education" exact component={Education}></Route>
              <Route path="/DeployedPortfolio/projects" exact component={ProjectsSection}></Route>
              <Route path="/DeployedPortfolio/work" exact component={WorkSection}></Route>
              <Route path="/DeployedPortfolio/" exact component={Landing}></Route>
            </Switch>
          </FadeIn>
        </div>
    </Router>
  );
}

export default App;
