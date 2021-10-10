import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "../items/Select";

var options = {
    selected : 0,
    option_id : [0, 1,2],
    options : [{name: 'Wilfrido Vargas'}, {name: 'Romario Najari'},{name: 'Wiliam Torre Alba'}]

}

const PanelTecnico = () => {
    return(

        <div className="row mt-5">
            <div className="col-sm-10 offset-sm-1">
                <h1>Histórico Técnico</h1>
                <div className="card shadow mt-3">
                    <div className="card-body">

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Técnico</Form.Label>
                            <Col sm="10">
                                <Select
                                    options={options}
                                />

                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Total servicios
                            </Form.Label>
                            <Col sm="10">
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{height: "35px"}} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">Ganancia total</Form.Label>
                            <Col sm="10">
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{height: "35px"}} />
                            </Col>
                        </Form.Group>
                    </Form>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelTecnico;