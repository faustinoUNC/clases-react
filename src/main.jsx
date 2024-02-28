//Este archivo es el punto de entrada de nuestra aplicacion, en el cual se renderiza el componente principal de nuestra aplicacion


//Imports
import React from 'react'//--->Importamos la libreria de react
import ReactDOM from 'react-dom/client'//--->Importamos el metodo createRoot de la libreria de react-dom/client
import App from './App.jsx'//--->Importamos el componente principal de nuestra aplicacion
import './index.css'



//CreaterRoot es un metodo que nos permite renderizar nuestro componente principal en el DOM, el cual recibe como parametro el elemento del DOM donde se va a renderizar el componente "app" que se importo anteriormente
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
