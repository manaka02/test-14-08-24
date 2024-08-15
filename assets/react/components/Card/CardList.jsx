// src/components/CardList.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';

const CardList = ({ userCount, todoCount, postCount }) => {
    return (
        <Row className="g-4">
            <Col md={4}>
                <CardComponent
                    title="Users"
                    subtitle="Total Users"
                    count={userCount}
                    iconType="users"
                />
            </Col>
            <Col md={4}>
                <CardComponent
                    title="Todos"
                    subtitle="Total Todos"
                    count={todoCount}
                    iconType="tasks"
                />
            </Col>
            <Col md={4}>
                <CardComponent
                    title="Posts"
                    subtitle="Total Posts"
                    count={postCount}
                    iconType="posts"
                />
            </Col>
        </Row>
    );
};

export default CardList;
