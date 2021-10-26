import { cerrarSesion, setUsuarioActual } from "./autenticacionAcciones";
import { store } from "../../store";
import { setAutenticacionToken } from "./setAutenticacionToken";
import jwt_decode from "jwt-decode";

const comprobarToken=()=>{
    if(localStorage.jwtToken){
        setAutenticacionToken(localStorage.jwtToken);
        const decodificado = jwt_decode(localStorage.jwtToken);

        store.dispatch(setUsuarioActual({
            usuario:decodificado,
            conectado:true
        }))
        
        const tiempoActual= Math.floor(Date.now() / 1000);

        if(decodificado.exp < tiempoActual){
            store.dispatch(cerrarSesion());
            window.location.href="/login"
        }
    }
}

export {comprobarToken}