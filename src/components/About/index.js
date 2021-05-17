import React from 'react';
import { Container, Header, Content, Download } from './styles';
import download from '../../assets/download/CV. Ricardo Texeira da Silva.pdf';
import { GoCloudDownload } from "react-icons/go";

export default function About(){
    return(
        <Container id='sobre'>
            <Header>
                <div class='line'></div>
                <h2>Sobre</h2>
            </Header>
            <Content id='sobre'>
                <p>
                    Formado em Análise e desenvolvimento de sistemas pela Universidade paulista UNIP,
                    atualmente sou desenvolvedor front-end, possuo conhecimentos tais como produção e
                    estilização de páginas web, do front-end ao back-end utilizando as tecnologias HTML 5,
                    CSS3, Sass, Javascript (ES6, Jquery, NodeJs, React e React native), desenvolvimento de
                    aplicações web utilizando a bibliotecas de componentes em React e React Native, hooks,
                    rotas, state e utilização de APIs REST, implementação de scripts para o back-end com NodeJs
                    e gerenciador de pacotes NPM. Criação de banco de dados relacional Mysql e não relacional
                    MongoDb e Firebase. Desenvolvimento com as linguagens C, C#, VB, VBA.
                    Automação de planilhas usando macros em Excel.
                    Ferramenta de controle de versionamento de código-fonte: GitHub.
                </p>
                <Download>
                    <div className='button'>
                        <a href={download} Target="_blank" download>
                            <GoCloudDownload size={30} color="#FFF"/>Download CV
                        </a>  
                    </div>
                </Download>
            </Content>
        </Container>
    );
}