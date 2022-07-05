import React from "react";
import {Navbar , Container , Nav , NavDropdown , Button} from 'react-bootstrap'

function Bar(props){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Les Parrains Du Numérique</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("lundi")}>lundi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("mardi")}>mardi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("mercredi")}>mercredi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("jeudi")}>jeudi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("vendredi")}>vendredi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("samedi")}>samedi</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("dimanche")}>dimanche</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <Button onClick={()=>props.changeFilter("all")}>all</Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">link?</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">link?</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        link?
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Bar;