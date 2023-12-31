const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

interface FetchOptions {
  method: string;
  headers?: Record<string, string>; // A more flexible header definition
  body?: string;
}

interface Headers {
    [key: string]: string;
}

export enum API_STATES {
    IDLE = 'idle',                              // Represents the initial state before any action has been taken. It's useful to differentiate between "not yet started" and "completed" states.
    LOADING = 'loading',                        // Similar to "searching", it indicates that an operation is in progress. It's often used more generically for any kind of data fetching, not just search operations.
    SUCCESS = 'success',                        // Indicates that the operation was successful. This is often used generically for any kind of operation that doesn't return data, like a form submission.
    NO_DATA = 'no_data',                        // Indicates that the operation was successful, but no data was returned. This is different from an error state and is useful in scenarios like search or data fetching where the result might be an empty dataset.
    TIMEOUT = 'timeout',                        // For operations where a response is expected within a certain time frame, this state indicates that the operation took too long and was aborted.
    CANCELLED =  'cancelled',                   // Useful if the user has the option to cancel the operation (e.g., aborting a fetch request).
    VALIDATION_ERROR = 'validation_error',      // Specific to form submissions, where the error is not from the server, but due to the client-side validation of input fields.
    SERVER_ERROR = 'server_error',              // Specifically for errors related to network issues, separate from other types of errors that a server might return.
    UNAUTHORIZED_ERROR = 'unauthorized_error',  // Specific error states for handling authentication and authorization issues, like expired tokens or lack of permissions.
    PARTIAL_ERROR = 'partial_error',            // Sometimes, operations might partially succeed. For instance, in a batch operation, some items might be processed successfully while others fail.
    STALE_ERROR = 'stale_error',                // Indicates that the data is outdated and needs to be refreshed. This is often used in caching scenarios.
    DEPRECATED_ERROR = 'deprecated_error',      // Indicates that the operation or the data is no longer valid or has been superseded by something else.
    CONFLICT_ERROR = 'conflict_error',          // Indicates that the operation failed due to a conflict with the current state of the resource.
}

const fetchData = async (path: string, options: FetchOptions = { method: 'GET' }) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`, options);
        if (!response.ok) {
            const errorBody = await response.json();
            const errorMessage = errorBody?.message || 'An error occurred';
            const error = new Error();
            error.message = errorMessage;
            (error as any).status = response.status;
            throw error;
        }
        return await response.json();
    } catch (error) {
        const err = new Error((error as any).message);
        (err as any).status = (error as any).status;
        throw err;
    }
};

const getHeaders = () => {
    const headers: Headers = {};
    headers['x-api-key'] = process.env.NEXT_PUBLIC_API_KEY as string;
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
