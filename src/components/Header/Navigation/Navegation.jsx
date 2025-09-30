import React, {useState} from "react";
import SearchInput from "../Search/SearchInput";
import IconUser from "../User/IconUser";
import Carrinho from "../Carrinho/Carrinho";
import menu1 from '../../../assets/icons/menu_01.png'; 
import menu2 from '../../../assets/icons/menu_02.png'; 
import styles from './Navegation.module.css';

function Navegation () {
    return(
        <nav className={styles.navegation}>
            <div className={styles.LeftDivider}>
                <ul className={styles.navProducts}>
                    <li className={styles.navListProducts}>
                        <img className={styles.navListProductsImg} src={menu1} alt="Icone retangulos e circulos" />
                        <a className={styles.navLisProductsText} href="#">produtos</a>
                    </li>
                </ul>

                <ul className={styles.navColecoes}>
                    <li className={styles.navListColecoes}>
                        <img className={styles.navListColecoesImg} src={menu2} alt="Icone retangulos e circulos" />
                        <a className={styles.navListColecoesText} href="">coleçôes</a>
                    </li>
                </ul>
            </div>

            <div className={styles.RightDivider}>
                <ul className={styles.navMenu}>
                    <li className={styles.navMenuList}>
                        <a className={styles.navMenuListLink} href="#">blog</a>
                        <a className={styles.navMenuListLink} href="#">lookbook</a>
                        <a className={styles.navMenuListLink} href="#">sobre a Gat</a>
                        <a className={styles.navMenuListLink} href="#">wishlist</a>
                    </li>
                </ul>
        
                <SearchInput />
                <IconUser />
                <Carrinho />
            </div>


        </nav>
    )
};

export default Navegation;