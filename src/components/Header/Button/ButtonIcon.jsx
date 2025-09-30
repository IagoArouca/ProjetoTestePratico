import React from 'react';
import styles from '../../Header/Button/ButtonIcon.module.css';

const Button = ({ children, className = '', onClick }) => {
    return (
        <button 
            className={`${styles.baseButtonIcon} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;