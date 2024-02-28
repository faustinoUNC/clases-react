//El componente Pages.jsx es el componente padre que llama a los componentesy les pasa las propiedades.

//Por convencion se nombra como "PAGE" a los componentes que son padres y que contienen a otros componentes y solo se encargan de pasarles propiedades y mostrarlos en pantalla.

import React from 'react'
import Titulo from '../Titulo/Titulo'
import Form from '../Form/Form'
import Item from '../Item/Item'


const Pages = ({ greeting, children }) => {
    //El componente padre es el que llama al componente hijo y le pasa las propiedades en los paraametros ""titulo" y "subtitulo" que contienen los valores "Titulo de la app" y "Subtitulo de la app" respectivamente.

    let tituloApp = "Titulo de la app"
    let subtituloApp = "Subtitulo de la app"

    let saludoo = () => { console.log("hola") }

    return (
        //Uso de fragmentos para no tener que crear un div innecesario
        <>
            <Titulo titulo={tituloApp} subtitulo={subtituloApp} />
            <Form />
            <Item saludo={saludoo} />
            <p>{greeting}</p>
            {children}
        </>
    )
}

export default Pages