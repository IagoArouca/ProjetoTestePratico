import React, { useState} from 'react';
import style from '../components/Categorias.module.css';
import IconePedra from '../assets/icons/IconePedra.png';
import IconHome from '../assets/icons/IconCasinha.png'
import IconHomeOlho from '../assets/icons/CasaOlho.png'
import IconHomePiano from '../assets/icons/CasaPiano.png';
import GatoCategorias from '../assets/images/GatoCategorias.png';
import ButtonWhite from './Header/Button/ButtonWhite';

function Categorias () {
    return (
        <div className={style.ContainerCategorias}>
            <div className={style.ContainerTitle}>
                <p>NAVEGUE PELAS CATEGORIAS</p>
            </div>
            <div className={style.ContainerButtons}>
                <button className={style.ButtonPedra}>
                    <img src={IconePedra} alt="Icone Pedra" />
                    <p>CLÁSSICO</p>
                </button>
                <button className={style.ButtonHomeCat}>
                    <img src={IconHome} alt="Casa de gato" />
                    <p>MINIMALISMO</p>
                </button>
                <button className={style.ButtonHomeOlhoCat}>
                    <img src={IconHomeOlho} alt="Casa de gato olho" />
                    <p>MAXIMALISMO</p>
                </button>
                <button className={style.ButtonHomePiano}>
                    <img src={IconHomePiano} alt="Casa de gato" />
                    <p>BOHO</p>
                </button>
                <button className={style.ButtonVerTudo}>
                    <p>VER TUDO</p>
                </button> 
            </div>
            <div>
                
            </div>
            <div className={style.ContainerCatTwo}>
                <img src={GatoCategorias} alt="Gatos descansando" />
                <div className={style.ContainerCategoriaBoxText}>
                        <div className={style.ContegoriasText}>
                            <div>
                                <h2>Lorem  Ipsum</h2>
                                <h2>Dolor Sit</h2>
                            </div>
                        </div>
                        <div className={style.BoxText}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    <ButtonWhite className={style.baseButtonWhite}>
                        VER SELEÇÃO
                    </ButtonWhite> 
                </div>

                    <div className={`${style.CircleNumberBase} ${style.PositionOne}`}>1</div>
                    <div className={`${style.CircleNumberBase} ${style.PositionTwo}`}>2</div>
                    <div className={`${style.CircleNumberBase} ${style.PositionThree}`}>3</div>
                    <div className={`${style.CircleNumberBase} ${style.PositionFour}`}>4</div>
                    <div className={`${style.CircleNumberBase} ${style.PositionFive}`}>5</div>
            </div>

        </div>
    )
};

export default Categorias;