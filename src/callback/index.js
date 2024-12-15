// Ejemplo de callback sincrónico

function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

// Ejemplo de callback asincrónico

/* setTimeout(function () {
    console.log("Hola JavaScript");
}, 5000) */

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');


export function execCallback(callback) {
    // Tu código aquí 👈
    console.log(`Excecute myFunc after ${callback}`);
    function myFunc() {
        console.log(`Te saludo ${callback} después`);
    }
    myFunc();
  };

setTimeout(execCallback, 2000, '2s');