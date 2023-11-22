const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

interface FetchOptions {
  method: string;
  headers?: Record<string, string>; // A more flexible header definition
  body?: string;
}

interface Headers {
    [key: string]: string;
}

const fetchData = async (path: string, options: FetchOptions = { method: 'GET' }) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const getHeaders = () => {
    const headers: Headers = {};
    headers['Content-Type'] = 'application/json';
    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

export const api = {
  get: (path: string) => fetchData(path, {
    method: 'GET',
    headers: getHeaders(),
  }),
  post: (path: string, data: object) => fetchData(path, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  }),
  put: (path: string, data: object) => fetchData(path, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  }),
  delete: (path: string) => fetchData(path, {
    method: 'DELETE',
  }),
};
