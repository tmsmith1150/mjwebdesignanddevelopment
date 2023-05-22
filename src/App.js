import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
