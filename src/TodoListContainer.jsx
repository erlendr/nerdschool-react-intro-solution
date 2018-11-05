import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { createTodo, deleteTodo } from "./todoActions";
import { changeDescriptionField } from "./formActions";
import Todo from "./Todo";

class TodoListContainer extends Component {
  componentDidMount() {
    this.props.createTodoItem("Wake up");
    this.props.createTodoItem("Do the dishes");
    this.props.createTodoItem("Fold clothes");
    this.props.createTodoItem("Browse Reddit");
  }

  render() {
    return (
      <div>
        <AddTodo
          description={this.props.descriptionField}
          onDescriptionChange={this.props.changeDescriptionField}
          onAddButtonClick={this.props.createTodoItem}
        />
        <TodoList
          todoItems={this.props.todoItems}
          onDeleteButtonClick={this.props.deleteTodoItem}
        />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
  createTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  changeDescriptionField: PropTypes.func.isRequired,
  descriptionField: PropTypes.string.isRequired, 
};

const mapStateToProps = state => ({
  todoItems: state.todos,
  descriptionField: state.form.description,
});

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description)),
  deleteTodoItem: id => dispatch(deleteTodo(id)),
  changeDescriptionField: description => dispatch(changeDescriptionField(description)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);