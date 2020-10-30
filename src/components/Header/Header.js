import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/home';
import Episodes from '../Episodes/Episodes';
import Characters from '../Characters/characters';
import Locations from '../Locations/locations';
import LocationDetails from '../LocationDetails/locationdetails';
import Episode from '../Episode/Episode';

import logo from '../../assets/logo.png';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header bg-teal-700">
        <Router>
          <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a href="/" className="navbar-brand">
                <img
                  className="w-48 h-12"
                  src={logo}
                  alt="Rick and Morty site"
                />
              </a>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto hidden lg:block">
              <div className="text-sm lg:flex-grow">
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                  <Link to="/">Home</Link>
                </div>
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                  <Link to="/episodes">Episodes</Link>
                </div>

                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                  <Link to="/characters">Characters</Link>
                </div>

                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
                  <Link to="/locations">Locations</Link>
                </div>
              </div>
            </div>
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
