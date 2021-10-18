import React from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const panelRegistro = () => {
    return(

        <div className="row mt-5">
            <div className="col-sm-8 offset-sm-1">
                {/* <h1>Histórico Técnico</h1> */}
                <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            Registro Vehiculo
                        </Card.Header>
                <div className="card shadow mt-3">
                    <div className="card-body">
                    
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>ID_Vehiculo</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                   
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Observaciones</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>

                       
                        </Row>
                       
                    </Form>                   
                    </div>
                </div>
                <Card.Footer className="text-center mt-1">
                                    <Button variant="primary" type="submit" className="text-yellow bg-blue">
                                        Registrar Vehiculo
                                    </Button>
                            </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default panelRegistro;