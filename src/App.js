import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar/index';
import Navbar from "./components/Navbar";
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";
import Chart from "./components/Chart";
import SearchResultContainer from "./components/SearchResultContainer";


function App() {
  return (
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


