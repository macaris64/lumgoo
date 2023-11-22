import {api} from "@/utils/api";
import User from "@/models/user.model";

export async function login(email: string, password: string) {
    try {
        const apiResponse = await api.post('login', { email, password });
        const user: User = apiResponse.user;
        const token = apiResponse.token;
        return { user, token };
    }
    catch (error) {
        throw new Error('Login failed');
    }
}

export async function verify(token: string) {
    try {
        console.log('18')
        const apiResponse = await api.post('verifyToken', { token });
        return apiResponse.valid;
    }
    catch (error) {
        throw new Error('Token verification failed');
    }
}