import React from 'react';

const UserList = (props) => {

        return (
            <div>
                <h3>User List</h3>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">User Title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">User Subtitle</h6>
                        <p className="card-text">Some quick example text to build on the user title and make up the bulk of the user's content.</p>
                        <a href="#" className="card-link">User Link</a>
                        <a href="#" className="card-link">Another Link</a>
                    </div>
                </div>
            </div>
        );
}

export default UserList;