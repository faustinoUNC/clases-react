//Lo que se recibe por parametro es un objeto que contiene las propiedades/parametros que se le pasan al componente desde el archivo donde se importa, al ser un objeto podemos acceder a sus propiedades con la notación de punto o haciendo destructuring.

//Sin destructuring
/* let Titulo = (parametro) => {
    return (
        <div>
            <h1>{parametro.titulo}</h1>
            <h2>{parametro.subtitulo}</h2>
        </div>
    )
}
//Usamos export default para exportar una sola función o clase por archivo
export default Titulo */

//Con destructuring
//En caso de que no se le pase un valor a la propiedad, se le asigna un valor por defecto.
let Titulo = ({ titulo = 'Titulo por defecto', subtitulo = 'Subtitulo por defecto' }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    )
}

export default Titulo