import React, {Fragment} from "react";
import { Container } from "react-bootstrap";

import PanelTecnico from "../components/Tecnico/PanelTecnico";


const Tecnico = () => {

    return(

        <Fragment>
            <Container>
                <PanelTecnico/>
            </Container>
        </Fragment>
    )
}

export default Tecnico;