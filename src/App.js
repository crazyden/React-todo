import React, { Component } from "react";
import "./App.css";
import List from "./todoList";

class App extends Component {
  state = {
    todos: [
      { id: 1, tache: "faire le menage" },
      { id: 2, tache: "faire la lessive" },
      { id: 3, tache: "faire la cuisine" },
    ],
    newTodo: "",
  };

  suppTache = (id) => {
    const taches = [...this.state.todos];
    const index = taches.findIndex((todo) => todo.id === id);
    taches.splice(index, 1);
    this.setState({ todos: taches });
  };

  valueSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime()
    const tache = this.state.newTodo
    const Todo = { id: id, tache: tache }
    const newTodos = this.state.todos.slice()
    newTodos.push(Todo)
    this.setState({ todos: newTodos, newTodo: '' })
  }

  valeurSaisie = (e) => {
    this.setState({
      newTodo: e.currentTarget.value

    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="container mt-3">Liste des taches à effectuer !</h3>
        <ul className="list-group">
          {this.state.todos.map((todo) => (
            <List liste={todo} onDelete={this.suppTache} />
          ))}
        </ul>
        <br />
        <form className="form-group" onSubmit={this.valueSubmit}>
          <input
            value={this.state.newTodo}
            onChange={this.valeurSaisie}
            className="form-control"
            type="text"
            placeholder="Ajouter une tache"
          />
          <button className="btn btn-success">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default App;
