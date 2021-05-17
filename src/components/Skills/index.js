import React from 'react';
import { Container, Header, AreaSkills, Card } from './styles';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import javascript from '../../assets/icons/javascript.png';
import react from '../../assets/icons/react.png';
import react_native from '../../assets/icons/react native.png';
import styled from '../../assets/icons/styled.png';
import node from '../../assets/icons/nodejs.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import jquery from '../../assets/icons/jquery.png';
import sass from '../../assets/icons/sass.png';
import strapi from '../../assets/icons/strapi.png';
import vtex from '../../assets/icons/vtex.png';
import mongodb from '../../assets/icons/mongodb.png';
import c from '../../assets/icons/C.png';
import csharp from '../../assets/icons/c-sharp.png';
import vba from '../../assets/icons/vba.png';
import git from '../../assets/icons/git.png';
import mysql from   '../../assets/icons/mysql.png';
import sqlite from '../../assets/icons/sqlite.png';

export default function Skills(){
    return(
        <Container>
            <Header>
                <div class='line' id="skills"></div>
                <h2>Skills</h2>
            </Header>
            <AreaSkills>
                <Card color="#FF5722">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={html} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>HTML</h1>
                        <p>Desenvolvimento com as tags semânticas do html5</p>
                    </div>
                </Card>
                <Card color="#1572B6">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={css} alt="css" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>CSS</h1>
                        <p>Criação de layouts responsivos e animações modernas</p>
                    </div>
                </Card>
                <Card color="#FFDA3E">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={javascript} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Javascript</h1>
                        <p> Controle de comportamento dos elementos, execução de funções
                            dinâmicos dos conteúdos, animações, aplicativos e interações.
                        </p>
                    </div>
                </Card>
                <Card color="#00D8FF">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={react} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>React</h1>
                        <p>
                            Desenvolvimento de aplicações web utilizando a bibliotecas de componentes,
                            utilização de hooks,rotas, state e utilização de Apis rest.
                        </p>
                    </div>
                </Card>
                <Card color="#573595">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={react_native} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>React Native</h1>
                        <p>Desenvolvimento de aplicações mobile, tanto para Android como para iOS, 
                            geração de código nativo;Desenvolvimento utilizando componentes
                        </p>
                    </div>
                </Card>
                <Card color="#E371B1">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={styled} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Styled components</h1>
                        <p>
                            Estilização, animações, responsividade, encadeamento de estilos para 
                            React e React native
                        </p>
                    </div>
                </Card>
                <Card color="#4CAF50">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={node} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Node JS</h1>
                        <p>Desenvolvimento back-end com arquitetura Model-View-Controller (MVC) </p>
                    </div>
                </Card>
                <Card color="#573595">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={bootstrap} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Bootstrap</h1>
                        <p>
                            Criação e personalização para sites responsivos para dispositivos móveis,
                            desktops e notebooks
                        </p>
                    </div>
                </Card>
                <Card color="#0868AC">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={jquery} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Jquery</h1>
                        <p>Manipulação de eventos, animações, elementos html e utilização de Ajax</p>
                    </div>
                </Card>
                <Card color="#D56FA4">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={sass} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Sass</h1>
                        <p>
                            Estilização com códigos reutilizáveis, utilizando a metodologia
                            de padronização B.E.M.
                        </p>
                    </div>
                </Card>
                <Card color="#4E26E0">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={strapi} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Strapi</h1>
                        <p>
                            Criação de API's de forma simples e rápida 
                            com uso do framework Strapi.
                        </p>
                    </div>
                </Card>
                <Card color="#F71963">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={vtex} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Vtex</h1>
                        <p>
                            Desenvolvimento de paginas web com a plataforma de e-commerce SaaS 
                            cadastro de produtos,integração com meios de pagamento, calculo de frete...
                        </p>
                    </div>
                </Card>
                <Card color="#4CAF50">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={mongodb} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Mongodb</h1>
                        <p>
                            Criação de banco de dados orientado a documentos
                            não relacional utilizando o formato JSON.
                        </p>
                    </div>
                </Card>
                <Card color="#0868AC">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={mysql} alt="mysql" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>MySql</h1>
                        <p>
                            Guardar e manipular os dados, delimitando a funcionalidade para cada tabela criada.
                        </p>
                    </div>
                </Card>
                <Card color="#649AD2">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={sqlite} alt="mysql" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Sqlite</h1>
                        <p>
                            Criar, modificar, alterar e deletar utilizando os wizards do SQLite.
                        </p>
                    </div>
                </Card>
                <Card color="#649AD2">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={c} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>C</h1>
                        <p>C 123 ...</p>
                    </div>
                </Card>
                <Card color="#A179DC">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={csharp} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Csharp</h1>
                        <p>Criação de aplicações desktop com interfaces modernas utilizando o windowns forms</p>
                    </div>
                </Card>
                <Card color="#F65D11">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={vba} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>VBA</h1>
                        <p>
                            Criação de macros e a automatização de diversos processos dentro 
                            das planilhas e tabelas desenvolvidas no Excel
                        </p>
                    </div>
                </Card>
                <Card color="#F05133">
                    <div className='icons'>
                        <div className='areaIcon'>
                            <img src={git} alt="javascript" />
                        </div>
                    </div>
                    <div className='description'>
                        <h1>Git</h1>
                        <p>Ferramenta de controle de versionamento de código</p>
                    </div>
                </Card>
                <hr/>
            </AreaSkills>
        </Container>
    );
}