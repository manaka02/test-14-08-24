import React from 'react';

const TodoList = (props) => {

        return (
            <div>
                <h3>Todo List</h3>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Todo Title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Todo Subtitle</h6>
                        <p className="card-text">Some quick example text to build on the todo title and make up the bulk of the todo's content.</p>
                        <a href="#" className="card-link">Todo Link</a>
                        <a href="#" className="card-link">Another Link</a>
                    </div>
                </div>
            </div>
        );
}

export default TodoList;