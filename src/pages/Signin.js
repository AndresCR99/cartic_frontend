import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import validator from 'validator';
import  { useDispatch, useSelector } from 'react-redux'
import { loginUsuario } from '../connection/helpers/autenticacionAcciones';
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio';
import { SigninForm } from "../components/Login/SigninForm";

function Signin() {

    const[errores, setErrores] = useState({});
    const dispatch= useDispatch();
    const conectado= useSelector(state=>state.auth.conectado);
    const history= useHistory();

    useEffect(() => {
        if(conectado){
            history.push("/");
        }
    });

    const login= ({userName, password})=>{

        const errores={}
        setErrores(errores)
        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede estar vacio";
        }

        if(validator.isEmpty(password)){
            errores.password = "La contraseña no puede estar vacia";
        }

        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }


        dispatch(loginUsuario({userName, password}))
        .then(response=>{

        }).catch(error => {
            setErrores({autenticacion:"No se puede iniciar sesion con los datos ingresados"})
        })
        
    }

    return(

        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="shadow mt-5 mb-5">
                        <Card.Header className="text-center text-yellow bg-blue">
                            Cartic
                        </Card.Header>
                        {errores.autenticacion && <Alert variant="danger">{errores.autenticacion}</Alert>}
                        <SigninForm errores = {errores} enviarCallback={login}></SigninForm>
                        <div className="mt-3">
                            <Link to={'/registro'}>¿No tienes una cuenta? Registrate aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export {Signin}