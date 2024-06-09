import React from 'react';
import './Modal.css';

export const Modal = ({ show, onClose, title, content }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};
