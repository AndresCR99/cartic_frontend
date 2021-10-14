import React from "react";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    
    return(
        <Navbar  className="bg-blue" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to={'/'} className="text-yellow">CarTic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav bg-blue">
                
                <Nav className=" bg-blue">
                    <Nav.Link as={NavLink} to={'/registro'} className="text-yellow">Nuevo</Nav.Link>
                    <Nav.Link as={NavLink} to={'/servicio'} className="text-yellow">Servicio</Nav.Link>
                    <NavDropdown title={<span className="text-yellow bg-blue">Historicos</span>} id="basic-nav-dropdown"  className="text-yellow bg-blue">
                    <NavDropdown.Item href="#action/3.1"  className="text-yellow">Vehiculo</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={'/tecnico'}  className="text-yellow">Tecnico</NavDropdown.Item>
                                  
                    </NavDropdown>

                    <NavDropdown title={<span className="me-auto text-yellow bg-blue">Usuario</span>} id="basic-nav-dropdown"  className="text-yellow bg-blue">
                    <NavDropdown.Item  className="text-yellow">Cerrar Sesion</NavDropdown.Item>
                                       
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;