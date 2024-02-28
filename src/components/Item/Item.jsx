import React from 'react'
import Titulo from '../Titulo/Titulo'

const Item = ({ saludo }) => {
    return (
        <div>
            <Titulo subtitulo="Item" />
            <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
            <button onClick={saludo}>Saludar</button>
        </div>
    )
}

export default Item