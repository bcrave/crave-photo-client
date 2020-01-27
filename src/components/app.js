import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Router>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
