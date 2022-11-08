import React from 'react';
import Typical from 'react-typical';
import './Perfil.css';


export function Perfil() {
    return(
        <div className='perfil-container'>
            <div className='perfil-pai'>
                <div className='perfil-detalhes'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href="https://github.com/Lucas-Alves1">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://www.instagram.com/lxc.lago/">
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>

                    <div className='perfil-detalhes-nome'>
                        <span className='primary-text'>
                            {" "}
                            Olá, me chamo <span className='highlighted-text'>Lucas!</span>
                        </span>
                    </div>

                    <div className='perfil-detalhes-typical'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        'Dev Intusiasta🔴',
                                        1000,
                                        'React.js Dev😎',
                                        1000,
                                        'Front e back-end Dev💻',
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='perfil-tagline'>
                                Aficcionado por tecnologia e apaixonado por novos desafios.
                            </span>
                        </span>
                    </div>

                    <div className='perfil-opcoes'>
                        <button className='btn primary-btn'>
                            {""}
                            Contrate-me{" "}
                        </button>
                            <a href='curriculo-lucas-alves.pdf' download='curriculo-lucas-alves.pdf'>
                                <button className='btn highlighted-btn'>Obter Currículo</button>
                            </a>
                    </div>
                </div>

                <div className='perfil-foto'>
                    <div className='perfil-foto-bg'></div>
                </div>
            </div>
        </div>
    )
}