import React from 'react'
import { useState } from 'react'

export const Contador = () => {


    let [contador, setContador] = useState(0)

    let funcionContadorSuma = () => {
        setContador(contador + 1)
    }
    
    let funcionContadorResta = () => {
        if (contador === 0) {
            alert('No puedes restar mas')
            return
        }
        setContador(contador - 1)
    }


    return (
        <div className='container text-center mt-5'>
            <p className='bg-primary-subtle'>{contador}</p>
            <div>
                <button className="btn btn-primary" onClick={funcionContadorResta}>-</button>
                <button className='btn btn-primary' onClick={funcionContadorSuma}>+</button>
            </div>

        </div>
    )
}
export default Contador 