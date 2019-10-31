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
          <div className="navbar">
            <div className="logo">Rick and Morty site</div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/episodes">Episodes</Link>
              <Link to="/characters">Characters</Link>
              <Link to="/locations">Locations</Link>
            </nav>
          </div>
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
