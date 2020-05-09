import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Col, Row, Container } from "../components/Grid";
import {Jumbotron} from "react-bootstrap";



export default class Profile extends Component {
state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

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
                        <div className= "container col-lg-10" style= {{padding: "10 px 10px"}}>
                                <div className="col-12 grid-margin stretch-card">
                                    <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Personal</h4>
                                        <form className="forms-sample">
                                            <Form.Group>
                                                <label htmlFor="exampleInputName1">Name</label>
                                                <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                                            </Form.Group>
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail3">Email address</label>
                                                <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group>
                                                <label htmlFor="exampleSelectGender">Gender</label>
                                                <select className="form-control" id="exampleSelectGender">
                                                <option>Male</option>
                                                <option>Female</option>
                                                </select>
                                            </Form.Group>
                                            {/* <Form.Group>
                                                <label>File upload</label>
                                                <Form.Control type="file" name="img[]" className="file-upload-default" />
                                                <div className="input-group col-xs-12">
                                                <Form.Control type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" /> 
                                                <span className="input-group-append">
                                                    <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                                                </span>
                                                </div>
                                            </Form.Group> */}
                                            <Form.Group>
                                                <label htmlFor="exampleInputCity1">City</label>
                                                <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                                            </Form.Group>
                                            <Form.Group>
                                                <button type="submit" className="btn btn-primary mr-2">Save</button>
                                                <button className="btn btn-light">Cancel</button>

                                            </Form.Group>
                                        </form>
                                    </div>
                                    </div>
                                    <div className = "row">
                                    <div className="col-md-12 grid-margin stretch-card">
                                        <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Health</h4>
                                            <p className="card-description"> Add your health information </p>
                                            <Form.Group>
                                            <label>Weight</label>
                                            <Form.Control type="text" className="form-control" placeholder="Enter here" aria-label="Username" />
                                            </Form.Group>
                                            <Form.Group>
                                            <label>Height</label>
                                            <Form.Control type="text" className="form-control-sm" placeholder="Enter here" aria-label="Username" />
                                            </Form.Group>
                                            <Form.Group>
                                            <label>Blood Pressure</label>
                                            <Form.Control type="text" className="form-control-sm" placeholder="Enter here" aria-label="Username" />
                                            </Form.Group>
                                            <Form.Group>
                                            <label>Temperature</label>
                                            <Form.Control type="text" className="form-control-sm" placeholder="Enter here" aria-label="Username" />
                                            </Form.Group>
                                            <Form.Group>
                                            <label>Heart Rate</label>
                                            <Form.Control type="text" className="form-control-sm" placeholder="Enter here" aria-label="Username" />
                                            </Form.Group>
        
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Active Symptoms</h4>
                                                <p className="card-description">Select all that apply</p>
                                                <form>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                    <Form.Group>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Worsening or new cough
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Shortness of breathe
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Fever, sweating, or chills
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Body aches in whole body
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Body aches/fatigue
                                                        </label>
                                                        </div>
                                                      
                                                        
                                                    </Form.Group>
                                                    </div>
                                                    </div>
                                                {/* </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Chronic Conditions</h4>
                                                <p className="card-description">Select all that apply</p>
                                                <form>
                                                <div className="row">
                                                    {/* <div className="col-md-12"> */}
                                                    <Form.Group>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            DM
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            HTN
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            COPD
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            CHF
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="checkbox" className="form-check-input"/>
                                                            <i className="input-helper"></i>
                                                            Asthma
                                                        </label>
                                                        </div>
                                                      
                                                        
                                                    </Form.Group>
                                                    </div>
                                                {/* </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    {/* <div>
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
                                    </div> */}
                        </div>
                    </div>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
    }

}