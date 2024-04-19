//Ciclos de vida de un componente
//Los ciclo de vida de un componente son una serie de metodos que se ejecutan en un orden especifico, estos metodos nos permiten realizar acciones en diferentes momentos de la vida de un componente, como por ejemplo, cuando el componente se monta, se actualiza o se desmonta.

//Estados de un componente: Los estados de un componente son las diferentes situaciones por las que pasa un componente a lo largo de su vida, estos estados son:

//1. Montaje: Estos metodos se ejecutan cuando el componente se monta en el DOM
//2. Actualizacion: Estos metodos se ejecutan cuando el componente se actualiza
//3. Desmontaje: Estos metodos se ejecutan cuando el componente se desmonta del DOM
//4. Manejo de errores: Estos metodos se ejecutan cuando se produce un error en el componente

//Los eventos como el onClick hacen que el componente se actualice, generando un "Re-render" del componente, es decir, el componente se vuelve a renderizar, y por lo tanto, se ejecutan los metodos de actualizacion del ciclo de vida del componente por lo que se pierde el valor del componente.


//Hooks
//Los hooks son funciones que permiten a los componentes funcionales tener caracteristicas que solo los componentes de clase tenian, como por ejemplo, estados, efectos y contextos.Lo que nos permite tener un mayor control sobre los componentes funcionales.
//Para poder usar los hooks, debemos importarlos desde react, como por ejemplo:
//import React, {useState, useEffect, useContext} from 'react'


//useState(): Este hook nos permite usar estados en componentes funcionales
//Esta funcion nos devuelve un array con dos elementos, el primer elemento es el valor del estado, y el segundo elemento es una funcion que nos permite cambiar el valor del estado. 
//Se usan los corchetes para desestructurar el array que nos devuelve useState compuesto por el valor del estado y la funcion que nos permite cambiar el valor del estado.
//Ejemplo:

let [contador, setContador] = useState(0)
console.log(contador) //0

let funcionContador = () => {
    setContador(contador + 1)
}

//useEffect(): Este hook nos permite usar efectos en componentes funcionales
//Esta funcion nos permite ejecutar efectos secundarios en componentes funcionales, como por ejemplo, realizar peticiones a una API, suscribirnos a eventos, entre otros.

//useContext(): Este hook nos permite usar contextos en componentes funcionales
//Esta funcion nos permite acceder a los valores de un contexto en componentes funcionales.