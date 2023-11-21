'use client';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

import './form.css';
import {Popup} from "@/components/popup/page";

interface LoginFormProps {
    title: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({title}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!email || !password) {
            setShowErrorPopup(true);
            return;
        }

        // Proceed with form submission logic (e.g., API call)
        console.log('Form submitted:', { email, password });
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
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="Email"/>
                </div>
                <div className="form-field">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-input" placeholder="Password"/>
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
        console.log(showErrorPopup)
        event.preventDefault();
        if (!email || !password || !username) {
            setShowErrorPopup(true);
            return;
        }

        // Proceed with form submission logic (e.g., API call)
        console.log('Form submitted:', { email, password });
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