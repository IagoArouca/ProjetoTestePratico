import React, { userState } from "react";
import style from '../components/Sobre.module.css';
import CatSobre from '../assets/images/CatSobre.jpg';
import GatoCinza1 from '../assets/images/GatoCinza1.png';
import GatoTwoimg from '../assets/images/Gatotwo.jpg';
import GatoCaixa from '../assets/images/GatoAmareloCaixa.jpg';
import GatoCinzaPorta from '../assets/images/GatoCinzaPorta.jpg';
import IconLike from '../assets/icons/Like.png'
import Play from '../assets/images/Play.png'

function Sobre () {
    return (
        <section>
            <div className={style.ContainerSobre}>
                <div className={style.ColorsBg}>
                    <div className={style.ContainerSobreVideo}>
                    
                        <div className={style.BoxText}>
                            <h2>Decorar</h2>
                            <h2>Arranhar &</h2>
                            <h2>Relaxar</h2>
                        </div>

                        <div className={style.ContainerSobreVideoMini}>
                            <div className={style.BoxImgCat}>
                                <div className={style.BoxPlay}>
                                    <img src={Play} alt="Play botao" />
                                </div>
                                <img src={CatSobre} alt="Video de gato" />
                            </div>
                            <div className={style.BoxParagrafo}>
                                <p>
                                    Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.
                                </p>
                            </div>
                            <button className={style.ButtonSobre}>MAIS SOBRE A GAT</button>
                        </div>

                        <div className={style.CircleColorSobre}></div>
                    </div>
                </div>


                <div className={style.ContainerImgCats}>

                    <div className={style.ContainerComunidadeText}>
                        <p>Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag</p>
                    </div>
                    <div className={style.AdoradoresPapelaoTitle}>
                        <h2>#AdoradoresDePapelão</h2>
                    </div>
                    <div className={style.BoxCatLike}>
                        <div className={`${style.CatLike} ${style.PositionOneCat}`}>
                            <img src={GatoCinza1} alt="Gato Cinza" />
                        </div>
                        <div className={`${style.CatLike} ${style.PositionOneCat}`}  >
                            <img src={GatoTwoimg} alt="Gato amarelo olhando pra foto" />
                        </div>
                        <div className={`${style.CatLike} ${style.PositionOneCat}`}>
                            <img src={GatoCaixa} alt="Gato sentado na caixa" />
                        </div>
                        <div className={`${style.CatLike} ${style.PositionOneCat}`}>
                            <img src={GatoCinzaPorta} alt="Gato olhando na porta" />
                        </div>

                        <div className={style.IconBoxLike}>
                            <div className={style.BoxLikeConteudo}>
                                <div className={style.MiniBoxLike}>
                                    <img src={IconLike} alt="Icone de Coração" />
                                </div>
                                <span>10mil</span>
                            </div>
                            <div className={style.BoxLikeConteudo}>
                                <div className={style.MiniBoxLike}>
                                    <img src={IconLike} alt="Icone de Coração" />
                                </div>
                                <span>10mil</span>
                            </div>
                            <div className={style.BoxLikeConteudo}>
                                <div className={style.MiniBoxLike}>
                                    <img src={IconLike} alt="Icone de Coração" />
                                </div>
                                <span>10mil</span>
                            </div>
                            <div className={style.BoxLikeConteudo}>
                                <div className={style.MiniBoxLike}>
                                    <img src={IconLike} alt="Icone de Coração" />
                                </div>
                                <span>10mil</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;