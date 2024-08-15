import React, {useState, useEffect} from 'react';
import CardList from "../components/Card/CardList";
import TodoList from "../components/Todo/TodoList";
import CommentList from "../components/Comment/CommentList";
import UserList from "../components/User/UserList";
import {fetchUsers, fetchTodos, fetchComments, fetchPosts} from '../services/api';
import {Col, Row} from "react-bootstrap";

const dashboard =  () => {
    const [usersData, setUsersData] = useState({ total: 0, data: [] });
    const [todosData, setTodosData] = useState({ total: 0, data: [] });
    const [commentsData, setCommentsData] = useState({ total: 0, data: [] });
    const [postData, setPostData] = useState({ total: 0, data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const users = await fetchUsers();
            const todos = await fetchTodos();
            const comments = await fetchComments();
            const posts = await fetchPosts();

            setUsersData(users);
            setTodosData(todos);
            setCommentsData(comments);
            setPostData(posts);
        };

        fetchData().then();
    }, []);


    return (
        <div>
            <CardList userCount={usersData.total} todoCount={todosData.total} postCount={postData.total}  />
            <UserList users={usersData.data} setUsers={setUsersData} />
            <Row>
                <Col lg={6} sm={12}>
                    <TodoList todos={todosData.data} setTodosData={setTodosData} />
                </Col>
                <Col lg={6} sm={12}>
                <CommentList comments={commentsData.data} />
                </Col>
            </Row>
        </div>
    );
}

export default dashboard;
