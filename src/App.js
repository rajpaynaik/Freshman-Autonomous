import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUpLogin from "./components/SignUpLogin"
function App() {
  // console.log(data)
  return (
    <Router>
      <div className="App">
        <div className="App-body">
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/auth" component={SignUpLogin}/>
           </Switch>
        </div>
        </div>
      </Router>

   
  );
}

export default App;
