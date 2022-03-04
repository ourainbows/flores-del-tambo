import React from "react";

export const Searchbar = (props) => {
  const { onChange, task, setTask } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(task);
    setTask(""); // After clicking, erase everything from the input text
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </>
  );
};
