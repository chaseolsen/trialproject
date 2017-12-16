import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Home from "./pages/Home";


var data = [{name:'Jhon', age:28, city:'HO'},{name:'Onhj', age:82, city:'HN'},{name:'Nohj', age:41, city:'IT'}]

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
