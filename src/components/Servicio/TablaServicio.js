import React from 'react';
import {Table, Button} from "react-bootstrap";
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'; 



const TablaServicio = ({servicios, handleShow, setLoading, handleShowDelete}) => {
    return ( 
          <Table>
            <thead>
              <tr>
                <th>Id Orden</th>
                <th>Fecha</th>
                <th>Placa</th>
                <th>Nombre Cliente</th>
                <th>Nombre Técnico</th>
                <th>Servicio</th>
                <th>Observación</th>
                <th>Valor</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
                {servicios.map((servicio, index) => (
                    <tr key={servicio.id}>
                        <td>{servicio.id}</td>
                        <td>{servicio.fecha}</td>
                        <td>{servicio.placaVehiculo}</td>
                        <td>{servicio.nombreCliente}</td>
                        <td>{servicio.nombreTecnico}</td>
                        <td>{servicio.nombreServicio}</td>
                        <td>{servicio.descripcionServicio}</td>
                        <td>{servicio.valorServicio}</td>
                        <td>
                           <Button className="btn btn-warning btn-sm"  onClick={() => handleShow('update', servicios[index])}><i className="fas fa-edit text-light"></i></Button>
                       </td>
                        <td>
                           <Button className="btn btn-danger btn-sm" onClick={() => handleShowDelete(servicios[index])}><i className="far fa-trash-alt"></i></Button>
                       </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
 
export default TablaServicio;