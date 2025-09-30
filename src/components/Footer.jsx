import React, { userState } from "react";
import style from '../components/Footer.module.css';
import LogoFooter from '../assets/icons/LogoFooter.png';
import IconVisa from '../assets/icons/IconVisa.png';
import MasterCard from '../assets/icons/IconMasterCard.png'
import IconeBankAzul from '../assets/icons/BankBlue.png'
import BankElo from '../assets/icons/BankElo.png'
import IconHiperCard from '../assets/icons/IconHiperCard.png'
import IconAmericanExpress from '../assets/icons/IconExpress.png'
import IconBankTriangulo from '../assets/icons/BankTriangulo.png'
import IconEmpresaCertificada from '../assets/icons/IconCertificado.png'
import IconOpinioes from '../assets/icons/IconOpinioes.png'
import IconSecurite from '../assets/icons/IconSecurite.png'
import IconInstagram from '../assets/icons/IconInstagram.png'
import IconYoutube from '../assets/icons/IconYoutube.png'
import IconLinkedin from '../assets/icons/IconLinkedin.png'
import IconFacebook from '../assets/icons/IconFacebook.png'
function Footer () {
    return(
    <footer className={style.FooterContainer}>
        <div className={style.ContainerInformactions}>
            <div className={style.ContainerFooterImg}>
                <div className={style.ContainerBgIcon}>
                    <img src={LogoFooter} alt="Logo" />
                </div>
            </div>
            <div className={style.BoxConjuntoPagamento}>
                <div className={style.MenuFooter}>
                    <ul className={style.ListaMenu}>
                        <li>PRODUTOS</li>
                        <li>COLEÇÕES</li>
                        <li>LOOKBOOK</li>
                        <li>SOBRE</li>
                        <li>WISHLIST</li>
                        <li>BLOG</li>
                    </ul>
                </div>
                <div className={style.BoxPagamentoESeguranca}>
                    <div className={style.Pagamento}>
                        <div>
                            <h4>FORMAS DE PAGAMENTO</h4>
                        </div>
                        <div className={style.BoxIconCartao}>
                            <div className={style.IconCartao}>
                                <img src={IconVisa} alt="Icone Cartao Visa" />
                                <img src={MasterCard} alt="Icone Cartao Visa" />
                                <img src={IconeBankAzul} alt="Icone Bank Azul" />
                                <img src={BankElo} alt="Banco Elo" />
                            </div>
                            <div className={style.IconCartao}>
                                <img src={IconHiperCard} alt="Icone Cartao Hiper" />
                                <img src={IconAmericanExpress} alt="Icon Cartao Express" />
                                <img src={IconBankTriangulo} alt="Icon Bank" />
                            </div>
                        </div>
                    </div>
                    <div className={style.FooterSeguranca}>
                        <div className={style.FooterSegurancaMini}>
                            <span className={style.CertificadoText}>CERTIFICADOS E SEGURANÇA</span>
                        </div>
                        <div className={style.FooterCertificadoBox}>
                            <div className={style.EmpresaCertificada}>
                                <img src={IconEmpresaCertificada} alt="Icon Empresa Certificada" />
                            </div>
                            <div className={style.IconOpinioesVerdadeiras}>
                                <img src={IconOpinioes} alt="Icon Opinioes" />
                            </div>
                            <div className={style.IconSecurite}>
                                <img src={IconSecurite} alt="Icon Securite" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.BoxHelp}>
                <div className={style.BoxHelpMini}>
                    <span>AJUDA</span>
                </div>
                <div className={style.Faq}>
                    <span>FAQ</span>
                    <span>Sobre nossos produtos</span>
                    <span>Trocas e devoluções</span>
                    <span>Entregas</span>
                    <span>Indique e ganhe</span>
                    <span>Garantias</span>
                </div>
            </div>
            <div className={style.ContainerRedes}>
                <div className={style.Contato}>
                    <h4>CONTATO</h4>
                    <span>WhatsApp - (51) 9999-9999</span>
                    <span>E-mail - ajuda@gat.com.br</span>
                </div>
                <div className={style.RedesSociais}>
                    <span>REDES SOCIAIS</span>
                    <div className={style.BoxIcones}>
                        <div>
                            <img src={IconInstagram} alt="Icone do Instagram" />
                        </div>
                        <div>
                            <img src={IconYoutube} alt="Icone Instagram" />
                        </div>
                        <div>
                            <img src={IconLinkedin} alt="Icone Linkedin" />
                        </div>
                        <div>
                            <img src={IconFacebook} alt="Icone Facebook" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.ContainerDireitosAutorais}>
            <div className={style.ParagrafoFooter}>
                <p>©2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
            <div className={style.ParagrafoFooter}>
                <p>GAT  LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;