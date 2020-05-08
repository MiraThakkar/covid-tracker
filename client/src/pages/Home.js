import React, { useMemo, useState, useEffect } from "react";
import API from "../utils/API"
import Table from "../components/GlobalDataTable";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";


function Home() {

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "World COVID-19 Stats",
        // First group columns
        columns: [
          {
            Header: "Country",
            accessor: "country"
          },
          {
            Header: "Total Cases",
            accessor: "cases.total"
          },
    
          {
            Header: "New",
            accessor: "cases.new"
          },
          {
            Header: "Active",
            accessor: "cases.active"
          }, {
            Header: "New Deaths",
            accessor: "deaths.new"
          },
          {
            Header: "Total Deaths",
            accessor: "deaths.total"
          }
        
        ]
      }
    ],
    []
  );
  const [data, setdata] = useState([]);

  useEffect(() => { 
    API.search().then(res => {
      setdata(res.data.response)
    })
    }, []);

  return (
    <div>
      <Container fluid>
          <Row>
            <Col size="md-2">
              <SubMenu />
            </Col>
            <Col size ="md-10">
              <Navbar />
              <div className= "container col-lg-10" style= {{padding: "20px 20px"}}> 
                <Table
                columns= {columns} data= {data}>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Home;