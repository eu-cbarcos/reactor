import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../Home/home";
import Episodes from "../Episodes/Episodes";
import Characters from "../Characters/characters";
import Locations from "../Locations/locations";
import LocationDetails from "../LocationDetails/locationdetails";
import Episode from "../Episode/Episode";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Router>
          <nav className="navbar  navbar-expand-lg navbar-dark">
            <a href="/" className="navbar-brand">Rick and Morty site</a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/episodes" className="nav-link">Episodes</Link>
              </li>
              <li className="nav-item">
                <Link to="/characters" className="nav-link">Characters</Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link">Locations</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/characters" component={Characters} />
              <Route path="/episodes" component={Episodes} />
              <Route path="/locations" component={Locations} />
              <Route path="/locationdetails/:id" component={LocationDetails} />
              <Route path="/episode/:id" component={Episode} />
            </Switch>
          </div>
        </Router>
      </header>
    );
  }
}

export default Header;
