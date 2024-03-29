import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
