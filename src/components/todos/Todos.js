import React from 'react';
import TodosOverText from './TodosOverText';
import TodoList from './TodoList';

function Todos() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <TodosOverText />
      <TodoList />
    </>
  );
}

export default Todos;
