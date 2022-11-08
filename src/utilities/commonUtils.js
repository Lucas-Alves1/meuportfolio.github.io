import Header from "../PortfolioContainer/Header/Header";
import SobreMim from "../PortfolioContainer/SobreMim/SobreMim";

export const TOTAL_TELAS = [
    {
        nome_tela: "Header",
        componente: Header,
    },
    {
        nome_tela: "SobreMim",
        componente: SobreMim,
    },
]

export const GET_TELAS_INDEX = (nome_tela) => {
    if (!nome_tela) 
    return -1

    for (let i = 0; i < TOTAL_TELAS.length; i++){
        if (TOTAL_TELAS[i].nome_tela === nome_tela)
        return i
    }
    return -1;
} 