import React from "react";
import {  Card } from "react-bootstrap";
import { FaEdit,FaTrashAlt } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter} from "reactstrap";
import { ORDEN_ENDPOINT} from "../connection/helpers/endpoints";
import axios from 'axios';



class App extends React.Component {
 
  state = {
    data: [],
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

peticionesGet(){
axios.get(ORDEN_ENDPOINT).then(response => {this.setState({data:response.data})})

}

peticionesPost=async()=>{
  delete this.state.form.id;
axios.post(ORDEN_ENDPOINT, this.state.form).then(response=>{
  this.modalInsertar();
  this.peticionesGet();
  }).catch(error=>{console.log(error)})
  this.setState({ modalInsertar: false})

}

seleccionarOrden=(orden)=>{
this.state({ 
  form: {
    id:orden.id,
  fecha:orden.fecha,
nombreServicio:orden.nombreServicio,
descripcionServicio:orden.descripcionServicio,
placaVehiculo: orden.placaVehiculo,
nombreCliente: orden.nombreCliente,
nombreTecnico: orden.nombreTecnico,
valorServicio: orden.valorServicio,
  },

})

}

  componentDidMount(){this.peticionesGet();}

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
        arreglo[contador].fecha = dato.fecha;
        arreglo[contador].placaVehiculo = dato.placaVehiculo;
        arreglo[contador].nombreCliente = dato.nombreCliente;
        arreglo[contador].nombreTecnico = dato.nombreTecnico;
        arreglo[contador].nombreServicio = dato.nombreServicio;
        arreglo[contador].descripcionServicio = dato.descripcionServicio;
        arreglo[contador].valorServicio = dato.valorServicio;
        
        
        
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

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  render() {
    const {form} = this.state;
    return (
      
      <>
      <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            <h2>Registro Orden de Trabajo</h2> 
                        </Card.Header>
        <Container>
        <br />
          <Button className="bg-blue text-yellow" onClick={()=>this.mostrarModalInsertar()}>Nueva Orden de Trabajo</Button>
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
                  <td>{new Intl.NumberFormat("en-EN").format(dato.valorServicio)}</td>
                  <td>
                    <Button
                      className="bg-yellow text-blue"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      <FaEdit />

                    </Button>{" "}
                    <Button className="bg-blue text-yellow" onClick={()=> this.eliminar(dato)}><FaTrashAlt /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader className="text-yellow bg-blue">
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
              className="bg-yellow text-blue"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              className="bg-blue text-yellow"
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
                value={form.fecha}
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
                value={form.nombreServicio}
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
                value={form.descripcionServicio}
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
                value={form.placaVehiculo}
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
                value={form.nombreCliente}
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
                value={form.nombreTecnico}
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
                value={form.valorServicio}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              className="bg-yellow text-blue"
              onClick={() => this.peticionesPost()}
            >
              Insertar
            </Button>
            <Button
              className="bg-blue text-yellow"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </Card>
      </>
    );
  }
}
export default App;