
const Endpoints = () => {

    const isLocal = process.env.NODE_ENV === 'development';
    let API_URL = isLocal ? 'http://localhost:8080/api': 'https://127.0.0.1:8080/api';
    
    let URLS = {
        URL_CLIENTES: `${API_URL}/clientes`,
        URL_LOGIN: `${API_URL}/usuarios/login`,
        URL_ORDEN: `${API_URL}/ordenes`,
        URL_VEHICULO: `${API_URL}/vehiculos`        
    }

    return URLS;
}

export default Endpoints;