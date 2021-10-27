import React from "react";
import { Table, Button } from "react-bootstrap";
import ModalEditarServicio from "./ModalEditarServicio";



const data = [
  { id: 2,
    fecha: "2021-10-28",
    nombreServicio: "secado",
    descripcionServicio: "servicio de secado con alto costo",
    placaVehiculo: "HQX482",
    nombreCliente: "luis paternostro",
    nombreTecnico: "ellen calcio",
    valorServicio: "500000.0" },
  { 
    id: 2,
    fecha: "2021-10-28",
  nombreServicio: "secado",
  descripcionServicio: "servicio de secado con alto costo",
  placaVehiculo: "HQX482",
  nombreCliente: "luis paternostro",
  nombreTecnico: "ellen calcio",
  valorServicio: "500000.0" },
  { id: 2,
    fecha: "2021-10-28",
  nombreServicio: "secado",
  descripcionServicio: "servicio de secado con alto costo",
  placaVehiculo: "HQX482",
  nombreCliente: "luis paternostro",
  nombreTecnico: "ellen calcio",
  valorServicio: "500000.0" },
  
];




class TablaServicio extends React.Component  {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
    fecha: "",
  nombreServicio: "",
  descripcionServicio: "",
  placaVehiculo: "",
  nombreCliente: "",
  nombreTecnico: "",
  valorServicio: "",
    },
    
    modalShow:false, 
    setModalShow:false,

  };
render(){
  
    return(

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
        </tr>
      </thead>

      <tbody>
        {this.state.data.map((dato) => (
          <tr key={dato.id}>
            
            <td>{dato.fecha}</td>
            <td>{dato.placaVehiculo}</td>
            <td>{dato.nombreCliente}</td>
            <td>{dato.nombreTecnico}</td>
            <td>{dato.nombreServicio}</td>
            <td>{dato.descripcionServicio}</td>
            <td>{dato.valorServicio}</td>
            <td>
            <Button  className="m-4 bg-blue text-yellow"variant="primary" onClick={() => setModalShow(true)}>+ Servicio</Button>
            <ModalEditarServicio show={modalShow} onHide={() => setModalShow(false)} />
              {/* <Button
                color="primary"
                onClick={() => this.mostrarModalActualizar(dato)}
              >
                Editar
              </Button>{" "} */}
              <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
       
                    
    )
}
}

export default TablaServicio;