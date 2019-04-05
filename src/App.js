import React, { Component } from 'react';
import classes from './App.css';
import Pixa from "./containers/Pixa/Pixa"
import TopImages from "./containers/Top/Top";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.Header}>
          <h1>Marvo's Image Finder</h1>
        </header>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Top Images</NavLink>
                </li>
                <li>
                  <NavLink to="/search">Search</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact component={TopImages} path="/" />
              <Route component={Pixa} path="/search" exact/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
