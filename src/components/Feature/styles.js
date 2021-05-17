import styled from 'styled-components';

const card = '#202024';
const roxo =  '#5B3D77';
const roxo2 = '#805BD9';
const verde = '#04d361';
const texto = '#e1e1e6';
const paragrafo = '#a8a8b3';
const fundo = '#121214';

export const Container = styled.main`
   margin: 50px 0 0 120px;
   @media(max-width: 965px){
       margin: 0;
   }
`;

export const CardArea = styled.section`
   display: flex;
   align-items: center;
   @media(max-width: 965px){
        flex-direction: column;
    }

`;

export const Card = styled.div`
    background: ${card};
    width: 360px;
    min-width: 300px;
    height: 500px;
    border-radius: 7px;
    display: inline-block;
    position: relative;

    @media(max-width:490px){
        width: 92%;
    }

    &::after {
        content: '';
        width: 540px;
        height: 300px;
        background: ${roxo};
        display: inline-block;
        position: absolute;
        top: 73px;
        z-index: -1;
        left: -48px;
        @media(max-width: 688px){
            width: 460px;
        }
        @media(max-width: 412px){
            width: 395px;
        }
        @media(max-width: 360px){
            width: 385px;
        }
        @media(max-width: 352px){
            width: 300px;
        }
    }
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1.5px;
        background: ${fundo};
        bottom: 64px;
    }
   
`;

export const Header = styled.div`
    margin-top: 35px;
`;

export const Photo = styled.div`
    width: 140px;
    height: 145px;
    margin: 0 auto;
    border: 3.5px solid ${roxo2};
    border-radius: 50%;
    padding: 7px;
    
    img{
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
`;

export const Title = styled.div`
    h3{
        text-align: center;
        margin: 20px 0 20px 0;
        color: #FFF;
    }

    h4{
        text-align: center;
        color: #FFF;
        font-weight: 100;
    }
`;

export const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    margin: 50px auto;
`;

export const Description = styled.div`
    width: 55%;
    margin-left: 12%;
    @media(max-width: 965px){
        margin: 0;
        width: 85%;
        margin-top: 40px;
    }

    h1{
        font-size: 48px;
        line-height: 1;
        text-align: center;
        color: #e1e1e6;
        font-weight: 700;
        width: 100%;
        max-width: 615px;
        margin: 0 auto;
        font-family: Helvetica;
        color: ${texto};

        @media(max-width:361px){
           font-size: 43px;
        }
        @media(max-width: 320px){
            font-size: 38px;
        }
    }

    b{
        color: ${verde};
        margin-left: -10px;
    }
`;

export const Info = styled.div`
    position: absolute;
    bottom: 26px;
    left: 0;
    right: 0;
    text-align: center;
    
    h4{
        text-align: center;
        color: #FFF;
        font-weight: 100;
        font-size: 14px;
        color: ${paragrafo};
    }
`;