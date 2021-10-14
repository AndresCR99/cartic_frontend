import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "../items/Select";

var options = {
    selected : 0,
    option_id : [0, 1,2],
    options : [{name: 'Tecnico'}, {name: 'Romario Najari'},{name: 'Wiliam Torre Alba'}]

}


const panelServicio = () => {
    return(

        <div className="row mt-5">
            <div className="col-sm-8 offset-sm-1">
                {/* <h1>Histórico Técnico</h1> */}
                <div className="card shadow mt-3">
                    <div className="card-body">
                    
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date"/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Id Orden</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                    </Row>
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
                    <Form.Group as={Col} >
                            <Form.Label column sm="2">Técnico </Form.Label>
                            
                                <Select
                                    options={options}
                                />
                            
                        </Form.Group>
                        </Row>
                       
                    </Form>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default panelServicio;