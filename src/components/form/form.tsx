'use client';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

import {userStore} from "@/store/user";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'

import './form.css';
import {Popup} from "@/components/popup/page";

import {API_STATES} from "@/utils/api";

interface LoginFormProps {
    title: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({title}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [loginApiState, setLoginApiState] = useState(API_STATES.IDLE);
    const [error, setError] = useState('');

    const router = useRouter();

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return regex.test(email);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
            setShowErrorPopup(true);
            return;
        }

        if(password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setShowErrorPopup(true);
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            setShowErrorPopup(true);
            return;
        }

        try {
            setLoginApiState(API_STATES.LOADING);
            await userStore.loginUser(email, password);
            setLoginApiState(API_STATES.SUCCESS);
            router.push('/');
        } catch (err) {
            setError('Login failed. Please check your credentials.'); // Adjust the error message as needed
            setShowErrorPopup(true);
            setLoginApiState(API_STATES.UNAUTHORIZED_ERROR);
        }
    };

    const renderErrorPopup = () => {
        return (
            <Popup
                title={'Error'}
                content={error}
                onClose={() => setShowErrorPopup(false)}
            />
        );
    }

    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text" // Changed to text to disable automatic HTML validation
                        id="email"
                        className="form-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="social-media-section">
                        <div className="social-media-buttons">
                            <div className="social-media-button" onClick={() => {/* handle Google login */}}>
                                <FontAwesomeIcon icon={faGoogle} bounce size="xl" />
                            </div>
                            <div className="social-media-button" onClick={() => {/* handle Meta login */}}>
                                <FontAwesomeIcon icon={faFacebook} bounce size="xl" />
                            </div>
                        </div>
                    </div>
                <button type="submit" className="form-button">{title}</button>
            </form>
            {showErrorPopup && renderErrorPopup()}
        </div>
    );
};

LoginForm.displayName = 'LoginForm';

interface RegisterFormProps {
    title: string;
}

// components/RegisterForm.tsx
export const RegisterForm: React.FC<RegisterFormProps> = ({ title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!email || !password || !username) {
            setShowErrorPopup(true);
            return;
        }
    };

    const renderErrorPopup = () => {
        return (
            <Popup
                title={'Error'}
                content={'Please fill in all required fields.'}
                onClose={() => setShowErrorPopup(false)}
            />
        );
    }
    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input type="email" id="email" className="form-input" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label htmlFor="password" className="form-label">Password *</label>
                    <input type="password" id="password" className="form-input" placeholder="Password" />
                </div>
                <div className="form-field">
                    <label htmlFor="username" className="form-label">Username *</label>
                    <input type="text" id="username" className="form-input" placeholder="Username" />
                </div>
                <div className="form-field">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" id="fullname" className="form-input" placeholder="Full Name" />
                </div>
                <div className="social-media-section">
                    <div className="social-media-buttons">
                        <div className="social-media-button" onClick={() => {/* handle Google login */}}>
                            <FontAwesomeIcon icon={faGoogle} bounce size="xl" />
                        </div>
                        <div className="social-media-button" onClick={() => {/* handle Meta login */}}>
                            <FontAwesomeIcon icon={faFacebook} bounce size="xl" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="form-button">{title}</button>
            </form>
            {showErrorPopup && renderErrorPopup()}
        </div>
    );
};


RegisterForm.displayName = 'RegisterForm';