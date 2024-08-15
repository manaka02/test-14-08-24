import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CardList = ({ userCount, todoCount, postCount }) => {
    return (
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Utilisateurs Actifs</Card.Title>
                        <Card.Text>{userCount}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Total Todos</Card.Title>
                        <Card.Text>{todoCount}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Total Posts</Card.Title>
                        <Card.Text>{postCount}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CardList;
