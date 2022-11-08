import React from 'react';
import './Footer.css';
import Fundo from '../../../assets/home/forma-bg.png';

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-pai'>
                <img src={Fundo} alt='não há conexão com a internet' />
            </div>
        </div>
    )
}