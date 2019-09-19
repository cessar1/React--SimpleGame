import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Shop from "./Shop";
import Home from "./Home";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
