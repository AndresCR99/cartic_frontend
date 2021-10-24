import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"


function SignupForm({errores, enviarCallback}) {

    const [nombre, setNombre] = useState("");    
    const [correo, setCorreo] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        enviarCallback({userName, password, nombre, correo});
    }

    return (
        <Form onSubmit={enviarFormulario}>

            <Form.Group className="mt-3 mb-3" controlId="nombre"> 
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                isInvalid={errores.nombre} />
                <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-3 mb-3" controlId="correo"> 
                <Form.Label>Correo</Form.Label>
                <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={correo}
                onChange={e=>setCorreo(e.target.value)}
                isInvalid={errores.correo}/>
                <Form.Control.Feedback type="invalid">
                    {errores.correo}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-3 mb-3" controlId="userName"> 
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                value={userName}
                onChange={e=>setUserName(e.target.value)}
                isInvalid={errores.userName}/>
                <Form.Control.Feedback type="invalid">
                    {errores.userName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-3 mb-3" controlId="password"> 
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password}/>
                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
                Crear usuario
            </Button>
        </Form>
    )
}

export {SignupForm}