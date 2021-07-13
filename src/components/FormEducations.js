import React, { Component } from 'react'
import { Container, Col, Jumbotron, Form, Button,Row } from "react-bootstrap"
import "./Form.css"

export class FormEducations extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <Jumbotron>
                    <h1>Educations</h1>
                </Jumbotron>
                <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label>School Name</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your schoolName" defaultValue={values.schoolName} onChange={handleChange("schoolName")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label>School Location</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your schoolLocation" defaultValue={values.schoolLocation} onChange={handleChange("schoolLocation")}/>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:8, offset:2}}>
                        <Form.Label>Degree</Form.Label>
                        <Form.Control as="select" defaultValue={values.degree} onChange={handleChange("degree")}>
                            <option>Select...</option>
                            <option>High School Diploma</option>
                            <option>GED</option>
                            <option>Associate of Art</option>
                            <option>Associate of Science</option>
                            <option>Associate of Applied Science</option>
                            <option>Bachelor of Art</option>
                            <option>Bachelor of Science</option>
                            <option>BBA</option>
                            <option>Master of Art</option>
                            <option>Master of Science</option>
                            <option>MBA</option>
                            <option>J.D</option>
                            <option>M.D</option>
                            <option>PH.D</option>
                            <option>None</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label>Field Of Study</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your Field Of Study" defaultValue={values.fieldOfStudy} onChange={handleChange("fieldOfStudy")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={2}>
                            <Form.Label>Graduation Date</Form.Label>
                                <Form.Control as="select" defaultValue={values.month} onChange={handleChange("month")}>
                                    <option hidden>Month</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>Jun</option>
                                    <option>Jul</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} xs={2}>
                            <Form.Label>&nbsp;</Form.Label>
                            <Form.Control as="select" defaultValue={values.year} onChange={handleChange("year")}>
                                <option hidden>Year</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
                </Container>
                <Container className="footer-btn">
                    <Row>
                        <Col>
                            <Button variant="secondary" type="submit" onClick={this.back}> BACK</Button>
                        </Col>
                        <Col>
                            <Button variant="success" type="submit" onClick={this.continue}>Continue</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default FormEducations
