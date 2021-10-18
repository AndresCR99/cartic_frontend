import React from "react";
import { Table } from "react-bootstrap";





const TablaServicio = () => {
    return(

        <Table responsive>
  <thead className="bg-blue text-yellow">
    <tr>
      <th>#</th>
      <th>Id Servicio</th>
      <th>Descripción Servicio</th>
      <th>Cantidad</th>
      <th>Valor Unitario</th>
      <th>Valor Total</th>
      <th>Modificar</th>
      <th>Eliminar</th>
      {/* {Array.from({ length: 8 }).map((_, index) => (
        <th key={index}>Table heading</th> */}
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 7 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 7 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 7 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>             
                    
    )
}

export default TablaServicio;