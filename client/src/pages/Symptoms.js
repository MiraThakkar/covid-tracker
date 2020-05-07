import React from "react";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactPlayer from "../components/ReactPlayer";



function Symptoms () {
    //setting a state for the checkbox
    // state= {
    //     checkMe: false
    // };

    // handleCheck= event =>{
    //     this.setState({checkMe: event.target.checked});
    //     console.log ("called");
    // };
    const div= {
        marginLeft:"20%",
        marginRight: "20%"
    }
    const style = {
            color: "#f5f5f4",
            padding: "15px",
            fontFamily: "Arial",
            height: "auto",
            width: "auto",
            background: "#2196f3",
            marginTop: "10px"

          };
    
    const style2 ={
        color: "#5ba7aa",
        textAlign: "left",
        marginLeft: "10px"
    };
    
    const style3 ={
        color: "#949494",
        textAlign: "left",
        marginLeft: "10px"
    };

    const squarestyle = {
           
            
            paddingtop: "16px",
            paddingBottom: "16px",
           
           
            border: "1px solid #dadce0",
            justifyContent: 'center'
        //     flex: "1",
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignSelf: "center",
        // alignItems: "center"
        };
    
    return(
        <div className= "page" style= {{backgroundColor: "white"}}> 
            <Container fluid>
                <Row>
                    <Col size="md-2">
                        <SubMenu />
                    </Col>

                    <Col size ="md-10">
                        <Navbar />

                        <div>
                            <h1 style ={style2}> <i className="fas fa-user-md"></i> Watch for symptoms</h1>
                            <p style ={style3}>
                                <h4>Usually sypmtoms will appear 2-14 days after exposure to COVID-19.</h4>
                                <li>Cough</li>
                                <li>Shortness of breath or difficulty breathing</li>
                                <li>Fever</li>
                                <li>Chills</li>
                                <li>Repeated shaking with chills</li>
                                <li>Muscle pain</li>
                                <li>Headache</li>
                                <li>Sore throat</li>
                                <li>New loss of taste or smell</li>
                            </p>                            

                            <h1 style ={style2}><i className="fas fa-prescription"></i> How to protect yourself and others</h1>
                            <p style ={style3}>
                                <h4>Best way to prevent any illness is to not be near where it is exposed.</h4>
                                <ol>
                                    <li><b>STAY at HOME if possible.</b></li>
                                    <li>Properly wash your hands! Wash hands with warm water and soap for <b>at least 20 seconds</b> as often as possible.Especially after being in the public or touching surfaces or coughing and sneezing.</li>
                                    <li>If you can't wash your hands, use hand sanitizer with <b> at least 60% alcohol.</b></li>
                                    <li>Practice social distancing. <b>Stay at least 6-feet away from one another.</b> Avoid big crowds and gatherings.</li>
                                    <li><b>Avoid</b> touching surfaces without disenfecting or cleaning the area up.</li>
                                    <li><b>Avoid</b> the touching the face or rubbing the eyes.</li>
                                    <li>Wear a mask or cloth to cover the nose and mouth.</li>
                                    <li>Cough or sneeze in a sleeve. Throw away used tissues and remember to wash hands as well.</li>
                                    <li><b>Clean AND disinfect</b> frequently touched surfaces daily. Such as tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
                                </ol>
                            </p>
                        </div>

                        <div style= {div}>
                            <h2 style= {style}><i className="fas fa-user-nurse"></i> How to make a face mask</h2>
                            <ul style={squarestyle}><ReactPlayer /></ul>
                        </div>

                        <div style= {div}>
                            <h2 style= {style}>Do you have any of the following symptoms below?</h2>
                            <h6> Select all that apply</h6>
                                
                                    {/* Attempted to set a state for the check boxes
                                    <input 
                                    type= "checkbox" 
                                    checked={this.state.checkMe}
                                    onChange= { this.handleCheck}
                                    />*/} 

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group>
                                    <h6>How old are you?</h6>
                                        <select>
                                            <option> 17 and under</option>
                                            <option>18-64</option>
                                            <option>65 and up</option>
                                        </select>
                                    </Form.Group>
                                </div>  
                                  
                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Fever, sweating, or chills" />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Worsening or new cough" />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Shortness of breathe/difficulty breathing " />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Sore throat" />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Vommiting or diarrhea" />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Body aches in whole body" />
                                    </Form.Group>
                                </div>

                                <div className= "square" style ={squarestyle}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="None of the above" />
                                    </Form.Group>
                                </div>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }


export default Symptoms;

// export default App = () => {
//     const [isSelected, setSelection] = useState(false);
  
//     return (
//       <View style={styles.container}>
//         <View style={styles.checkboxContainer}>
//           <CheckBox
//             value={isSelected}
//             onValueChange={setSelection}
//             style={styles.checkbox}
//           />
//           <Text style={styles.label}>Do you like React Native?</Text>
//         </View>
//         <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     checkboxContainer: {
//       flexDirection: "row",
//       marginBottom: 20,
//     },
//     checkbox: {
//       alignSelf: "center",
//     },
//     label: {
//       margin: 8,
//     },
//   });
  
