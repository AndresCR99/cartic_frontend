import React from "react";
import { Modal, Button,  FormGroup} from "react-bootstrap";

const ModalDelete = (
    {
        showModalDelete,
        handleShowDelete,
        servicio,
        handleSubmitDelete
    }
) => {

  let {
    id,
    placaVehiculo,
  } = servicio
    return(
        <Modal show={showModalDelete}>
      <Modal.Header className="text-yellow bg-blue">
       <div><h3>Eliminar Registro</h3></div>
      </Modal.Header>
      <Modal.Body>    
          <div className='text-center'>Desea eliminar la orden N° {id}, del vehiculo {placaVehiculo}? </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          className="bg-yellow text-blue"
          onClick={() => handleSubmitDelete(id)}
          >
          Eliminar
        </Button>
        <Button
          className="bg-blue text-yellow"
          onClick={handleShowDelete}
          >
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
    );

}

export default ModalDelete;