// DELETE = Eliminar un objeto

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const idNumber = 69;

deleteData(`${API}/products/${idNumber}`)
    .then(() => {
        console.log(`El producto con ID: ${idNumber} ha sido eliminado`);
    });