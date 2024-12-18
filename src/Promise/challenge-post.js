import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, { //Creamos un objeto con todos los datos para que nos reciba la API, ej. usuario y contraseña.
        method: 'POST',
        mode: 'cors', //con cors enviamos los permisos, ver info: https://developer.mozilla.org/en-US/docs/Glossary/CORS
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    title: "Objeto viejo",
    price: 100,
    description: "A great lompa",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]       
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));