import React, { useEffect } from 'react';
import Heading from '../../utilities/Heading/Heading';
import ScrollService from '../../utilities/ScrollService';
import Animacoes from '../../utilities/Animacoes';

export default function SobreMim(props){
    return(
        <div className='sobre-mim-container tela-container'>
            <div className='sobre-mim-pai'>
                <Heading title={'Sobre Mim'} subHeading={'Conheça-me melhor!'} />
            </div>
        </div>
    )
}