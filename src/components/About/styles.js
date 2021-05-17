import styled from 'styled-components';

//const link = '#737380';
//const card = '#202024';
const roxo =  '#5B3D77';
//const roxo2 = '#805BD9';
const roxo3 = '#8257e6';
const verde = '#04d361';
const texto = '#e1e1e6';
const paragrafo = '#a8a8b3';

export const Container = styled.section`
    width:100%;
`;

export const Header = styled.div`
    width: 80%;
    margin: 40px auto;

    .line{
        background-color: ${verde};
        width: 40px;
        height: 2px;
    }

    h2{
        font-size: 48px;
        line-height: 107%;
        color: ${texto};
        font-weight: 700;
        width: 100%;
        margin-top: 20px;
    }
`;

export const Content = styled.section`
    width: 60%;
    margin: 25px auto;
    @media(max-width: 965px){
        width: 85%;
    }
    @media(max-width:411px){
        width: 90%;
    }
       
    p{
        color: ${paragrafo};
        font-size: 18px;
        text-align: center;
        line-height: 167%;

    }
`;

export const Download = styled.div`
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;

        a{
            background: ${roxo3};
            width: 225px;
            height: 55px;
            position: relative;
            font-size: 16px;
            line-height: 26px;
            font-weight: bold;
            cursor: pointer;
            display: block;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            text-transform: uppercase;
            text-decoration: none;

            &:hover{
                background: ${roxo};
                color: ${verde};
                transition: all .5s;
            }

            svg{
                margin-right: 15px;
            }
        }
    }
`;