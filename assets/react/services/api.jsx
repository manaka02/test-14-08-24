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
