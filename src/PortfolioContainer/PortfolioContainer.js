import React from "react";
import { TOTAL_TELAS } from "../utilities/commonUtils";

export default function PortfolioContainer() {
    const mapTotalTelas = () => {
        return(
            TOTAL_TELAS.map((screen) =>(
                (screen.componente) ? <screen.componente 
                    nomeTela={screen.nome_tela} 
                    key={screen.nome_tela} 
                    id={screen.nome_tela} 
                /> : <div key={screen.nome_tela}></div>
            ))
        )
    }

return(
        <div className="portfolio-container">
            {mapTotalTelas()}
        </div>
    )
}