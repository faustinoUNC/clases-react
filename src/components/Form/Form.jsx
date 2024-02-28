import Titulo from "../Titulo/Titulo";

let Form = () => {

    //parametros
    let tituloForm = "Titulo Formulario"
    let subtituloForm = "Subtitulo del formulario"

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let inputs of event.target.children) {
            console.log(inputs.placeholder + ":" + inputs.value);
            inputs.value = "";
        }
    };

    return (
        <div>
            <Titulo titulo={tituloForm} subtitulo={subtituloForm} />

            <form id="formulario" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="text" placeholder="Edad" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Contraseña" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
