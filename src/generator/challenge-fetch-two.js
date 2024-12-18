import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* iterData(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products[2]);

        console.log('-----------------------------------')

        const product = await fetchData(`${urlApi}/products/${products[2].id}`);
        yield console.log(product.title);

        console.log('-----------------------------------')

        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);

    } catch (error) {
        console.log('Error', error);
    } 
}

const dt = iterData(API);
dt.next();
dt.next();
dt.next();