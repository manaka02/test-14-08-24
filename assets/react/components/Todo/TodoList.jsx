import React, { useState } from 'react';
import { ListGroup, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { addTodo, fetchTodos } from '../../services/api';
import { FaPlus } from 'react-icons/fa';

const TodoList = ({ todos, setTodosData }) => {
    const [newTodo, setNewTodo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddTodo = async () => {
        if (newTodo.trim() === '') return;

        setLoading(true);
        setError(null);

        try {
            await addTodo({ content: newTodo, completed: false });
            const updatedTodos = await fetchTodos();
            setTodosData(updatedTodos);
            setNewTodo('');
        } catch (err) {
            setError('Erreur lors de l\'ajout de la tâche');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card bg-light border-light">
            <div className="card-body">
                <div className="todo-list-container">
                    <h3 className="mb-4">Liste des tâches</h3>
                    <Form className="mb-4">
                        <Form.Group controlId="formBasicTodo">
                            <Form.Label>Nouvelle tâche</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrez une nouvelle tâche"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="secondary"
                            className="mt-3"
                            onClick={handleAddTodo}
                            disabled={loading}
                        >
                            {loading ? <Spinner as="span" animation="border" size="sm"/> : <FaPlus/>} Ajouter
                        </Button>
                    </Form>
                    {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
                    <ListGroup>
                        {todos.map(todo => (
                            <ListGroup.Item key={todo.id} className="todo-item">
                                {todo.content}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
