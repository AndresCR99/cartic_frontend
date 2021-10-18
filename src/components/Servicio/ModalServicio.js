import React from "react";
import { Row, Col, Modal,Container, Button,Form} from "react-bootstrap";

const ModalServicio = (props) => {
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
                  <Row>
                    <Col xs={6} md={4}>
                    <Form.Label>Id Servicio</Form.Label>
                        <Form.Control type="text"/>
                    </Col>
                    <Col xs={12} md={8}>
                    <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text"/>
                    </Col>
                  </Row>
        
                  <Row>
                    <Col xs={6} md={4}>
                    <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control type="text"/>
                    </Col>
                    <Col xs={6} md={4}>
                    <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                    <Col xs={6} md={4}>
                    <Form.Label>Valor Total</Form.Label>
                        <Form.Control type="number"/>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button className="bg-blue text-yellow">Guardar</Button>
              </Modal.Footer>
            </Modal>
          );
        
        
        


    }

    export default ModalServicio;



   