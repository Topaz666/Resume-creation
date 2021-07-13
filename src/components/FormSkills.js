import React, { Component } from 'react'
import { Container, Col, Jumbotron, Form, Button,Row, FormControl, InputGroup} from "react-bootstrap"
import "./Form.css"

export class FormSkills extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, addSkillList, removeSklillList} = this.props;

        const listItems = values.skillList.map((skill,i) =>(<div className="listItem"><span>{skill}</span><button className="close-btn" type="button" onClick={()=>removeSklillList(i)}>X</button></div>));

        return (
            <>
                <Jumbotron>
                    <h1>Skills</h1>
                </Jumbotron>
                <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} xs={{span:8, offset:2}}>
                        <div>
                            <InputGroup className="mb-3"> 
                                <FormControl type="text" id="skillListId" placeholder="Enter your skills" defaultValue=""/>
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={addSkillList()}>Add</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        </Form.Group>
                    </Form.Row>
                </Form>
                </Container>
                <Container>
                    <div className="content-box">
                        <ul>{listItems}</ul>
                    </div>
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

export default FormSkills
