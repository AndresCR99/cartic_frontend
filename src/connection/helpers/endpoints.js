
const isLocal = process.env.NODE_ENV === 'development';
let API_URL = isLocal ? 'http://3.86.224.47:8080/api': 'http://3.86.224.47:8080/api';
export const LOGIN_ENDPOINT = API_URL + "/usuarios/login"
export const REGISTRO_ENDPOINT= API_URL + "/usuarios";
export let ORDEN_ENDPOINT= API_URL + "/ordenes_servicios";
export const VEHICULO_ENDPOINT= API_URL + "/vehiculos";
