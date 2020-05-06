import React from "react";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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
  
