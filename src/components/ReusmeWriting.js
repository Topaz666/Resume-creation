import React, { Component } from 'react'
import "./Form.css"

export class ReusmeWriting extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <div>
                <>
                <Container>
                    <Jumbotron>
                        <h1>Success</h1>
                    </Jumbotron>
                    <Row>
                        <Col>
                            <Button variant="success" type="submit"  onClick={this.continue}>Continue</Button>
                        </Col>
                    </Row>
                </Container>
                </>
            </div>
        )
    }
}

export default ReusmeWriting

































/*componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", this.handlecollpase);
    }
}

componentDidUpdate() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    console.log(coll.length);
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", this.handlecollpase)
    }
}

componentWillUnmount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", this.handlecollpase)
    }
}

handlecollpase = () =>{
    var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
};*/
