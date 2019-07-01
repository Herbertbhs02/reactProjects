import "./styles.css";
import React, { Component } from "react";

import Home from "./Home";
import Counters from "./Counters";
import Contact from "./Contact";
import Projects from "./Projects";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="container">
            <ul class="nav">
              <li class="nav-item">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Counters" className="link">
                  Counters
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Projects" className="link">
                  Projects
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <hr />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Counters" component={Counters} />
            <Route path="/Projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
