import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    return(

        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            Cartic
                        </Card.Header>
                        <LoginForm/>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export default Login;