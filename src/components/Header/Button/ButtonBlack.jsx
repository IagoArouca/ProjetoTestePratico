import React from 'react';
import styles from '../../Header/Button/ButtonBlack.module.css';

const Button = ({ children, className = '', onClick }) => {
    return (
        <button 
            className={`${styles.baseButton} ${className}`}
            onClick={onClick}
        >

            {children}
        </button>
    );
};

export default Button;