import React, {Fragment, useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Container} from "reactstrap";
import { ORDEN_ENDPOINT } from "../connection/helpers/endpoints";
import Cookies from 'js-cookie';
import TablaServicio from "../components/Servicio/TablaServicio";
import ModalServicio from "../components/Servicio/ModalServicio";
import ModalDelete from "../components/Servicio/ModalDelete";
const OrdenServicio = () => {

  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [servicio, setServicio] = useState({});
  const [typeModal, setTypeModal] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);


  const handleShowDelete = (servicio = {}) => {

    if(showModalDelete){
      setShowModalDelete(false);
      setServicio({})
    }else{
      setShowModalDelete(true);
      setServicio({...servicio})
    }
  }

  const handleSubmitDelete = id => {

    let configBase = {
      headers:{
      'Accept':'application/json', 
      'Content-Type':'application/json',
      'Authorization': Cookies.get("jwtToken")}
    }

    configBase['method'] = 'DELETE'

    fetch(ORDEN_ENDPOINT + "/" + id, configBase)
    .then(res => res.text())
    .then(res => console.log(res))
    
    setLoading(true);
    handleShowDelete()
    setServicio({})
  }

  const handleShow = (tipoModal, servicio = {}) => {
    
    if(showModal){
      setShowModal(false);
      setServicio({})
    }else{

      setTypeModal(tipoModal)

      if (tipoModal==='create'){


        if(servicios.length< 1){
          servicio['id']=0
          setServicio(servicio)
        }else{

          let lastItem = servicios[servicios.length - 1]
          let idOrden = lastItem.id + 1
          servicio['id']= idOrden
          setServicio(servicio)
        }


      } else if (tipoModal==='update'){
        setServicio({...servicio})
        
      }
      setShowModal(true)
    }
  }
    
  const serviciosGet = () => {
    fetch(ORDEN_ENDPOINT,{
      headers:{
      'Accept':'application/json', 
      'Content-Type':'application/json',
      'Authorization': Cookies.get("jwtToken")}})
    .then(res => res.json())
    .then(res => setServicios(res))
  }

  const handleSubmit = () => {

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
    valorServicio = parseFloat(valorServicio)
    if (
      id === '' ||
      fecha === '' ||
      nombreServicio === '' || 
      descripcionServicio === '' || 
      placaVehiculo === '' || 
      nombreCliente === '' || 
      nombreTecnico === '' || 
      valorServicio === '' ) {
        alert('Todos los campos son obligatorios')
        return
    }

    let configBase = {
      headers:{
      'Accept':'application/json', 
      'Content-Type':'application/json',
      'Authorization': Cookies.get("jwtToken")}
    }

    if (typeModal === 'create') {
      configBase['method'] = 'POST'
    } else {
      configBase['method'] = 'PUT'
    } 

    configBase['body'] = JSON.stringify(servicio);

    fetch(ORDEN_ENDPOINT, configBase)
    .then(res => res.text())
    .then(res => console.log(res))

    handleShow('')
    setServicio({})
    setLoading(true);
}

  useEffect(() => {
    serviciosGet()
    setLoading(false)
  }, [loading])


  return (

    <Fragment>

    <Card className="shadow mt-5 mb-5">
           <Card.Header className="text-center text-yellow bg-blue">
               <h2>Registro Orden de Trabajo</h2> 
           </Card.Header>
        <Container>
         <br />
           <Button className="bg-blue text-yellow" onClick={() => handleShow('create')}>Nueva Orden de Trabajo</Button>
           {showModal? (

              <ModalServicio  
              showModal={showModal}
              handleShow={handleShow}
              servicio={servicio} 
              setServicio={setServicio}
              handleSubmit={handleSubmit}
              typeModal={typeModal}
              />
           ): null}

           {showModalDelete? (

              <ModalDelete  
              showModalDelete={showModalDelete}
              handleShowDelete={handleShowDelete}
              servicio={servicio} 
              handleSubmitDelete={handleSubmitDelete}
              />
           ): null}
           <br />
           <br />
           <TablaServicio servicios={servicios}  handleShow={handleShow} setLoading={setLoading} handleShowDelete={handleShowDelete} />
        </Container>
      </Card>
        </Fragment>

  )
}

export default OrdenServicio;