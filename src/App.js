import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
    state = {
        todos : [
        ]
    }
    
    markTodo = (iter) =>{
        let todos = [...this.state.todos];
        todos[iter].done = !todos[iter].done;

        this.setState(
            {
                todos: todos
            }
        )
    }

    componentDidMount() {
        let todos = [];
        if (localStorage.todos){
            todos = JSON.parse(localStorage.todos);
        }

        this.setState({
            todos : todos
        })
    }

    componentDidUpdate() {
        localStorage.todos = JSON.stringify(this.state.todos);
    }

    deleteTodo = (iter) => {
        let todos = [...this.state.todos];
        todos.splice(iter, 1);
        this.setState({
            todos: todos
        });
    }

    addIntoTodos = (todo) => {
        let todos = [...this.state.todos];
        let id;
        if (todos.length>0){
            let iter = todos.length -1;
            id = todos[iter].id + 1;
        }else{
            id = 1;
        }
        todo.id = id;
        todos.push(todo);
        this.setState({todos: todos});
    }
    render() {
        return (
            <div>
                < Jumbotron />
                < NewTodo addIntoTodos = {this.addIntoTodos}/>
                < TodoList todos ={this.state.todos} markTodo = {this.markTodo} deleteTodo = {this.deleteTodo}/>
            </div>
        );
    }
}

export default App;