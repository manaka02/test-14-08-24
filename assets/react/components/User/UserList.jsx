import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserList = ({ users }) => {
    return (
        <div>
            <h3>Liste des Utilisateurs</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button variant="primary" className="mr-2">Modifier</Button>
                            <Button variant="danger">Supprimer</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;
