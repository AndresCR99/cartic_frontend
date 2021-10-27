import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

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

class App extends React.Component {
 
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
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Estás Seguro que deseas Eliminar el elemento? "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button className="bg-blue text-yellow" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
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
                <th>Acciones</th>

              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  
                  <td>{dato.id}</td>
                  <td>{dato.fecha}</td>
                  <td>{dato.placaVehiculo}</td>
                  <td>{dato.nombreCliente}</td>
                  <td>{dato.nombreTecnico}</td>
                  <td>{dato.nombreServicio}</td>
                  <td>{dato.descripcionServicio}</td>
                  <td>{dato.valorServicio}</td>
                  <td>
                    <Button
                      className="bg-blue text-yellow"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button className="bg-blue text-yellow" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id Orden:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
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
                onChange={this.handleChange}
                value={this.state.form.fecha}
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
                onChange={this.handleChange}
                value={this.state.form.nombreServicio}
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
                onChange={this.handleChange}
                value={this.state.form.descripcionServicio}
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
                onChange={this.handleChange}
                value={this.state.form.placaVehiculo}
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
                onChange={this.handleChange}
                value={this.state.form.nombreCliente}
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
                onChange={this.handleChange}
                value={this.state.form.nombreTecnico}
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
                onChange={this.handleChange}
                value={this.state.form.valorServicio}
              />
            </FormGroup>



          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Orden Servicio</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Descripción: 
              </label>
              <input
                className="form-control"
                name="descripcionServicio"
                type="text"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;