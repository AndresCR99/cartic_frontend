import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";



const TablaTecnico = () => {
    return (
        <Row className="mt-5 mb-5">
            <Col md={{ span: 10, offset: 1 }}  >
                <Table striped bordered hover size="sm" className="shadow">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Servicio</th>
                        <th>Fecha</th>
                        <th>Valor</th>
                        <th>Ganancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>

                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TablaTecnico;