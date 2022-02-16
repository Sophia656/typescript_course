import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import ToDoItem from './ToDoItem';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos () {
        try {
        const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(responce.data)
        } catch(e) {
        alert(e )
        }
    }
    return (
        <List
        items={todos}
        renderItem={(todo: ITodo) => <ToDoItem todo={todo} key={todo.id} />}
        />
    );
};

export default TodosPage;