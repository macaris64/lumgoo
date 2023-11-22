import {api, API_STATES} from "@/utils/api";
import User from "@/models/user.model";

export async function login(email: string, password: string) {
    try {
        const apiResponse = await api.post('login', { email, password });
        const user: User = apiResponse.user;
        const token = apiResponse.token;
        return { user, token };
    }
    catch (error) {
        if ((error as any).status === 422) {
            throw new Error(API_STATES.VALIDATION_ERROR);
        } else if ((error as any).status === 401) {
            throw new Error(API_STATES.UNAUTHORIZED_ERROR);
        } else {
            throw new Error(API_STATES.SERVER_ERROR);
        }
    }
}

export async function register(
    email: string,
    password: string,
    passwordConfirmation: string,
    username: string,
    fullname: string
) {
    try {
        const apiResponse = await api.post(
            'register',
            {
                email,
                password,
                passwordConfirmation,
                username,
                fullname
            }
        );
        const user: User = apiResponse.user;
        const token = apiResponse.token;
        return { user, token };
    }
    catch (error) {
        if ((error as any).status === 422) {
            throw new Error(API_STATES.VALIDATION_ERROR);
        } else if ((error as any).status === 409) {
            throw new Error(API_STATES.CONFLICT_ERROR);
        } else {
            throw new Error(API_STATES.SERVER_ERROR);
        }
    }

}

export async function verify(token: string) {
    try {
        const apiResponse = await api.post('verifyToken', { token });
        return apiResponse.valid;
    }
    catch (error) {
        if ((error as any).status === 401) {
            throw new Error(API_STATES.UNAUTHORIZED_ERROR);
        } else if ((error as any).status === 422) {
            throw new Error(API_STATES.VALIDATION_ERROR);
        } else {
            throw new Error(API_STATES.SERVER_ERROR);
        }
    }
}
