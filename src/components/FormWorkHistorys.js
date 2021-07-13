import React, { Component} from 'react'
import { Container, Col, Jumbotron, Button,Row,Form} from "react-bootstrap"
import {DeleteOutlined} from '@ant-design/icons';
import "./Form.css"

export class FormWorkHistorys extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };
    
    handlecollpase =()=> e=>{
        var content = e.target.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }  

    handlecloneform = () =>{
        var itm = document.getElementsByClassName("copy-whis").cloneNode( true );
        document.getElementById('all-whis').append( itm );
    }

    createUI=() => {
        const {handleChange, handleCurCheckbox} = this.props;
        return this.props.values.map((el, i) => 
            <div key={i}>
                <Container className="copy-whis">
                {<button className="close-btn2" type="button"><DeleteOutlined style={{ with: '16px'}}/></button>}
                {<button type="button" className="collapsible" id="my-btn" onClick={this.handlecollpase()}>Open</button> }
                <Form className="whis-form">
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label className="text-left">JobTitle</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your jobTitle" defaultValue={el.jobTitle} onChange={handleChange(i, "jobTitle")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">Employer</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your employer" defaultValue={el.employer} onChange={handleChange(i, "employer")}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label className="text-left">City</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your city" defaultValue={el.city2} onChange={handleChange(i, "city2")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">Province</Form.Label>
                            <Form.Control as="select" defaultValue={el.province2} onChange={handleChange(i, "province2")}>
                                        <option hidden>Select...</option>
                                        <option>ON</option>
                                        <option>QC</option>
                                        <option>NS</option>
                                        <option>NB</option>
                                        <option>MB</option>
                                        <option>BC</option>
                                        <option>PE</option>
                                        <option>SK</option>
                                        <option>AB</option>
                                        <option>NL</option>
                                    </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label className="text-left">Start Date</Form.Label>
                            <Form.Control type="date" className="form-input"placeholder="DD/MM/YY" id="startDate" defaultValue={el.startDate} onChange={handleChange(i, "startDate")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">End Date</Form.Label>
                            <Form.Control type="date" className="form-input"placeholder="DD/MM/YY" id="endDate" defaultValue={el.endDate} onChange={handleChange(i, "endDate")}/>
                            <label className="custom-check">
                                <input type="checkbox" onClick={handleCurCheckbox()}/>
                                <span className="custom-check-label">I currently work here</span>
                            </label>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            </div>          
        )
    }

    render() {
        return (
            <>
            <Jumbotron>
                <h1>Work History</h1>
            </Jumbotron>
            <div id="all-whis">
                {this.createUI()}        
            </div>

            <Container>
                <Row>
                    <button className="btn-add-more" type="submit" onClick={()=>this.props.handleAddWorkHistory()}> + ADD MORE</button>
                </Row>
            </Container>
            <Container className="footer-btn">
                <Row>
                    <Col>
                        <Button variant="secondary" type="submit" onClick={this.back}> BACK</Button>
                    </Col>
                    <Col>
                        <Button variant="success" type="submit"  onClick={this.continue}>Continue</Button>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default FormWorkHistorys
