import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import landingPage from "./components/LandingPage"
import loginPage from "./components/LoginPage"
import signupPage from "./components/SignupPage"
import SignUpLogin from "./components/SignUpLogin"
import Error from "./components/Error"
import ProfilePage from "./components/ProfilePage"
function App() {
  // console.log(data)
  return (
    <Router>
      <div className="App">
        <div className="App-body">
        <Switch>
        <Route exact path="/" component={landingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={loginPage}/>
        <Route exact path="/signup" component={signupPage}/>
        <Route exact path="/profilepage" component={ProfilePage}/>
        <Route exact path="*" component={Error} />
           </Switch>
        </div>
        </div>
      </Router>

   
  );
}

export default App;
