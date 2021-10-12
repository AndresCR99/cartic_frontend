import React, { Fragment} from "react";
import { Form, Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import logo from "../images/logo.png";

const Login = () => {
    return(

        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            Cartic
                        </Card.Header>
                        <Form>
                            <Card.Body>
                                <div className="text-center mt-2">
                                    <Image src={logo} height={100} />
                                </div>
                                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Ingrese un correo electrónico" />
                                        <Form.Text className="text-muted">
                                        Nunca compartas tus credenciales con nadie.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Ingrese de nuevo la contraseña" />
                                    </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-center mt-1">
                                    <Button variant="primary" type="submit" className="text-yellow bg-blue">
                                        Ingresar
                                    </Button>
                            </Card.Footer>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export default Login;