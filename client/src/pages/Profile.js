import React from "react";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";
import {Jumbotron} from "react-bootstrap";

function Profile (){
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-2 lg-2">
                        <SubMenu />
                    </Col>

                    <Col size ="md-10 lg-10">
                        <Navbar /> 

                        <div>
                            <h1 className="display-3" style= {{padding: "20px", color: "#5ba7aa", textAlign: "left", height: "auto"}}> <i class="fas fa-user-alt fa-2x"></i> Profile</h1>
                        </div>

                        <div>
                            <Jumbotron fluid>
                                <Container fluid style={{padding: "20px"}}>
                                <h3 style= {{color: "#5ba7aa", textAlign: "left", width: "auto", height: "auto"}}> User Details</h3>
                                <ul style= {{color: "#5ba7aa", textAlign: "left", width: "auto", height: "auto"}}><h4>Name:</h4></ul>
                                <ul style= {{color: "#5ba7aa", textAlign: "left", width: "auto", height: "auto"}}><h4>Email:</h4></ul>
                                <ul style= {{color: "#5ba7aa", textAlign: "left", width: "auto", height: "auto"}}><h4>Favorite:</h4></ul>
                                </Container>
                            </Jumbotron>
                        </div>

                        <div>
                        <Jumbotron fluid>
                                <Container fluid style={{padding: "20px"}}>
                                <h3 style= {{padding: "20px", color: "#5ba7aa", textAlign: "left", width: "auto", height: "auto"}}>Favorite:</h3>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Profile;