import React from "react";
import Todo from "./Todo";

<<<<<<< HEAD
const List = ({ list, removeTodoListProp, editTodoListProp}) => {
=======
const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const nonDeleted = list.filter(item => item.deleted)
>>>>>>> e9b6e7e3afd822c5c0c9ffc8dbc5c1027de8668d
    const renderedList = list.map(
        (item,index) => (
            <Todo
                title={item.title}
                completed={item.completed}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={index}
            />
        )
    );
    return (
        <>
            <div className="ui grid center aligned">
                {renderedList}
            </div>
            {nonDeleted.map(item => (
                <div key={item.title}>{item.title}</div>
            ))}<div>

            </div>
        </>
    );
};

export default List;