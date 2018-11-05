import React from 'react';
import PropTypes from 'prop-types'
import './addTodo.css'

const AddTodo = ({ description, onDescriptionChange, onAddButtonClick }) => (
  <div className="add-todo__container">
    <input type="text" value={description} onChange={e => onDescriptionChange(e.target.value) } />
    <input
      type="button"
      value="Add"
      onClick={() => onAddButtonClick(description)}
      disabled={description.length === 0}
    />
  </div>
);

AddTodo.propTypes = {
  description: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onAddButtonClick: PropTypes.func.isRequired
};

export default AddTodo;