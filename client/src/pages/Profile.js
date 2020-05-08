import React from "react";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";

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
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Profile;