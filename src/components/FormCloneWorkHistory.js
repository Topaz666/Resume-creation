import React, { Component } from 'react'
import { Container, Col, Form} from "react-bootstrap"
import "./Form.css"

export class FormCloneWorkHistory extends Component {
    render() {
        const { values, handleChange, handleCurCheckbox, handlecollpase} = this.props;
        return (
            <Container className="copy-whis">
                { <button type="button" className="collapsible" id="my-btn" onClick={handlecollpase()}>Open</button> }
                <Form className="whis-form">
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label className="text-left">JobTitle</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your jobTitle" defaultValue={values.jobTitle} onChange={handleChange("jobTitle")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">Employer</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your employer" defaultValue={values.employer} onChange={handleChange("employer")}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={{span:4, offset:2}}>
                            <Form.Label className="text-left">City</Form.Label>
                            <Form.Control type="text" className="form-input"placeholder="Enter your city" defaultValue={values.city2} onChange={handleChange("city2")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">Province</Form.Label>
                            <Form.Control as="select" defaultValue={values.province2[0]} onChange={handleChange("province2")}>
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
                            <Form.Control type="date" className="form-input"placeholder="DD/MM/YY" id="startDate" defaultValue={values.startDate} onChange={handleChange("startDate")}/>
                        </Form.Group>
                        <Form.Group as={Col} xs={4}>
                            <Form.Label className="text-left">End Date</Form.Label>
                            <Form.Control type="date" className="form-input"placeholder="DD/MM/YY" id="endDate" defaultValue={values.endDate} onChange={handleChange("endDate")}/>
                            <label className="custom-check">
                                <input type="checkbox" onClick={handleCurCheckbox()}/>
                                <span className="custom-check-label">I currently work here</span>
                            </label>
                        </Form.Group>
                    </Form.Row>
                </Form>
        </Container>
        )
    }
}

export default FormCloneWorkHistory
