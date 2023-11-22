'use client';
import React, {useState} from 'react';

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
        } catch (err) {
            setError('Login failed. Please check your credentials.'); // Adjust the error message as needed
            setShowErrorPopup(true);
            setLoginApiState(API_STATES.UNAUTHORIZED_ERROR);
        }
    };

    const redirectToHome = () => {
        window.location.href = '/';
        return null;
    }

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
            {loginApiState === API_STATES.SUCCESS && redirectToHome()}
        </div>
    );
};

LoginForm.displayName = 'LoginForm';

interface RegisterFormProps {
    title: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [registerApiState, setRegisterApiState] = useState(API_STATES.IDLE);
    const [error, setError] = useState('');

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return regex.test(email);
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!email || !password || !username) {
            setError('Please fill in all fields.');
            setShowErrorPopup(true);
            return;
        }

        if(password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setShowErrorPopup(true);
            return;
        }

        if (password !== passwordConfirmation) {
            setError('Passwords do not match.');
            setShowErrorPopup(true);
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            setShowErrorPopup(true);
            return;
        }

        try {
            setRegisterApiState(API_STATES.LOADING);
            await userStore.registerUser(email, password, passwordConfirmation,  username, fullname);
            setRegisterApiState(API_STATES.SUCCESS);
        } catch (err) {
            setError(`Registration failed. Please check your credentials. ${err}`);
            setShowErrorPopup(true);
            setRegisterApiState(API_STATES.UNAUTHORIZED_ERROR);
        }
    };

    const redirectToHome = () => {
        window.location.href = '/';
        return null;
    }

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
                <div className="form-field">
                    <label htmlFor="passwordConfirmation" className="form-label">Confirm Password </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="form-input"
                        placeholder="Confirm Password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="fullname" className="form-label">Fullname</label>
                    <input
                        type="text"
                        id="fullname"
                        className="form-input"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
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
            {registerApiState === API_STATES.SUCCESS && redirectToHome()}
        </div>
    );
};

RegisterForm.displayName = 'RegisterForm';
