import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components";
import Home from "./components/Home/Home";
import test from './components/test';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
        </Switch>
      </>
    );
  }
}
