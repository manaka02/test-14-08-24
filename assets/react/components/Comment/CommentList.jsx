import React from 'react';
import { ListGroup } from 'react-bootstrap';

const CommentList = ({ comments }) => {
    return (
        <div>
            <h3>Liste de Commentaires</h3>
            <ListGroup>
                {comments.map(comment => (
                    <ListGroup.Item key={comment.id}>
                        {comment.content}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default CommentList;
