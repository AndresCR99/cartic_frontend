
const isLocal = process.env.NODE_ENV === 'development';
<<<<<<< HEAD
let API_URL = isLocal ? 'http://localhost:8080/api': 'http://3.86.224.47:8080/api';
=======
let API_URL = isLocal ? 'http://3.86.224.47:8080/api': 'https://3.86.224.47:8080/api';
>>>>>>> 934d62a5f0183a063baf4126f43b50d9cd2f4af4
export const LOGIN_ENDPOINT = API_URL + "/usuarios/login"
export const REGISTRO_ENDPOINT= API_URL + "/usuarios";
export let ORDEN_ENDPOINT= API_URL + "/ordenes_servicios";
export const VEHICULO_ENDPOINT= API_URL + "/vehiculos";
