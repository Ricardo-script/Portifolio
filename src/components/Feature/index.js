import React from 'react';
import { Container, CardArea, Card, Header, Photo, Title, Contact, Description, Info} from './styles';
import photo from '../../assets/templates/perfil.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Feature(){
    return(
        <Container>
            <CardArea>
                <Card>
                    <Header>
                        <Photo>
                            <img src={photo} alt="R" /> 
                        </Photo>
                    </Header>
                    <Title>
                        <h3>Ricardo Teixeira</h3>
                        <h4>Desenvolvedor Front-end</h4>
                        <h4>Barueri, SP, Brasil</h4>
                    </Title>
                    <Contact>
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
                    </Contact>
                    <Info>
                        <h4>Formação: Análise e desenvolvimento de sistemas</h4>
                    </Info>
                </Card>
                <Description>
                    <h1>Olá, seja bem vindo ao meu <b>portfólio</b>, sou desenvolvedor Front End <b>.</b></h1>
                </Description>
            </CardArea>
        </Container>
    );
}