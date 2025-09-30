import React, {useState} from "react";
import cart from '../../../assets/icons/cart.png'; 
import styles from './Carrinho.module.css';


function Carrinho () {
    return(
    <div className={styles.CarContainer}>
            <img className={styles.CarIcon} src={cart} alt="Icone do carrinho" />
            <div className={styles.Notification}></div>
    </div>
    )
};

export default Carrinho;