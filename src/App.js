import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/sections/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/sections/About';
// import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Resume from './components/sections/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          {/* <Route path='/projects' exact component={Projects} /> */}
          <Route path='/experience' exact component={Experience} />
          <Route path='/resume' exact component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
