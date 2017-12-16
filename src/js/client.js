import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Home from "./pages/Home";

  class App extends React.Component{
    render(){

      return (
        <Router history={browserHistory}>
            <Route path="/" component={Home}></Route>
        </Router>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById("app"));
