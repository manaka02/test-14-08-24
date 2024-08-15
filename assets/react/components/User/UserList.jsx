import React, {useState} from 'react';
import { Table, Button,Alert } from 'react-bootstrap';
import UserFormModal from './UserFormModal';
import {addUser, deleteUser, fetchUsers, updateUser} from "../../services/api";

const UserList = ({ users, setUsers }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [alert, setAlert] = useState(null);

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);

    const handleShowEditModal = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };
    const handleCloseEditModal = () => setShowEditModal(false);

    const handleAddUser = async (newUser) => {
        try {
            await addUser(newUser);
            setAlert({ type: 'success', message: 'Utilisateur ajouté avec succès!' });
            setShowAddModal(false);
            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
        } catch (error) {
            setAlert({ type: 'danger', message: 'Erreur lors de l\'ajout de l\'utilisateur.' });
        }
    };

    const handleUpdateUser = async (updatedUser) => {
        try {
            await updateUser(selectedUser.id, updatedUser);
            setAlert({ type: 'success', message: 'Utilisateur modifié avec succès!' });
            setShowEditModal(false);
            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
        } catch (error) {
            setAlert({ type: 'danger', message: 'Erreur lors de la modification de l\'utilisateur.' });
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
            try {
                await deleteUser(userId);
                setAlert({ type: 'success', message: 'Utilisateur supprimé avec succès!' });
                const updatedUsers = await fetchUsers();
                setUsers(updatedUsers);
            } catch (error) {
                setAlert({ type: 'danger', message: 'Erreur lors de la suppression de l\'utilisateur.' });
            }
        }
    };

    return (
        <div>
            <h3>Liste des Utilisateurs</h3>
            <Button variant="primary" onClick={handleShowAddModal}>
                Ajouter utilisateur
            </Button>
            {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
            <Table bordered hover size="sm">
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
                            <Button
                                variant="primary"
                                className="mr-2"
                                onClick={() => handleShowEditModal(user)}
                            >
                                Modifier</Button>
                            <Button
                                variant="danger"
                                onClick={() => handleDeleteUser(user.id)}
                            >Supprimer</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <UserFormModal
                show={showAddModal}
                onClose={handleCloseAddModal}
                onSave={handleAddUser}
                title="Ajouter un utilisateur"
            />
            {selectedUser && (
                <UserFormModal
                    show={showEditModal}
                    onClose={handleCloseEditModal}
                    onSave={handleUpdateUser}
                    title="Modifier l'utilisateur"
                    user={selectedUser}
                />
            )}
        </div>
    );
};

export default UserList;
