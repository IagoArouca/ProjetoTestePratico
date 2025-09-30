import React, {useState} from "react";
import style from '../components/MainSection.module.css'
import BannerMain from '../assets/images/BannerHero11.png'
import ArrowLeft from '../assets/images/Arrow1.png'
import ArrowRight from '../assets/images/Arrow2.png'
import Button from "./Header/Button/ButtonBlack";
import Header from "./Header/Header";

function  MainSection () {
    return(
        <div className={style.ContainerMain}>
            <img className={style.ContainerMainBanner} src={BannerMain} alt="Banner da nova coleção" />
            <Header />
            <div className={style.arrowsContainer}>
                <button className={style.ButaoSeta}>
                    <img src={ArrowLeft} alt="Seta esquerda" />
                </button>

                <button className={style.ButaoSeta}>
                    <img src={ArrowRight} alt="Seta direita" />
                </button>
            </div>

            <Button className={style.baseButton}>
                    VER COLEÇÃO
            </Button>
        </div>

        
    )
};

export default MainSection;