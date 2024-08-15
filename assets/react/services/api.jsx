const API_URL = '/admin/api';



export const fetchTodos = async () => {
    const response = await fetch(`${API_URL}/todo`);
    return response.json();
};

export const fetchComments = async () => {
    const response = await fetch(`${API_URL}/comment`);
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/utilisateur`);
    return response.json();
};

// fetchPosts
export const fetchPosts = async () => {
    const response = await fetch(`${API_URL}/post`);
    return response.json();
};

// addTodo
export const addTodo = async (todo) => {
    const response = await fetch(`${API_URL}/todo/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return response.json();
};

export const addUser = async (user) => {
    const response = await fetch(`${API_URL}/utilisateur/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const updateUser = async (userId, user) => {
    const response = await fetch(`${API_URL}/utilisateur/update/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${API_URL}/utilisateur/delete/${userId}`, {
        method: 'DELETE',
    });
    return response.json();
};
