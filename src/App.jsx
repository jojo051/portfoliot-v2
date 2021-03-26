import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import MyCv from './components/MyCv';
import Home from './components/Home';
import Project from './components/Project'

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route  path="/projects/:id"component={Project}/>
            <Route  path="/contactme"component={AboutUs}/>
            <Route  path="/mycv"component={MyCv}/>
            <Route exact path="/"component={Home}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
