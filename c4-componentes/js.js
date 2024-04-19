//Componentes React
//En React, un componente es una función que retorna JSX. El cual es un módulo que encapsula la lógica y la vista de un elemento de la interfaz de usuario.
//Los componentes son reutilizables y se pueden anidar unos dentro de otros para crear interfaces de usuario más complejas.


//SOLO PUEDE RETORNAR UN ELEMENTO JSX, PERO ESTE PUEDE CONTENER VARIOS ELEMENTOS HIJOS DENTRO DE EL.SI SE DESEA RETORNAR VARIOS ELEMENTOS, ESTOS DEBEN ESTAR CONTENIDOS DENTRO DE UN ELEMENTO PADRE.

//Existen tipos de componentes en React:
//Componentes de función: Son funciones que retornan JSX. Se recomienda usar este tipo de componentes siempre que sea posible.

//Componentes de clase: Son clases que extienden de React.Component y tienen un método render que retorna JSX. Este tipo de componentes se utilizaban antes de la llegada de los hooks, pero actualmente se recomienda usar componentes de función.

//Componentes de estado: Son componentes que tienen un estado interno que puede cambiar a lo largo del tiempo. Se utilizan para manejar la lógica y el estado de un componente.

//Componentes contenedores: No ejecutan lógica de presentación, sino que contienen a otros componentes y les pasan propiedades. Tambien llamados PAGES


//COMPONENTES DE FUNCION
//Creación de un componente-----------------------------------
//Para crear un componente en React, debemos crear una función que retorne JSX. No es necesario guardar el componente en una variable, pero es una buena práctica hacerlo.
//Se recomienda usar usar PascalCase para nombrar los componentes.
//Se recomienda usar arrow functions para crear los componentes por su simplicidad y legibilidad.

//Ejemplo de un componente de función:
/* let titulo = () => {
    return <h1>Hola Mundo</h1>
} */



//Exportar un componente-----------------------------------
//Para poder utilizar un componente en otro archivo, debemos exportarlo.Tenemos dos formas de exportar un componente:

//Exportar por defecto: export default NombreComponente(Sirve para exportar un solo componente por archivo)
//Ej:
/* let titulo = () => {
    return <h1>Hola Mundo</h1>
}
export default titulo */

//Exportar por nombre: export {NombreComponente}(Sirve para exportar varios componentes por archivo)
//Ej A:
/* export let titulo = () => {
    return <h1>Hola Mundo</h1>
}
//Ej B:
let subtitulo = () => {
    return <h2>Hola Mundo</h2>
}
export { subtitulo } */



//Importar un componente-----------------------------------
//Para poder utilizar un componente en otro archivo, debemos importarlo. Tenemos dos formas de importar un componente:

//Importar por defecto: import NombreComponente from './NombreComponente'(Sirve para importar un solo componente por archivo)
//Ej:
/* import Titulo from './components/Titulo/Titulo' */

//Importar por nombre: import {NombreComponente} from './NombreComponente'(Sirve para importar varios componentes por archivo)
//Ej A:
/* import { titulo } from './components/Titulo/Titulo'
//Ej B:
import { titulo, subtitulo } from './components/Titulo/Titulo' */



//Mdularización de componentes
//En React, es posible modularizar los componentes en diferentes archivos para mantener el código organizado y reutilizable.
//Creamos una carpeta llamada "components" en la raíz de nuestro proyecto.
//Dentro de la carpeta, secre otra carpeta llamada "NombreComponente".
//Dentro de la carpeta "NombreComponente", creamos un archivo llamado "NombreComponente.jsx"y otro llamado "NombreComponente.css".

//Componentes de estado
//Los componentes de estado son componentes que tienen un estado interno que puede cambiar a lo largo del tiempo. Se utilizan para manejar la lógica y el estado de un componente.
//Para crear un componente de estado, debemos utilizar el hook useState que nos proporciona React. Este hook nos permite agregar un estado interno a un componente de función.
//El hook useState recibe un valor inicial y retorna un array con dos elementos: el valor del estado y una función para actualizar el estado.   const [count, setCount] = useState(0)

