import styled from 'styled-components';

const verde = '#04d361';
const texto = '#e1e1e6';
const paragrafo = '#a8a8b3';
const roxo2 = '#805BD9';

export const Container = styled.section`
    width:100%;
    margin-bottom: 100px;
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

    h4{
        font-size: 20px;
        line-height: 107%;
        color: ${texto};
        font-weight: 700;
        width: 100%;
        margin-top: 20px;
    }
`;

export const Project = styled.div`
    width: 85%;
    height: 400px;
    margin: 0 auto;
    background: #202024;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin-bottom: 3%;

    @media(max-width: 768px){
        height: auto;
        flex-direction: column;
    }


    &::after{
        content: '';
        position: absolute;
        top: 64px;
        left: -4%;
        right: 0;
        transform: translateY(-25%);
        width: 111%;
        height: 131%;
        z-index: -1;
        background: radial-gradient( 50% 50% at 50% 50%,#8257e6 0%,rgba(18,18,20,0) 100% );
        opacity: 0.5;
    }

    &:hover{
        background: #262633;
        transition: 1s;
    }

    .description{
        width: 48%;
        font-family: Helvetica,Arial,sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;

        @media(max-width: 768px){
            width: 100%;
            margin-top: 25px;
        }

        small{
            display: block;
            color: ${verde};
            @media(max-width: 412px){
                font-size: 17px;
            }
        }

        h3{
            margin-top: 30px;
            color:${paragrafo};
        }

        h4{
            font-size: 16px;
            margin-top: 30px;
            margin-bottom: 30px;
            color: ${roxo2};
        }

        .features{
            margin-top: 10px;
            display: flex;
            align-items: center;
            color: #805BD9;

            @media(max-width: 412px){
                width: 85%;
            }

            h5{
                font-size: 11px;
            }
        }

        .skills{

        }
        
        .icon{
            width: 50px;
            margin-left: 20px;

            img{
                width: 100%;
                height: auto;
            }
        }

        p{
            color: ${paragrafo};
            width: 90%;
        }
    }

    .photo{
        width: 48%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width: 768px){
            width: 95%;
            margin: 20px auto;
            margin-bottom: 20px;
        }
    }

    .projeto-img{
        width: 100%;

        img{
            width: 100%;
            height: auto;
        }
    }
`;

