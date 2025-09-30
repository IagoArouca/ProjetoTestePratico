import React, {useState} from "react";
import style from '../components/Colecoes.module.css';
import Pryze from '../assets/icons/prize.png';
import Paw from '../assets/icons/paw.png';
import Movel from '../assets/images/MovelGato.png';
import ButtonWhite from "./Header/Button/ButtonWhite";
import MovelcomGato from '../assets/images/MovelcomGato.png';
import Adicao from '../assets/icons/adicao.png';
import ArrowLeft from '../assets/images/Arrow1.png';
import ArrowRight from '../assets/images/Arrow2.png'
import Retangle from '../assets/images/Rectangle1.png'
import Retangle1 from '../assets/images/Rectangle2.png'

function Colecoes () {
    return (
    <div className={style.ContainerColecoes}>
        <div className={style.ContainerOrange}>
            <div className={style.ContainerBeneficioPrincipal}>
                <div className={style.ContainerNumber}>
                    <span className={style.Number}>10</span>
                </div>
                <div className={style.ContainerPrincipalSmall}>
                    <div className={style.ContainerPrincipalSmallTitle}>
                        <h2>Benefício </h2>
                        <h2>Principal</h2>
                    </div>
                    <div className={style.ContainerPrincipalSmallText}>
                        <p>Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>
            </div>

            <div className={style.ContainerBeneficioSecundario}>
                <div className={style.ContainerBeneficionsSecundarioTop}>
                    <div className={style.ContainerBeneficioSecundarioMinione}>                            
                        <div className={style.ContainerBeneficiosSecundariosIcon}>
                            <img src={Pryze} alt="Icone estrela" />
                            <div className={style.ContainerBeneficiosSecundarioTitle}>
                                <h2>Beneficio</h2>
                                <h2>Secundario</h2>
                            </div>
                        </div>
                        <div className={style.ContainerBeneficioSecundarioText}>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>consectetur al muad'ib</p>
                        </div>
                       
                    </div>
                    <div className={style.ContainerBeneficioSecundarioMinione}>                            
                        <div className={style.ContainerBeneficiosSecundariosIcon}>
                            <img src={Pryze} alt="Icone estrela" />
                            <div className={style.ContainerBeneficiosSecundarioTitle}>
                                <h2>Beneficio</h2>
                                <h2>Secundario</h2>
                            </div>
                        </div>
                        <div className={style.ContainerBeneficioSecundarioText}>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>consectetur al muad'ib</p>
                        </div>
                       
                    </div>
                    <div className={style.ContainerBeneficioSecundarioMinione}>                            
                        <div className={style.ContainerBeneficiosSecundariosIcon}>
                            <img src={Pryze} alt="Icone estrela" />
                            <div className={style.ContainerBeneficiosSecundarioTitle}>
                                <h2>Beneficio</h2>
                                <h2>Secundario</h2>
                            </div>
                        </div>
                        <div className={style.ContainerBeneficioSecundarioText}>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>consectetur al muad'ib</p>
                        </div>
                       
                    </div>
                </div>

                <div className={style.ContainerBeneficioSecundarioButtom}>
                    <span>Beneficio Terciário</span>
                    <img src={Paw} alt="Icone Pata" />
                    <span>Beneficio Terciário</span>
                    <img src={Paw} alt="Icone Pata" />
                    <span>Lisan Al Gaib</span>
                    <img src={Paw} alt="Icone Pata" />
                    <span>Beneficio Terciário</span>
                    <img src={Paw} alt="Icone Pata" />
                </div>
            </div>
        </div>

        <div className={style.ContainerExplorer}>
                <div className={style.ContainerConjunto}>
                    
                        <div className={style.ContainerMovelImg}>
                            <img src={Movel} alt="Movel do gato" />
                        </div>
                        <div className={style.ContainerMinimalismo}>
                            <div className={style.ContainerMinimalismoMini}>
                                <h2>MINIMA</h2>
                                <h2>LISMO</h2>
                            </div>
                        </div>
                        <div className={style.ContainerButton}>
                            <p>Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.</p>
                            <ButtonWhite className={style.baseButtonWhite}>
                                EXPLORAR
                            </ButtonWhite>   
                        </div>

                        <div className={style.ContainerSeeColections}>
                            <h3>COLEÇÔES</h3>
                            <span>
                                <p>VER TODAS</p>
                            </span>
                        </div>
                   
                </div>

                <div className={style.ContainerImgMovelRight}>
                    <img src={MovelcomGato} alt="Movel com o gato dentro" />
                </div>

                <div className={style.DottedCircle}>
                    <img src={Retangle} alt="Pontilhados" />
                </div>
                <div className={style.HalfCircle}>
                    <img src={Retangle1} alt="Pontilhados" />
                </div>

                <div className={style.ContainerArrowsColecoes}>
                    <img src={ArrowLeft} alt="Seta esquerda" />
                    <img src={ArrowRight} alt="seta direita" />
                </div>
                <div className={style.AdicaoSimbol}>
                    <img src={Adicao} alt="Simbolo de adição" />
                </div>

        </div>
    </div>
    )
};

export default Colecoes;