import React, {Fragment} from "react";
import  {useState} from 'react';
import { Container,Button } from "react-bootstrap";
import PanelServicio from "../components/Servicio/PanelServicio";
import ModalServicio from "../components/Servicio/ModalServicio";




const Servicio = () => {
    const [modalShow, setModalShow] = useState(false);
    <ModalServicio show={modalShow} onHide={() => setModalShow(false)} />
   return(

        <Fragment>
            <Container>
            <PanelServicio/>
            <ModalServicio/>
            <Button  className="m-4"variant="primary" onClick={() => setModalShow(true)}>+ Servicio</Button>
            </Container>
        </Fragment>
    )

}
export default Servicio;