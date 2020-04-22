import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar/index';
import Navbar from "./components/Navbar";
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";
import Widget from "./components/Widget";
import Chart from "./components/Chart";
import SearchResultContainer from "./components/SearchResultContainer";



function App() {
  return (

    <Container fluid>
      <Row>
        <Col size="md-2">
          <SideMenu />
        </Col>
        <Col size ="md-10">
          <Navbar />
        </Col>
      </Row>

      <Row>
        <Col size= "md-3">
          <Widget />
        </Col>

        <Col size= "md-3">
          <Widget />
        </Col>  
      </Row>
    </Container>
    <div className="App">
      <Navbar />
      <Container fluid>
        <Row>
          <Col size="md-2">
            <SideMenu />
          </Col>
          <Col size ="md-10">
            <SearchResultContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;


