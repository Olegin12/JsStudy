import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import useTodoState from './useTodoState';

const App = () => {
    const {todos, addTodo, deleteTodo} = useTodoState([]);
    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todos
            </Typography>

            <TodoForm
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();
                    if (trimmedText.length > 0) {
                        addTodo(trimmedText);
                    }
                }}
            />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo} />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
