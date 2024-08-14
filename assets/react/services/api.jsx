const API_URL = '/admin/json';

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/utilisateur`);
    return response.json();
};

export const fetchTodos = async () => {
    const response = await fetch(`${API_URL}/todo`);
    return response.json();
};

export const fetchComments = async () => {
    const response = await fetch(`${API_URL}/comment`);
    return response.json();
};

export const addUser = async (user) => {
    const response = await fetch(`${API_URL}/user/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const updateUser = async (userId, user) => {
    const response = await fetch(`${API_URL}/user/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${API_URL}/user/${userId}`, {
        method: 'DELETE',
    });
    return response.json();
};
