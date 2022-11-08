export default class Animacoes{
    static animacoes = new Animacoes();

    telaFadeIn = (nome_tela) => {
        let tela = document.getElementById(nome_tela);
        if(!nome_tela || !tela) 
        return;

        tela.style.opacity = "5";
        tela.style.transform = "translateY(1px)"
    }
}