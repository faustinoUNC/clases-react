// Este archivo es el componente principal de nuestra aplicacion

//Jerarquias de IMPORTS

//Primero se deben importar las librerias nativas de react
//Luego se importan los componentes
//Luego se importan los estilos
import NavBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'//--->Importamos el archivo de estilos de componente App
import Acordeon from './components/Acordeon/Acordeon';
import Contador from './components/Contador/Contador';



//Elemento principal de nuestra aplicacion
function App() {

  
  return (
    //Usamos fragment para no generar un div innecesario
    <>
      <NavBar />
      <Acordeon />
      <Contador/>
    </>
  )
}



//Debemos exportar el componente hacia el main para que pueda ser utilizado
export default App