import React from "react";
import { Row, Col, Modal,Container, Button,Form} from "react-bootstrap";


const ModalEditarServicio = (props) => {
    return(
        
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
              <Modal.Header   className="bg-blue text-yellow">
              
                <Modal.Title id="contained-modal-title-vcenter">
                  Anexar Servicio
                </Modal.Title>
                <Button className="bg-blue text-yellow" onClick={props.onHide}>X</Button>
              </Modal.Header>
              <Modal.Body className="show-grid">
                <Container>
                
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group as={Col} >
                        <Form.Label>Id Orden</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group as={Col} >
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>
                        
                        
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Nombre Cliente</Form.Label>
                        <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label >Nombre Técnico</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        
                    </Row>
                   
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group as={Col} >
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>
                        
                        
                    </Row>
                    
                    <Row className="mb-3"> 
                    </Row>

                    <Row className="mb-3">
                                                
                        <Form.Group as={Col}className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Observación</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3"> 
                    </Row>

                    
                       
                    

                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button className="bg-blue text-yellow">Guardar</Button>
              </Modal.Footer>
            </Modal>
          );
        
        
        


    }

    export default ModalEditarServicio;