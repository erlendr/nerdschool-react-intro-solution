import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Todo from './Todo'

const TodoList = ({ todoItems, onDeleteButtonClick }) => (
  <div>
    {todoItems.map(todoItem => (
      <TodoItem key={todoItem.id} id={todoItem.id} description={todoItem.description} onDeleteButtonClick={onDeleteButtonClick} />
    ))}
  </div>
);

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)),
};

TodoList.defaultProps = {
  todoItems: [],
};

export default TodoList;