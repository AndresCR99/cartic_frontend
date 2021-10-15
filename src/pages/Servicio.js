import React, {Fragment} from "react";
import  {useState} from 'react';
import { Container,Button, Row, Col} from "react-bootstrap";
import PanelServicio from "../components/Servicio/PanelServicio";
import ModalServicio from "../components/Servicio/ModalServicio";
import PanelValoresServicio from "../components/Servicio/PanelValoresServicio";
import TablaServicio from "../components/Servicio/TablaServicio";




const Servicio = () => {
    const [modalShow, setModalShow] = useState(false);
    
   return(

        <Fragment>

<Container>
  <Row>
    <Col><PanelServicio /></Col>
    <Col><PanelValoresServicio/></Col>
  </Row>
           
           
            
            
            
            <ModalServicio/>
            <Button  className="m-4 bg-blue text-yellow"variant="primary" onClick={() => setModalShow(true)}>+ Servicio</Button>
            <ModalServicio show={modalShow} onHide={() => setModalShow(false)} />
            <TablaServicio/>
            
            </Container>
        </Fragment>
    )

}
export default Servicio;