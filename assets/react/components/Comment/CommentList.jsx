import React from 'react';

const CommentList = (props) => {

    return (
        <div>
            <h3>Comment List</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Comment Title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Comment Subtitle</h6>
                    <p className="card-text">Some quick example text to build on the comment title and make up the bulk of the comment's content.</p>
                    <a href="#" className="card-link">Comment Link</a>
                    <a href="#" className="card-link">Another Link</a>
                </div>
            </div>
        </div>
    );
}

export default CommentList;