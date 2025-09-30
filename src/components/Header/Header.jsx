import React, {useState} from "react";

import Navegation from "./Navigation/Navegation";
import Logo from "./Logo/Logo";
import styles from './Header.module.css';

function Header() {
    return (
    <header className={styles.header}>
        <Logo />
        <Navegation />
    </header>
    )
};

export default Header;