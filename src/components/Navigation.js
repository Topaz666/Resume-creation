import React,{Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    change =(input) => e => {
        e.preventDefault();
        this.props.changeStep(input);       
         };
         
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Jobster.io</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link onClick={this.change(1)}>1</Nav.Link>
                <Nav.Link onClick={this.change(2)}>2</Nav.Link>
                <Nav.Link onClick={this.change(3)}>3</Nav.Link>
                <Nav.Link onClick={this.change(4)}>4</Nav.Link>
                <Nav.Link onClick={this.change(5)}>5</Nav.Link>
                </Nav>
            </Navbar>
            </>
        )
    }
}