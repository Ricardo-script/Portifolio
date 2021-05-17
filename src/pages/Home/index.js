import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Feature from '../../components/Feature';
import Services from '../../components/Services';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projetos from '../../components/Projetos';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';


export default function Home(){
    return(
        <Container>
            <Header />
            <Feature />
            <Services />
            <About />
            <Skills />
            <Projetos />
            <Contato />
            <Footer />
        </Container>
    );
}