import React, { Component } from 'react'
import { Container, Jumbotron, Form, Row, Col, Button} from "react-bootstrap"
import "./Form.css"

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    generatepdf = e => {
        e.preventDefault();
        this.props.generatepdf();
    }
    render() {
        const { values:{ firstName, lastName, city, province, postalcode, email, jobTitle, employer, city2, province2, 
            startDate, endDate ,schoolName, schoolLocation, degree, fieldOfStudy, skillList, year}} = this.props

        const listItems = skillList.map((skill) =><li>{skill}</li>);
        return (
            <>
            <Container>
               <Jumbotron>
                        <h1>Confirm</h1>
                </Jumbotron>
                <Container>
                    <div className="document" id="resume-document">
                        <Form>
                            <div className="content-name">
                                {firstName}&#32;{lastName}
                            </div>
                            <div className="bold-line"></div>
                            <div className="content-address">
                                {city}&#32;{province}&#32;{postalcode}&#9670;{email}
                            </div>
                            <div className="content-summary">
                                <div className="header">
                                    <div className="section-title"> Professional&#32;Summary</div>
                                </div>
                                <div className="first-paragraph">
                                    <span> with over 2 years of successful experience in [Skill] and [Skill]. Recognized consistently for performance excellence and contributions to success in {employer} industry. Strengths in [Skill] and [Skill] backed by training in {fieldOfStudy}.</span>
                                </div>
                            </div>
                            <div className="content-summary">
                                <div className="header">
                                    <div className="section-title">Skills</div>
                                </div>
                                <div className="first-paragraph">
                                    <ul class="ul-columns">{listItems}</ul>
                                </div>
                            </div>
                            <div className="content-summary">
                                <div className="header">
                                    <div className="section-title">Work History</div>
                                </div>
                                <div className="first-paragraph">
                                <span className="block-span"><span className="bold-name">{jobTitle}</span>,{startDate} to {endDate}</span>
                                <span className="block-span"><span className="bold-name">{employer}</span>-{city2},{province2}</span>
                                <li>Delivered exceptional level of service to each customer by listening to concerns and answering questions.</li>
                                <li>Completed all paperwork, recognizing any discrepancies and addressing them in a timely fashion.</li>
                                </div>
                            </div>
                            <div className="content-summary">
                                <div className="header">
                                    <div className="section-title">Education</div>
                                </div>
                                <div className="first-paragraph">
                                <span className="block-span"><span className="bold-name">{degree}</span>:{fieldOfStudy},{year}</span>
                                <span className="block-span"><span className="bold-name">{schoolName}</span>-{schoolLocation}</span>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Container>
                <Container>
                    <div className="conf-btn">
                        <Row>
                            <Col>
                                <Button variant="secondary" type="submit" onClick={this.back}> BACK</Button>
                            </Col>
                            <Col>
                                <Button variant="success" type="submit" onClick={this.continue}>Continue</Button>
                            </Col>
                            <Col>
                            <Button variant="primary" type="submit" onClick={this.generatepdf}> Download</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            </>
        )
    }
}

export default Confirm