//Componentes contenedores
//Los componentes contenedores son componentes que no ejecutan lógica de presentación, sino que contienen a otros componentes y les pasan propiedades.
//Se comunican con la fuente de datos y pasan los datos a los ccpmponentes hijos



//Pasando propiedades a un componente-----------------------------------
//Las propiedades son valores que se pasan a un componente desde el componente padre. Se utilizan para personalizar el comportamiento y la vista de un componente.
//El nombre de las propiedades debe coincidir con el nombre de las propiedades que se pasan al componente.
//Para acceder a las propiedades dentro del componente, react mete las propiedades que se le pasan al componente dentro de un objeto llamado "props". Este objeto contiene todas las propiedades que se le pasan al componente. Para acceder a las propiedades, debemos utilizar la notación de punto o destructuring. JS a diferencia de React, no mete las propiedades que se le pasan al componente dentro de un objeto llamado "props".
//Ej:

//En el componente padre:
//El componente padre es el que llama al componente hijo y le pasa las propiedades titulo y subtitulo. Que contienen los valores "Titulo de la app" el cual esta almacenado en una variable llamada "tituloApp" y "Subtitulo de la app" el cual se pasa directamente al componente hijo.

/* let tituloApp = "Titulo de la app"

function App() {
    return (
        <>
            <Titulo titulo={tituloApp} subtitulo='Subtitulo de la app' />
        </>
    )
}

//En el componente hijo:
//El componente hijo es el que recibe un objeto 'prop' con las propiedades que se pasasn por paramettrio.
//El nombre de las propiedades debe coincidir con el nombre de las propiedades que se pasan al componente.
//Como prop es un objeto, podemos acceder a las propiedades que se le pasan al componente utilizando la notación de punto o destructuring.


//con notación de punto
let Titulo = (parametro) => {
    return (
        <div>
            <h1>{parametro.titulo}</h1>
            <h2>{parametro.subtitulo}</h2>
        </div>
    )
} */

//con destructuring
/* let Titulo = ({ titulo, subtitulo }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    )
} */






//Pasar COMPONENTES como Propiedades
//En React, es posible pasar componentes como propiedades a otros componentes. Esto nos permite reutilizar componentes y crear interfaces de usuario más complejas.
//Para pasar un componente como propiedad, simplemente lo pasamos como si fuera una propiedad normal.
//React mete el componente que se pasa como propiedad dentro de un objeto llamado CHILDREN.
//Para utilizar el componente debemos recibe el objeto children y lo renderizamos en el componente padre.
//Ej A: (MAS RECOMENDADO)

//En el componente padre:
/*  function App() {
    return (
        <>
            <Pages greeting={'Holaaaa'}>
                <Titulo />
            </Pages>
        </>
    )
}

//En el componente hijo:
const Pages = ({ greeting, children }) => {
    return (
        <>
            <Titulo />
            {children}
        </>
    )
} */

//Ej B:
//En este caso pasamos el componente Titulo como propiedad al componente Pages.

//En el componente padre:
/* function App() {
    return (
        <>
            <Pages greeting={'Holaaaa'} titulo={Titulo} />
        </>
    )
}

//En el componente hijo:
//Al momento de renderizar el componente hijo, debemos utilizar el componente que se pasa como propiedad y para renderizarlo se debe ejecutar como si fuera una función con los paréntesis y los corchetes.

const Pages = ({ greeting, titulo }) => {
    return (
        <>
            <p>{greeting}</p>
            {titulo({})}
        </>
    )
}    */


//--------------------------CLASE DE REPASO-----------------------------------



//Jerarquias de IMPORTS

//Primero se deben importar las librerias nativas de react
//Luego se importan los componentes
//Luego se importan los estilos



//Instalar bootstrap
//Para instalar bootstrap en nuestro proyecto, debemos ejecutar el siguiente comando en la terminal: npm install bootstrap
//Una vez instalado, debemos importar el archivo de estilos de bootstrap en el archivo principal de nuestra aplicación.
//Para traer el js debemos colocar el script en el archivo index.html

//Si utilizamso bootstrap comun necesitamos corregir detalles de la sintaxis para evitar que salgan warnings en la consola
//Como por ejemplo cambiar class por className