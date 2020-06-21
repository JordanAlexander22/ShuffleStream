import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components";
import Home from './components/Home/Home'
import Login from "./components/Login/Login"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "jordan",
    };
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/:page?"
            render={(props) => <NavBar {...props} />}
          />
		  <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </>
    );
  }
}
