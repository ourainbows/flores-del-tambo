import React from "react";

export const Searchbar = (props) => {
  const { onChange, task, setTask } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(task);
    setTask("");
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
