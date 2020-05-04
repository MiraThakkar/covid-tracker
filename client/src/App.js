import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import usaForm from "./pages/Usa"
function App() {
  return (
    <div className="App">
      <Router>
        <div>
              <Switch>    
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/home" component={Home} />
                {/* <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={SignUp} /> */}
                <Route exact path="/usaForm" component={usaForm} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={SignUp} />
                <Route exact path="/ResetPassword" component={ResetPassword} />
              </Switch> 
        </div> 
      </Router>
    </div>
  );
}


export default App;


