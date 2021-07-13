import React, { Component } from 'react'
import { Container, Col, Jumbotron, Form, Button,Row } from "react-bootstrap"
import "./Form.css"

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <Jumbotron>
                    <h1>Personal Details</h1>
                </Jumbotron>
                <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your firstName" defaultValue={values.firstName} onChange={handleChange('firstName')}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your lastName" defaultValue={values.lastName} onChange={handleChange("lastName")}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={{span:3, offset:2}}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your username" defaultValue={values.city} onChange={handleChange("city")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={3}>
                            <Form.Label>Province</Form.Label>
                                <Form.Control as="select" defaultValue={values.province} onChange={handleChange("province")}>
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
                        <Form.Group as={Col} xs={2}>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your postal code" defaultValue={values.postalcode} onChange={handleChange("postalcode")}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your email" defaultValue={values.email} onChange={handleChange("email")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your phone" defaultValue={values.phone} onChange={handleChange("phone")}/>
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
                            <Button variant="success" type="submit"  onClick={this.continue}>Continue</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default FormPersonalDetails
