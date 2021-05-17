import React from 'react';
import { AreaFooter, Container, Icons } from './styles';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer(){
    return(
        <AreaFooter>
            <Container>
            <div class="row">
                    <div class="col">
                        <h3>Serviços</h3>
                        <ul>
                            <li><Link smooth to="#servico">Web design</Link></li>
                            <li><Link smooth to="/#servico">Mobile</Link></li>
                            <li><Link smooth to="/#home">Home</Link></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Sobre</h3>
                        <ul>
                            <li><Link smooth to="#sobre">Curriculum</Link></li>
                            <li><Link smooth to="#contato">Contato</Link></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Skills</h3>
                        <ul>
                            <li><Link smooth to="#skills">React</Link></li>
                            <li><Link smooth to="#skills">Javascript</Link></li>
                            <li><Link smooth to="#skills">Html</Link></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Portifólio</h3>
                        <ul>
                            <li><Link smooth to="#portifolio">Projetos</Link></li>
                            <li><Link smooth to="#portifolio">GitHub</Link></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Contato</h3>
                        <ul>
                            <li><Link smooth to="#contato">Linkedin</Link></li>
                            <li><Link smooth to="#contato">Email</Link></li>
                            <li><Link smooth to="#contato">Mensagem</Link></li>
                            <li><Link smooth to="#contato">Facebook</Link></li>
                        </ul>
                    </div>
                </div>
                <Icons>
                    <div className='icon'>
                        <a href="https://github.com/Ricardo-script" Target="_blank">
                            <FaGithubSquare size={30} color="#FFF"/>
                        </a>
                    </div>
                    <div className='icon'>
                        <a href="https://www.linkedin.com/in/ricardo-teixeira-19389718a/" Target="_blank">
                            <FaLinkedin size={30} color="#FFF"/>
                        </a>
                    </div>
                    <div className='icon'>
                        <a href="https://www.facebook.com/ricardo.teixeira.58958" Target="_blank">
                            <FaFacebookSquare size={30} color="#FFF"/>
                        </a>
                    </div>
                </Icons>
                <p class="copyright">Todos os direitos reservados © 2021 Ricardo Teixeira</p>
            </Container>
        </AreaFooter>
    );
}