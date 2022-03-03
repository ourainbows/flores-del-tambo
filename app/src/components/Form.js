import React, { useState } from "react";


const Form = ({ addTodo }) => {
    //Declaramos el estado de el input
    const [inputValue, setInputValue] = useState("");
    //Esta constante se usa para modificar el state
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    //Aca utilizamos el preventDefault para evita que la pagina se recargue
    const handleFormSubmit = (e) => {
        e.preventDefault();
    //El .trim se usa para borrar espacios en blanco alrededor de el string
        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false, deleted: false });
        // Aca devolvemos el estado de el input a un string vacio    
        setInputValue("");
    };
    
    return (
        <form className="ui form" 
        //Es usado para procesar la informacion de el formulario y luego poder ser enviado, le pasamos la funcion
        // handleFormSubmit para evitar que la informacion se refresque y se pierda
        onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input
                            //Aqui le pasamos los estados al input 
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Ingresa la tarea que debes realizar..."
                        />
                    </div>
                     <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;