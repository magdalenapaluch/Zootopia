import React, { Component } from "react";
import HomePage from "./pages/Home";
import GlobalStyle from "./common/globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
