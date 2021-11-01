import React from "react";
import { Form, Row, Col } from "react-bootstrap";


const panelServicio = () => {
    return(

        
            <div className="mt-5 sm-5 offset-sm-1">
                <h2>Vehículo</h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                    
                    <Form>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Id Vehiculo</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
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
                        <Form.Label>Observación</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                        
                        
                    </Row>
                                           
                    </Form>                   
                    </div>
                </div>
            </div>
        
    )
}

export default panelServicio;