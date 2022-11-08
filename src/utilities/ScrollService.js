import { TOTAL_TELAS } from "./commonUtils";
import { Subject } from 'rxjs';

export default class ScrollService{
    static scroll = new ScrollService()

    static atualBroadcaster = new Subject()
    static atualFadeIn = new Subject()

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollContato = () => {
        let telaContato = document.getElementById("Contato")
        if(!telaContato) return;
        telaContato.scrollIntoView({behavior: "smooth"})
    }
    scrollHeader = () => {
        let telaHeader = document.getElementById("Header")
        if(!telaHeader) return;
        telaHeader.scrollIntoView({behavior: "smooth"})
    }

    estaSendoVisto = (elem, tipo) => {
        let rec = elem.getBoundingClientRect();
        let elementoTop = rec.top;
        let elementoBottom = rec.bottom;

        let parcialmenteVisivel = elementoTop < window.innerHeight && elementoBottom >= 0;
        let totalmenteVisivel = elementoTop >= 0 && elementoBottom <= window.innerHeight;

        switch(tipo){
            case "parcial":
                return parcialmenteVisivel;

            case "total":
                return totalmenteVisivel;
                default:
                    return false;
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_TELAS){
            let telaDOM = document.getElementById(screen.nome_tela);
            if(!telaDOM) 
            continue;

            let totalmenteVisivel = this.estaSendoVisto(telaDOM, "total");
            let parcialmenteVisivel = this.estaSendoVisto(telaDOM, "parcial");

            if(totalmenteVisivel || parcialmenteVisivel){
                if(parcialmenteVisivel && !screen.alreadyRendered){
                    ScrollService.atualFadeIn.next({
                        telaFadeIn: screen.nome_tela
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(totalmenteVisivel){
                    ScrollService.atualBroadcaster.next({
                        telaSendoVista: screen.nome_tela
                    });
                    break;
                }
            }
        } 
    }
}