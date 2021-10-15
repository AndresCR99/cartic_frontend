import React from "react";
import { Form, Row, Col, Card, Button} from "react-bootstrap";
import Select from "../items/Select";

var options = {
    selected : 0,
    option_id : [0, 1,2],
    options : [{name: 'Tecnico'}, {name: 'Romario Najari'},{name: 'Wiliam Torre Alba'}]

}


const PanelValoresServicio = () => {
    return(

        
            <div className="mt-5 sm-4 offset-sm-1">
                <h2>Orden Servicio</h2>
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
                            <Form.Label column sm="2">Téc</Form.Label>
                            
                                <Select
                                    options={options}
                                />
                        </Form.Group>
                        <Form.Group as={Col} >
                        <Form.Label>Vr.Total</Form.Label>
                        <Form.Control type="number"/>
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3"> 
                    </Row>

                    
                       
                    </Form>  

                     <Card.Footer className="text-center ">
                                    <Button variant="primary" type="submit" className="text-yellow bg-blue">
                                        Guardar
                                    </Button>
                            </Card.Footer>                 
                    </div>
                </div>
            </div>
        
    )
}

export default PanelValoresServicio;