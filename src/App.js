import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar/index';
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import SearchResultContainer from "./components/SearchResultContainer";


function App() {
  return (
    // <div className="App">
    //   <h2> Corona Tracker</h2>
    //   <Sidebar />
    // </div>
    <Container fluid>
      <Row>
        <Col size="md-2">
          <SideMenu />
        </Col>
        <Col size ="md-10">
          <Navbar />
          <Chart />
          <SearchResultContainer />
        </Col>
      </Row>
    </Container>
  );
}


export default App;


