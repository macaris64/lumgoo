import { userStore } from '@/store/user';

const logout = async () => {
    if (typeof window !== 'undefined') {
        userStore.clearUserData();
        window.location.href = '/';
    }
}

export default logout;
