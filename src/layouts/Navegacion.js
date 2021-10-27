import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cerrarSesion } from '../connection/helpers/autenticacionAcciones'

function Navegacion() {

    const conectado= useSelector(state=>state.auth.conectado);
    const usuario= useSelector(state=>state.auth.usuario);
    const dispatch = useDispatch();

    return (
        <Navbar className="bg-blue" expand="lg">
            <Container>
                <Navbar.Brand className="text-yellow">Cartic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {conectado && 
                        <React.Fragment>
                            
                            <Nav.Link as={NavLink} to={'/'} className="text-yellow"></Nav.Link>
                            
                            
                        </React.Fragment>
                        }                        
                    </Nav>
                    <Nav>
                        {!conectado ? (
                        <React.Fragment>
                            <Nav.Link as={NavLink} to={'/registro'} className="text-yellow">Registrar usuario</Nav.Link>
                            <Nav.Link as={NavLink} to={'/login'} className="text-yellow">Iniciar sesión</Nav.Link>
                        </React.Fragment>
                        ):(
                            
                            <NavDropdown title={<span className="text-yellow">{usuario.sub}</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item onClick={() => dispatch(cerrarSesion())} className="text-yellow">Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        )}                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 
 
export {Navegacion}
