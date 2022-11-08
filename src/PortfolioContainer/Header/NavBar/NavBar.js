import React, { useState } from "react";
import { TOTAL_TELAS, GET_TELAS_INDEX } from "../../../utilities/commonUtils";
import ScrollService from '../../../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

export default function NavBar() {
    const [telaSelecionada, setTelaSelecionada] = useState(0)
    const [mostraOpcoesNav, setMostraOpcoesNav] = useState(false)

    const atualizaTelaAtual = (telaAtual) => {
        if(!telaAtual || !telaAtual.screenInView)
        return;

        let telaIndex = GET_TELAS_INDEX(telaAtual.screenInView)
        if(telaIndex < 0)
        return;
    }

    let telaAtualSubscription = ScrollService.atualBroadcaster.subscribe(atualizaTelaAtual)

    const getNavBarOptions = () => {
        return(
            TOTAL_TELAS.map(( screen, i ) => (
                <div key={screen.nome_tela} className={getNavBarOptionsClass(i)}
                onClick={() => trocaTela(i, screen)}>
                    <span>{screen.nome_tela}</span>
                </div>
            ))
        )
    }

    const getNavBarOptionsClass = (index) => {
        let classes = "navbar-option";
        if (index < TOTAL_TELAS.length -1)
        classes += "navbar-option-separador";

        if (telaSelecionada === index)
        classes += "navbar-option-selecionado";
        return
    }

    const trocaTela = (index, screen) => {
        let componenteNaTela = document.getElementById(screen.nome_tela)
        if (!componenteNaTela)
        return;

        componenteNaTela.scrollIntoView({ behavior: 'smooth' })
        setTelaSelecionada(index);
        mostraOpcoesNav(false);
    }
    
    return(
        <div>
            <div className="navbar-container" 
            onClick={() => setMostraOpcoesNav(!mostraOpcoesNav)}>
                <div className="navbar-pai">
                    <div className="navbar-hamburger" onClick={() => setMostraOpcoesNav(!mostraOpcoesNav)}>
                        <FontAwesomeIcon className="navbar-hamburger-bars" icon={ faBars } />
                    </div>
                    <div className="navbar-logo">
                        <span>PORTFÓLIO~</span>
                    </div>
                    <div className={( mostraOpcoesNav ) ? "navbar-options mostra-hamburger-options" : "navbar-options"}>
                        {getNavBarOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}