import React from 'react';
import './Popup.css';

interface PopupProps {
    title: string;
    content: string;
    onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ title, content, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="popup-close-button">X</button>
                </div>
                <hr />
                <div className="popup-content">
                    <p>{content}</p>
                </div>
                <hr />
                <div className="popup-footer">
                    <button
                        className="mx-2 p-2 rounded hover:bg-gray-700"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
