const errorMessages = {
    server: {
        S_100: 'Internal Server Error',
        S_101: 'Network error',
    },
    user: {
        U_100 : 'Invalid email or password',
        U_101 : 'Email or username already in use',
        U_102 : 'Invalid credentials',
        U_103 : 'Token verification failed',
        U_104 : 'No token found',
        U_105 : 'Registration failed',
        U_106 : 'Invalid email format',
        U_107 : 'Password must be at least 6 characters long',
        U_108 : 'Passwords do not match',
        U_109 : 'Password is required',
        U_110 : 'Email is required',
        U_111 : 'Username is required',
        U_112 : 'Invalid format',
        U_113 : 'Passwords do not match',
    }
}

export default errorMessages;