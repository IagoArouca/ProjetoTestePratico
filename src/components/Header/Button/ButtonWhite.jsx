import React from 'react';
import styles from '../../Header/Button/ButtonWhite.module.css';

const ButtonWhite = ({ children, className = '', onClick }) => {
    return (
        <button 
            className={`${styles.baseButtonWhite} ${className}`}
            onClick={onClick}
        >

            {children}
        </button>
    );
};

export default ButtonWhite;