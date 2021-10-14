import React, {Fragment} from "react";
import { Container } from "react-bootstrap";

import PanelTecnico from "../components/Tecnico/PanelTecnico";
import TablaTecnico from "../components/Tecnico/TablaTecnico";


const Tecnico = () => {

    return(

        <Fragment>
            <Container >
                <PanelTecnico/>
                <TablaTecnico/>
            </Container>
        </Fragment>
    )
}

export default Tecnico;