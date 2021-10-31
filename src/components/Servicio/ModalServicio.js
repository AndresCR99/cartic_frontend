import React from "react";
import { Modal, Button,  FormGroup} from "react-bootstrap";

const ModalServicio = (
  {
    showModal,
    handleShow,
    servicio,
    setServicio,
    handleSubmit,
    typeModal
  }) => {

  const handleChange = e => {
    setServicio({
      ...servicio,
      [e.target.name]: e.target.value
    })

  }

  let {
    id,
    fecha,
    nombreServicio,
    descripcionServicio,
    placaVehiculo,
    nombreCliente,
    nombreTecnico,
    valorServicio,
  } = servicio

    return(
      <Modal show={showModal}>
      <Modal.Header className="text-yellow bg-blue">
       <div><h3>{typeModal === 'create' ? "Crear": "Editar"} Registro</h3></div>
      </Modal.Header>

      <Modal.Body>    
          <FormGroup>
            <label>
            Id Orden:
            </label>
            <input
              className="form-control"
              readOnly
              type="text"
              onChange={handleChange}
              value={id}
            />
          </FormGroup>
        <FormGroup>
          <label>
            Fecha: 
          </label>
          <input
            className="form-control"
            name="fecha"
            type="date"
            onChange={handleChange}
            value={fecha || ""}
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Servicio: 
          </label>
          <input
            className="form-control"
            name="nombreServicio"
            type="text"
            onChange={handleChange}
            value={nombreServicio || ""}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Descripción Servicio:
          </label>
          <input
            className="form-control"
            name="descripcionServicio"
            type="text"
            onChange={handleChange}
            value={descripcionServicio || ""}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Placa:
          </label>
          <input
            className="form-control"
            name="placaVehiculo"
            type="text"
            onChange={handleChange}
             value={placaVehiculo || ""}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Nombre Cliente:
          </label>
          <input
            className="form-control"
            name="nombreCliente"
            type="text"
            onChange={handleChange}
             value={nombreCliente || ""}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Nombre Técnico:
          </label>
          <input
            className="form-control"
            name="nombreTecnico"
            type="text"
            onChange={handleChange}
             value={nombreTecnico || ""}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Valor:
          </label>
          <input
            className="form-control"
            name="valorServicio"
            type="text"
            onChange={handleChange}
             value={valorServicio || ""}
          />
        </FormGroup>



      </Modal.Body>

      <Modal.Footer>
        <Button
          className="bg-yellow text-blue"
          onClick={handleSubmit}
          >
          {typeModal === 'create' ? "Crear": "Editar"}
        </Button>
        <Button
          className="bg-blue text-yellow"
          onClick={handleShow}
          >
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>);
        
        
        


    }

    export default ModalServicio;



   