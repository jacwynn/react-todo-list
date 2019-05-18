import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  render() {
    return (
      <div>
        {this.props.todos.map(function(todo) {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
