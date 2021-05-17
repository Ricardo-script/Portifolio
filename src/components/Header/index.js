import React, { useState } from 'react';
import {Container, HeaderTop, Logo, MenuToggle, Menu } from './styles';
import logo from '../../assets/templates/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    const [menu, setMenu] = useState('');
    const [nav, setNav] = useState('offNav');

    function openMenu(){

        if( menu === 'on'){
            setMenu('');
            setNav('offNav');
        } else{
            setMenu('on');
            setNav('onNav');
        }
    }

    return(
        <Container id="home">
            <HeaderTop>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <Menu>
                    <ul className={nav}>
                        <li><Link smooth to='#home'>Home</Link></li>
                        <li><Link smooth to='#servicos'>Serviços</Link></li>
                        <li><Link smooth to='#sobre'>Sobre</Link></li>
                        <li><Link smooth to='#skills'>Skills</Link></li>
                        <li><Link smooth to='#portifolio'>Portifólio</Link></li>
                        <li><Link smooth to='#contato'>Contato</Link></li>
                    </ul>
                </Menu>
                <MenuToggle>
                    <div className={`area-menu ${menu}`}>
                        <div className='hamburguer' onClick={openMenu}>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                    </div>
                </MenuToggle>
            </HeaderTop>
        </Container>
    );
}

export default Header;