import React from 'react';
import NavBar from './NavBar/NavBar';
import { Perfil } from './Perfil/Perfil';
import Footer from './Footer/Footer';
import './Header.css';

export default function Header(){
    return(
        <div className='header-container'>
            <NavBar />
            <Perfil />
            <Footer />
        </div>
    )
}