import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }, {
                id: 4,
                text: 'clean kitchen'
            }, {
                id: 5,
                text: 'make dinner'
            }],
            title: 'To Do List'
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} numberOfTasks={this.state.data.length} />
                <TodoList tasks={this.state.data} onClick={this.removeTodo.bind(this)} />
            </div>
        );
    }
}


export default hot(module)(App);