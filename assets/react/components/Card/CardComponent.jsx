// src/components/CardComponent.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUsers, FaTasks, FaRegFileAlt } from 'react-icons/fa';

const iconStyle = {
    backgroundColor: '#e9ecef', // Couleur de fond des icônes
    color: '#495057', // Couleur des icônes
    fontSize: '3rem',
    padding: '15px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const iconMap = {
    users: <FaUsers style={iconStyle} className="text-secondary" />,
    tasks: <FaTasks style={iconStyle} className="text-warning" />,
    posts: <FaRegFileAlt style={iconStyle} className="text-success" />,
};

const CardComponent = ({ title,subtitle, count, iconType }) => {
    const cardStyle = {
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        padding: '20px',
        display: 'flex',
        color: '#343a40',
    };

    return (
        <Card style={cardStyle} className="mb-4 text-nowrap bg-light">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-auto">
                    {iconMap[iconType]}
                </div>
                <div className="col-auto ms-4">
                    <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
                    <Card.Text >{count} {subtitle}</Card.Text>
                </div>
            </div>
        </Card>
    );
};

export default CardComponent;
