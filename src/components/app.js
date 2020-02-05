import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Layout from "./layout";
import NavigationBar from "./navigation/navigation-bar";
import Jumbotron from "./jumbotron";
// import Footer from "./navigation/footer";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/auth" component={Auth} />
              <Route component={NoMatch} />
            </Switch>

            {/* <Footer /> */}
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
