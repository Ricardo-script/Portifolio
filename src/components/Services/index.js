import React from 'react';
import { Container, Header, AreaServices, Items, Images, Info } from './styles';
import web from '../../assets/templates/Web-Design.png';
import mobile from '../../assets/templates/mobile.png';


export default function Services(){
    return(
        <Container>
            <Header>
                <div class='line' id="servicos"></div>
                <h2>Serviços</h2>
            </Header>
            <AreaServices id='servico'>
                <Items>
                    <Images>
                        <img src={web} alt="Web" />
                    </Images>
                    <Info>
                        <h3>Web: </h3>
                        <p>
                            Produção e estilização de websites responsivos,
                            de landing pages a sites dinâmicos, desenvolvimento de novas funcionalidades 
                            e manutenção de sistemas.
                        </p>
                    </Info>
                </Items>
                <Items>
                    <Images>
                        <img src={mobile} alt="Web" />
                    </Images>
                    <Info>
                        <h3>Mobile: </h3>
                        <p>
                            Desenvolvimento de aplicações nativas para dispositivos 
                            móveis (Android e iOS) com react native
                        </p>
                    </Info>
                </Items>
            </AreaServices>
        </Container>
    );
}