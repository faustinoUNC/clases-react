// Este archivo es el componente principal de nuestra aplicacion

//Imports
import './App.css'//--->Importamos el archivo de estilos de componente App
import Pages from './components/Pages/Pages'
import Titulo from './components/Titulo/Titulo'



//Elemento principal de nuestra aplicacion
function App() {

  return (
    //Usamos fragment para no generar un div innecesario
    <>
      <Pages greeting={'Holaaaa'}>
        <Titulo />
      </Pages>
    </>
  )
}



//Debemos exportar el componente hacia el main para que pueda ser utilizado
export default App