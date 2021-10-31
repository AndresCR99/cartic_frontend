import React, { useEffect, useState} from 'react'
import { Alert, Card, Col, Container, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import validator from 'validator'
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio'

import { registroUsuario, loginUsuario } from '../connection/helpers/autenticacionAcciones'
import { SignupForm } from '../components/Login/SignupForm'





function Signup() {

    const [errores, setErrores] = useState({});
    const dispatch=useDispatch();
    const conectado= useSelector(state=> state.auth.conectado);
    const history= useHistory();

    useEffect(()=>{
        if(conectado){
            history.push("/");
        }
    });
    const register=({userName, password, nombre, correo}) => {
        const errores={};

        if(validator.isEmpty(nombre)){
            errores.nombre = "El nombre no puede ser vacio";
        }
        if(!validator.isEmail(correo)){
            errores.correo = "El correo no puede ser vacio";
        }
        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede ser vacio";
        }
        if(!validator.isLength(password, {min:8, max:30})){
            errores.password = "la contraseña debe tener entre 8 y 30 caracteres";
        }
        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }

        dispatch(registroUsuario({userName, password, nombre, correo}))
        .then(response=> {
            dispatch(loginUsuario({userName, password}));
        })
        .catch(err=>{
            setErrores({ registro: err.response.data.message});
        });
    }
    return (

        <Container className="mt-3">
            <Row>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3 }}>
                    <Card body>
                        {errores.registro && <Alert variant="danger">{errores.registro}</Alert>}
                        <h3>Registrar Usuario</h3>
                        <SignupForm errores={errores} enviarCallback={register}></SignupForm>
                        <div className="mt-3">
                            <Link to={'/login'}>¿Tienes una cuenta? Iniciar sesión aquí</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Signup}