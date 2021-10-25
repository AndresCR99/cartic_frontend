import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';


export default function RutaPrivada({component:Component, ...rest}){

    const conectado = useSelector(state=>state.auth.conectado);

    return(
        <Route
        {...rest}
            render={
                props => conectado===true 
                ? (<Component {...props}></Component>) 
                : (<Redirect to="/login"></Redirect>) 
            }
        
        />
    );

}



