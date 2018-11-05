import React from 'react';
import PropTypes from 'prop-types'
import './todoItem.css'

const TodoItem = ({ id, description, onDeleteButtonClick }) => (
  <div className="todo-item__container">
    <div>
      <input type="checkbox" id={`todoItemCheckbox-${id}`} />
      <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
    </div>
    <input type="button" value="Delete" onClick={() => onDeleteButtonClick(id)} />
  </div>
);

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default TodoItem;