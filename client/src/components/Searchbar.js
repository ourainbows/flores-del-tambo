import React from "react";

export const Searchbar = ({onChange, task, setTask}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault(); // avoid reloading whole page
    onChange(task); //value typed by user 
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </>
  );
};
