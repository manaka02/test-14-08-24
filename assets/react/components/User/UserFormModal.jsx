import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UserFormModal = ({ show, onClose, onSave, title, user }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        if (user) {
            setFormData({ name: user.name, email: user.email });
        } else {
            setFormData({ name: '', email: '' });
        }
    }, [user]);

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrez le nom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Entrez l'email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Fermer
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {title.includes('Ajouter') ? 'Ajouter' : 'Modifier'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserFormModal;
