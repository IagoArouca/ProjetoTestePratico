import React, { useState} from 'react';
import Movel from '../assets/images/MovelGato.png'
import style from '../components/Products.module.css';
import ButtonWhite from "./Header/Button/ButtonWhite";

function ProductCard() {
  return (
    <section className={style.ContainerReferencial}>
        <div className={style.Circle}></div>
        <div className={style.ContainerSmall}>
            <div className={style.ContainerText}>
            <h2>QUERI</h2>
            <h2>DINHO</h2>
            <span>DELES</span>

            <ButtonWhite className={style.baseButtonWhite}>
                    VER TUDO
                </ButtonWhite> 
            </div>
            
        </div>
        <div className={style.ContainerEstrutural}>
            <div className={style.ContainerProducts}>
                <div className={style.ContainerBlue}>
                    <span>10%</span>
                    <span className={style.ContainerBlueText}>OFF</span>
                </div>
                <div className={style.ContainerOrage}>
                    <span className={style.ContainerLancamento}>LANÇAMENTO</span>
                </div>

                <div className={style.ContainerImgProduct}>
                    <img src={Movel} alt="Movel do gato" />
                </div>

                <div className={style.ContainerProductDescription}>
                    <span>TOCA TÚNEL</span>
                    <span>MÓDULOS</span>
                </div>

                <div className={style.ContainerProductPrice}>
                    <span className={style.PriceCrossedOut}>R$00,00</span>
                    <span>R$0000,00</span>
                </div>

                <div className={style.ContainerColors}>
                    <div className={style.CircleGray}></div>
                    <div className={style.CircleRed}></div>
                    <div className={style.CircleGreen}></div>
                    <div className={style.CirclePurple}></div>
                </div>        
            </div>

            <div className={style.ContainerProducts}>
                <div className={style.ContainerBlue}>
                    <span className={style.NumeroPorcentagem}><h4>10%</h4></span>
                    <span className={style.ContainerBlueText}>OFF</span>
                </div>
                <div className={style.ContainerOrage}>
                    <span className={style.ContainerLancamento}>LANÇAMENTO</span>
                </div>

                <div className={style.ContainerImgProduct}>
                    <img src={Movel} alt="Movel do gato" />
                </div>

                <div className={style.ContainerProductDescription}>
                    <span>TOCA TÚNEL</span>
                    <span>MÓDULOS</span>
                </div>

                <div className={style.ContainerProductPrice}>
                    <span className={style.PriceCrossedOut}>R$00,00</span>
                    <span>R$0000,00</span>
                </div>

                <div className={style.ContainerColors}>
                    <div className={style.CircleGray}></div>
                    <div className={style.CircleRed}></div>
                    <div className={style.CircleGreen}></div>
                    <div className={style.CirclePurple}></div>
                </div>        
            </div>

            <div className={style.ContainerProducts}>
                <div className={style.ContainerBlue}>
                    <span>10%</span>
                    <span className={style.ContainerBlueText}>OFF</span>
                </div>
                <div className={style.ContainerOrage}>
                    <span className={style.ContainerLancamento}>LANÇAMENTO</span>
                </div>

                <div className={style.ContainerImgProduct}>
                    <img src={Movel} alt="Movel do gato" />
                </div>

                <div className={style.ContainerProductDescription}>
                    <span>TOCA TÚNEL</span>
                    <span>MÓDULOS</span>
                </div>

                <div className={style.ContainerProductPrice}>
                    <span className={style.PriceCrossedOut}>R$00,00</span>
                    <span>R$0000,00</span>
                </div>

                <div className={style.ContainerColors}>
                    <div className={style.CircleGray}></div>
                    <div className={style.CircleRed}></div>
                    <div className={style.CircleGreen}></div>
                    <div className={style.CirclePurple}></div>
                </div>        
            </div>
        </div>
    </section>

        
  );
}

export default ProductCard;