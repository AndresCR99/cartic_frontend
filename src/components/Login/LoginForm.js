import React, { useState } from 'react'
import logo from "../../images/logo.png";
import { Form, Card, Image, Button } from "react-bootstrap";
import { login } from '../../api/api';

const LoginForm = () =>{

    const[userName, setUserName]=useState("");
    const [password, setPassword]= useState("");

    const enviarLogin = (e) => {
        e.preventDefault();
        console.log(userName, password)
        login(userName, password);
        
    }
    return (
        <Form onSubmit={enviarLogin} >
            <Card.Body>
                <div className="text-center mt-2">
                    <Image src={logo} height={100} />
                </div>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingrese un usuario" 
                        value={userName}
                        onChange={e=>setUserName(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        Nunca compartas tus credenciales con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Ingrese de nuevo la contraseña" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    </Form.Group>
            </Card.Body>
            <Card.Footer className="text-center mt-1">
                    <Button variant="primary" type="submit" className="text-yellow bg-blue">
                        Ingresar
                    </Button>
            </Card.Footer>
        </Form>
    )
}

export default LoginForm;