import React from "react";
import Select from "../items/Select";
import { Form, Row, Col, Card, Button } from "react-bootstrap";

var options = {
    selected : 0,
    option_id : [0, 1],
    options : [{name: 'Cliente'}, {name: 'Tecnico'}]

}

const panelRegistro = () => {
    return(

        <div className="row mt-5">
            <div className="col-sm-8 offset-sm-1">
                {/* <h1>Histórico Técnico</h1> */}
                <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            Registro Cliente
                        </Card.Header>
                <div className="card shadow mt-3">
                    <div className="card-body">
                    
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>ID_Cliente</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                   
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label column sm="3">IdPersona </Form.Label>
                            
                                <Select
                                    options={options}
                                />
                            
                        </Form.Group>
                        </Row>
                       
                    </Form>     
                    
                    </div>
                </div>
                <Card.Footer className="text-center mt-1">
                                    <Button variant="primary" type="submit" className="text-yellow bg-blue">
                                        Registrar Cliente
                                    </Button>
                            </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default panelRegistro;