import React, { Component } from 'react'
import { Container, Row, Col, Button} from "react-bootstrap"
import success from '../pic/success.png'; 
import "./Form.css"

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
    e.preventDefault();
    this.props.prevStep();
    };

    generatepdf =e => {
        e.preventDefault();
        this.props.generatepdf();
    }
    render() {
        return (
            <div>
                <>
                <Container>
                    <div className="success-img">
                        <img src={success} alt=""/>
                        </div>
                    <Container className="footer-btn">
                        <Row>
                            <Col>
                                <Button variant="secondary" type="submit" onClick={this.back}> BACK</Button>
                            </Col>
                            {/* <Col>
                                <Button variant="success" type="submit" onClick={this.generatepdf}> Download</Button>
                            </Col> */}
                        </Row>
                    </Container>
                </Container>
                </>
            </div>
        )
    }
}

export default Success
