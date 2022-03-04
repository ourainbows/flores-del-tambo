import React, { useState } from "react";
import "../styles/todo.css"

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp, deleted }) => {
    const [isEditing, setIsEditing] = useState(false);
     // Aqui desestructuamos en title definiendolo como el estado inicial en las siguientes dos constantes 
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);
     

    //  handleDivDoubleClick se usa para cambia el estado a true y asi dejar que edite la tarea
    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };
    //Esta constante la usamos para definir la funciones de las teclas al momento de editar
    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        //Si reescribimos la tarea y presionamos la tecla enter se cambia el titulo viejo (setValue) por el nuevo (tempValue)
        if (key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        //En tal caso de que no queramos guardar los cambios presionamos esc para que quede el titulo originial 
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);

     //Usamos el estado en false para que al presionar cualquiera de las teclas despues de guaradrse los cambios se deje de editar
        }
    };
    //creamos un evento que modifica el state
    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };
   //
    const handleDeleteClick = () =>
        editTodoItemProp({ deleted: !deleted });

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    return (
        <div className="row">
        {/* Aca usamos un operador ternario, le decimos, si esta editando use las funciones de las teclas y asi poder cambiar o no el titulo de la tarea */}
            {
                isEditing ?
                    <div className="column seven wide">
                        <i className="certificate icon"></i>
                        <div className="ui input fluid">

                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}
                            />
                        </div>
                    </div> :

                    //Y si no, simplemente muestre la tarea con los botones de completado o eliminado
                    <>
                        <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                            <h2
                                className={"ui header"}
                                id={completedState ? "completedTodo" : ""}
                            >
                                {value}
                            </h2>
                        </div>
                        <div className="butons">
                            <div className="column one wide">
                                <button
                                    className={"ui button circular icon" + (completedState ? " blue" : " green")}
                                    onClick={handleButtonClick}
                                >
                                    <i className="white check icon"></i>
                                </button>
                            </div>

                            <div className="column one wide">
                                <button
                                    onClick={handleDeleteClick}
                                    className="ui button circular icon red"
                                >
                                    <i className="white remove icon"></i>
                                </button>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Todo;