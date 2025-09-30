import React, {useState} from "react";
import user from '../../../assets/icons/user.png';
import styles from './IconUser.module.css';

function IconUser () {
    return(
    <div className="icon-user">
            <div className={styles.ContainerIconUser}>
                <img src={user} alt="icone de usuario" />
            </div>
    </div>
    )
};

export default IconUser;