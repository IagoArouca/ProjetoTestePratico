import React, { userState } from "react";
import style from '../components/Newsletter.module.css';
import GatoNewsletter from '../assets/images/GatoAmareloNew.jpg'

function Newsletter () {
    return(
    <section className={style.ContainerNewsletter}>
        <div className={style.ContainerMiniNewsletter}>
            <div className={style.TitleNewsletter}>
                <h2>NEWSLETTER</h2>
            </div>
            <div className={style.BoxImgCat}>
                <img src={GatoNewsletter} alt="Gato amarelo recebendo carinho" />
            </div>
            <div className={style.BoxNewsletterCadastro}>
                <div className={style.ContainerBoxText}>
                    <div className={style.BoxCadastre}>
                        <h3>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</h3>
                    </div>
                    <div className={style.BoxDescription}>
                        <p>Seja a primeira a receber lançamentos, novidades e promoções.</p>
                    </div>
                </div>



                
                <form className={style.formunderline} action="">
                    <div className={style.inputgroup}>
                        <label htmlFor="">NOME DO SEU PET</label>
                        <input className={style.inputCadastro} type="text" ></input>
                    </div>
                    <div className={style.inputgroup}>
                        <label for="email">E-MAIL</label>
                        <input className={style.inputCadastro} type="email" required></input>
                    </div>
                    <button className={style.ButtonCadastro}>Cadastrar</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Newsletter;