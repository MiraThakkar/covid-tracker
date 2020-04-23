import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar/index';
import Navbar from "./components/Navbar";
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";
import Widget from "./components/Widget";
import Chart from "./components/Chart";
import SearchResultContainer from "./components/SearchResultContainer";
//import Logo from "./earth.png";



function App() {
  return (
    <div className="App">
      {/* <img src={Logo} alt="Logo" /> */}
      <Navbar />
      <Container fluid>
        <Row>
          <Col size="md-3">
            <SideMenu />
          </Col>
          <Col size ="md-3">
            <SearchResultContainer />
          </Col>
        {/* </Row>

        <Row> */}
        
        <Col size= "md-3">
          <Widget />
        </Col>
        <Col size= "md-3">
          <Widget />
        </Col>

        {/* <Col size= "md-3">
          <Widget />
        </Col>  

        <Col size= "md-3">
          <Widget />
        </Col>   */}
      </Row>
      </Container>
    </div>
  );
}


export default App;


