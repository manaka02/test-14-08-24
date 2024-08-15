import React from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { FaUserCircle, FaReply, FaExclamationCircle } from 'react-icons/fa';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list-container">
            <h3 className="mb-4">Liste de Commentaires</h3>
            <ListGroup>
                {comments.map(comment => (
                    <ListGroup.Item key={comment.id} className="comment-item">
                        <div className="d-flex align-items-start">
                            <FaUserCircle className="comment-avatar" />
                            <div className="ms-3">
                                <small className="comment-content">{comment.content}</small>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default CommentList;
