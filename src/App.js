import React, { Component } from 'react';
import Todos from './components/ToDos';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Go out and party",
        completed: false
      },
      {
        id: uuid(),
        title: "Have fun!",
        completed: false
      }
    ]
  }

  addToDo = (title) => {

    const newTodo = {
        id: uuid(),
        title: title,
        completed: false
    }
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }


  render() {
    return (
      <div className="App">
        <h1>Wynn Digital ToDo List</h1>
        <AddToDo todos={this.state.todos} addToDo={this.addToDo}/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;


