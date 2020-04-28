import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";
import Chart from "./components/Chart";
import SearchResultContainer from "./components/SearchResultContainer";
import ToggleMenu from "./components/ToggleMenu";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Container fluid>
            <Row>
              <Col size="md-2">
                <SideMenu />
              </Col>
              <Col size ="md-10">
                <Navbar />
                {/* <ToggleMenu 
                    render={({on, toggle})=>(
                      <div>

                        {on && <h2>Show Me</h2>}
                          <button onClick= {toggle}>Show/Hide</button>
                      </div>
                  )} /> */}
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={SignUp} />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
    // </Container>
    // </div>
  );
}


export default App;


