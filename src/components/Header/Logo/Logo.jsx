import React, { useState} from "react";
import logo from '../../../assets/icons/Logo.png';
import styles from './Logo.module.css';

function Logo () {
    return(
     <div className={styles.logo}>
            <div className={styles.container}>
                <img src={logo} alt="Logo da pagina" />
            </div>
        </div>
    )
};

export default Logo;