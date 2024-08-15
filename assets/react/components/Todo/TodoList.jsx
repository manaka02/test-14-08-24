import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import {addTodo, fetchTodos} from '../../services/api';

const TodoList = ({ todos,  setTodosData }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = async () => {
        if (newTodo.trim() === '') return;

        await addTodo({ content: newTodo, completed: false })

        const updatedTodos = await fetchTodos();
        setTodosData(updatedTodos);
    };

    return (
        <div>
            <h3>Liste des tâches</h3>
            <Form>
                <Form.Group controlId="formBasicTodo">
                    <Form.Label>Nouvelle tâche</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrez une nouvelle tâche"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddTodo}>
                    Ajouter
                </Button>
            </Form>
            <ListGroup>
                {todos.map(todo => (
                    <ListGroup.Item key={todo.id}>{todo.content}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TodoList;
