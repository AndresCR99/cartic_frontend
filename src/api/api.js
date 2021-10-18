import axios from "axios";
import Endpoints from "./endpoints";

const endpoints = Endpoints();

export const login = (usuario, contrasena) =>{

    axios.post(endpoints.URL_LOGIN, {
        userName: usuario,
        password: contrasena
      },{headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}})
      .then(function (response) {
        console.log(response);
        const{authorization} = response.headers;
        localStorage.setItem('jwt_token', authorization);

      })
      .catch(function (error) {
        console.log(error);
      });

}