import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const nonDeleted = list.filter((item) => item.deleted);
  const renderedList = list.map((item, index) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={index}
    />
  ));
  return (
    <>
      <div className="ui grid center aligned">{renderedList}</div>
      {nonDeleted.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
      <div></div>
    </>
  );
};

export default List;
