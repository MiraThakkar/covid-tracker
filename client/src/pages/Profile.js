import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Col, Row, Container } from "../components/Grid";



export default class Profile extends Component {
// state = {
//     startDate: new Date()
//   };
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };

  render (){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-2 lg-2">
                        <SubMenu />
                    </Col>

                    <Col size ="md-10 lg-10">
                        <Navbar />   
                    
                    </Col> 
                </Row>
            </Container>
        </div>
    )
    }

}