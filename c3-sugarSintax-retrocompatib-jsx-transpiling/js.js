//Repaso Sugar Sintax-------------------------------------------------------------
//Sugar Sintax es una forma de escribir codigo de forma mas sencilla y legible. No es un nuevo lenguaje, sino una forma de escribir codigo de forma mas sencilla y legible.

//Operaor ternario
//El operador ternario es una forma de escribir un if else en una sola linea.Solo aplicable para casos muy sencillos que solo tienen un if y un else.
/* let num = 10;

num > 5 ? console.log('Es mayor a 5') : console.log('Es menor a 5'); */



//Spread Operator
//El spread operator es un operador que nos permite expandir elementos.Lo que significa que podemos tomar un array y expandirlo en sus elementos.
/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//Sin spread operator
let arr3 = [arr1, arr2];
console.log(arr3); //[[1, 2, 3], [4, 5, 6]]

//Con spread operator
let arr4 = [...arr1, ...arr2];
console.log(arr4); //[1, 2, 3, 4, 5, 6] */



//Desestructuración
//La desestructuración es una forma de extraer datos de arrays y objetos y asignarlos a variables.
/* let objetoA = {
    nombre: 'Juan',
    apellido: 'Perez'
};

//Sin desestructuración
let nombre = objetoA.nombre;
let apellido = objetoA.apellido;

//con desestructuración
let { nombre, apellido } = objetoA; */



//Deep Matching
//Sirve para renombrar las variables que se extraen de un objeto al cual se le aplica la desestructuración.
/* let objetoA = {
    nombre: 'Juan',
    apellido: 'Perez'
};

//Se cambia el nombre de las variables al extraerlas del objeto.
let { nombre: primerNombre, apellido: primerApellido } = objetoA;  */



//Default Values
//Se pueden asignar valores por defecto a las variables que se extraen de un objeto o array.
/* let objetoA = {
    nombre: 'Juan',
    apellido: 'Perez'
};

//Se asigna un valor por defecto a la variable que se extrae del objeto que se aplicara en caso de que el valor extraido sea undefined.
let { nombre, apellido, edad = 30 } = objetoA; */






//Retrocompatibilidad y Polyfills-------------------------------------------------------------
//Existen  funciones que no son soportadas por todos los navegadores, por lo que se debe tener cuidado al usarlas.

//Polyfills
//Los polyfills son funciones que se pueden agregar a un proyecto para que este sea compatible con navegadores antiguos. React ya  tiene polyfills para navegadores antiguos.
//Es decir, puede suceder que un navegador no soporte el metodo .find() de los arrays, por lo que se puede agregar un polyfill para que este metodo sea soportado por el navegador.
//React ya tiene polyfills para navegadores antiguos por lo que no es necesario agregarlos manualmente.
//Para evitar que tengamos que programar la logica equivalente a ese metodo o funcion que no es soportado por X navegador

//Ejemplo funcion .find()
/* let arr = [1, 2, 3, 4, 5];

let elementoEncontrado = arr.find((elemento) => elemento === 3);
console.log(elementoEncontrado); */ //3

//En caso de que el navegador no soporte el metodo find() se deberia hacer de esta forma

//Ejemplo A
/* let arr = [1, 2, 3, 4, 5];

function encontrarElemento(array, elementoAencontrar) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoAencontrar) {
            return array[i];
        }
    }
}
let elementoEncontrado = encontrarElemento(arr, 3);
console.log(elementoEncontrado); //3 */

//Ejemplo B
/* let arr = [1, 2, 3, 4, 5];

function encontrarElemento(array, elementoAencontrar) {
    for (let elemento of array) {
        if (elemento === elementoAencontrar) {
            return elemento;
        }
    }
}
let elementoEncontrado = encontrarElemento(arr, 3);
console.log(elementoEncontrado); */ //3






//Webpack-----------------------------------------------------------------------------
//Webpack es un module bundler, es decir, es una herramienta que nos permite empaquetar nuestro codigo en modulos y archivos para que sea mas facil de manejar.
//Webpack nos permite tener un solo archivo de salida que contiene todo nuestro codigo y que es el que se va a ejecutar en el navegador.
//React utiliza Webpack para empaquetar el codigo de los componentes y que este sea mas facil de manejar y ya viene configurado por defecto en Create React App.






//Transpiling-----------------------------------------------------------------------------
//Transpiling es el proceso de convertir el codigo de un lenguaje a otro. En el caso de React, el codigo de JSX se convierte a JavaScript puro para que pueda ser interpretado por el navegador.






//JSX-----------------------------------------------------------------------------
//JSX es una extension de JavaScript que nos permite escribir HTML en nuestro codigo de JavaScript.
//Se escribre dentro del return de un componente de React.
//Si se quiere escribir js dentro de JSX se debe hacer entre llaves.{}.
//Si se quiere utilizar una clase de CSS en JSX se debe hacer con className en lugar de class.

//Ejemplo\

//Componente en JSX
/* function componente() {
    let nombre = 'Juan';

    return (
        <div>
            <h1 className="claseComponente">Hola {nombre}</h1>
        </div>
    );
} */

//Componente en JavaScript
/* function componente() {
    let nombre = 'Juan';

    return React.createElement('div', null, React.createElement('h1', { className: 'claseComponente' }, `Hola ${nombre}`));
} */