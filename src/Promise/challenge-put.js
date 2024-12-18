// PUT = Actualizar un objeto

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    title: 'Objeto actual',
    price: 253
}  // No es necesario agregar todos los elementos del objeto, sólo los que necesitamos actualizar. 

putData(`${API}/products/69`, dataUpdate)
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));