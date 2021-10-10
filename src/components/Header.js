import React from "react";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

const Header = () => {
    
    return(
        <Navbar  className="bg-blue" expand="lg">
            <Container>
                <Navbar.Brand href="#home"  className="text-yellow">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav bg-blue">
                <Nav className="me-auto bg-blue">
                    <Nav.Link href="#home" className="text-yellow">Home</Nav.Link>
                    <Nav.Link href="#link" className="text-yellow">Link</Nav.Link>
                    <NavDropdown title={<span className="text-yellow bg-blue">Dropdown</span>} id="basic-nav-dropdown"  className="text-yellow bg-blue">
                    <NavDropdown.Item href="#action/3.1"  className="text-yellow">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"  className="text-yellow">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"  className="text-yellow">Something</NavDropdown.Item>
                    <NavDropdown.Divider className=""/>
                    <NavDropdown.Item href="#action/3.4"  className="text-yellow">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;