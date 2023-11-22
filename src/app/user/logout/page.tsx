'use client';
import React, { useEffect } from 'react';
import Logout from '@/components/logout/logout';

const LogoutPage: React.FC = () => {
    useEffect(() => {
        Logout();
    }, []);

    return null;
}
export default LogoutPage;
