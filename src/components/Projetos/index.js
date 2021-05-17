import React from 'react';
import { Container, Header, Project } from './styles';
import factorybit from '../../assets/templates/factorybit.png';
import ecommerce from '../../assets/templates/ecommerce.png';
import gestao from '../../assets/templates/gestao.png';
import controle from '../../assets/templates/controle_de_estoque.png';
import react from '../../assets/icons/react.png';
import strapi from '../../assets/icons/strapi.png';
import csharp from '../../assets/icons/c-sharp.png';
import sqlite from '../../assets/icons/sqlite.png';

export default function Projetos(){

    function projectOne(){
        const url = 'https://factorybit.herokuapp.com/';
        const win = window.open(url, '_blank');
        win.focus();
    }

    function projectTree(){
        const url = 'https://processoseletivoricardo.herokuapp.com/';
        const win = window.open(url, '_blank');
        win.focus();
    }

    function projectFour(){
        const url = 'https://github.com/Ricardo-script/Controle-de-Estoque';
        const win = window.open(url, '_blank');
        win.focus();
    }

    return(
        <Container id='portifolio'>
            <Header>
                <div class='line'></div>
                <h2>Portifólio</h2>
                <h4>
                    Abaixo estão listado alguns dos meus projetos:
                </h4>
            </Header>
            <Project onClick={projectOne}>
                <div className='description'>
                    <small>Dez/2020</small>
                    <h3>FactoryBit - Criptomoedas</h3>
                    <h3>Features:</h3>
                    <div class="features">
                        <div class='skills'>
                            <h5><strong>Front-End: </strong>React JS, requisição http com axios</h5>
                            <h5><strong>Back-End: </strong>Java</h5>
                        </div>
                        <div className='icon'>
                            <img src={react} alt="react" />
                        </div>
                    </div>
                    <h4>Trabalho de conclusão de curso para a faculdade Unip</h4>
                    <p>
                        Descrição: Sistema criado com objetivo de gerenciar e administrar as operações, oferecendo serviços baseados
                        na tecnologia Blockchain, utilizando React Js com consumo de Api´s e gerenciador de pacotes NPM.
                    </p>
                </div>
                <div className='photo'>
                    <div className='projeto-img'>
                        <img src={factorybit} alt="factoribit" />
                    </div>
                </div>
            </Project>
            <Project>
                <div className='description'>
                    <small>Abr/2021</small>
                    <h3>Site de Ecommerce</h3>
                    <h3>Features:</h3>
                    <div class="features">
                        <div class='skills'>
                            <h5><strong>Front-End: </strong>React JS, requisição http com axios</h5>
                            <h5><strong>Back-End: Strapi</strong>Java</h5>
                        </div>
                        <div className='icon'>
                            <img src={react} alt="react" />
                        </div>
                        <div className='icon'>
                            <img src={strapi} alt="react" />
                        </div>
                    </div>
                    <h4>Desenvolvimento para um site de compras</h4>
                    <p>
                        Descrição: Site completo de ecommerce, com vitrine de produtos, anúncio dos produtos,
                        recebimento de pedidos, processamento e preparo de pedidos, pagamento, e envio.
                    </p>
                </div>
                <div className='photo'>
                    <div className='projeto-img'>
                        <img src={ecommerce} alt="ecommerce" />
                    </div>
                </div>
            </Project>
            <Project onClick={projectTree}>
                <div className='description'>
                    <small>Jan/2021</small>
                    <h3>Sistema de gestão</h3>
                    <h3>Features:</h3>
                    <div class="features">
                    <div class='skills'>
                            <h5><strong>Front-End: </strong>React JS, requisição http com axios</h5>
                        </div>
                        <div className='icon'>
                            <img src={react} alt="react" />
                        </div>
                    </div>
                    <h4>Desenvolvimento para um sistema de performace</h4>
                    <p>
                        Descrição: Sistema para gestão administrativo, para performace de kpi, análise
                        de índice de qualidade. 
                    </p>
                </div>
                <div className='photo'>
                    <div className='projeto-img'>
                        <img src={gestao} alt="gestao" />
                    </div>
                </div>
            </Project>
            <Project onClick={projectFour}>
                <div className='description'>
                    <small>Jun/2020</small>
                    <h3>Controle de Estoque</h3>
                    <h3>Features:</h3>
                    <div class="features">
                    <div class='skills'>
                            <h5><strong>Front-End: </strong>React JS, requisição http com axios</h5>
                            <h5><strong>Banco de dados: Sqlite</strong></h5>
                        </div>
                        <div className='icon'>
                            <img src={csharp} alt="csharp" />
                        </div>
                        <div className='icon'>
                            <img src={sqlite} alt="react" />
                        </div>
                    </div>
                    <h4>Desenvolvimento para um sistema de performace</h4>
                    <p>
                        Descrição: Consiste em realizar gestão de itens, registrar fluxo de mercadorias,
                        entrada e saída, cadastro de usuário e senha, cadastro de itens, medida de unidade,
                        gerenciamento e exportação de relatórios, entre outros.
                    </p>
                </div>
                <div className='photo'>
                    <div className='projeto-img'>
                        <img src={controle} alt="controle" />
                    </div>
                </div>
            </Project>
        </Container>
    );
}