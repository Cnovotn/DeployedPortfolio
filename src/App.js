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
      <div className="App"></div>
          <Load/>
          <FadeIn delay={2100}>
            <Switch>
              <Route path="/riverhouse" component={RiverHouse}></Route>
              <Route path="/aboutme" component={AboutMe}></Route>
              <Route path="/education" component={Education}></Route>
              <Route path="/projects" component={ProjectsSection}></Route>
              <Route path="/work" component={WorkSection}></Route>
              <Route path="/" component={Landing}></Route>
            </Switch>
          </FadeIn>
    </Router>
  );
}

export default App;
