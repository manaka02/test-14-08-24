import React from 'react';
import CardList from "../components/Card/CardList";
import TodoList from "../components/Todo/TodoList";
import CommentList from "../components/Comment/CommentList";
import UserList from "../components/User/UserList";

const dashboard =  (props) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <CardList/>
            <UserList/>
            <TodoList/>
            <CommentList/>
        </div>
    );
}

export default dashboard;
