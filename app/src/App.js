import React, { useState, useEffect } from "react";
import todos from "./apis";
import "./styles/app.css";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Navbar from "./components/Navbar";

const appTitle = "Lista de tareas";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [task, setTask] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  }, [todoList]);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  /* 
  Filter the list depending on what the user types
  Validations for capitalization and diacritical accents 
  */
  const filteredTasks = todoList.filter((item) => {
    return item.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        task
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
  });

  return (
    <div className="container">
      <Navbar list={todoList} task={task} setTask={setTask} />
      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={task ? filteredTasks : todoList}
        />
      </Section>
    </div>
  );
};

export default App;
