// pages/index.tsx or another page file
import React from 'react';
import Tabs from '@/components/tab/tab'
import {LoginForm, RegisterForm} from '@/components/form/form';

import './sign-in.css';

const HomePage: React.FC = () => {
    const registerForm = <RegisterForm title={'Register'}/>;
    const loginForm = <LoginForm title={'Login'} />;
    return (
        <div className="page-container">
            <div className="signin-card">
                <Tabs>
                    <div title="Register">{registerForm}</div>
                    <div title="Login">{loginForm}</div>
                </Tabs>
            </div>
        </div>
    );
};

export default HomePage;
