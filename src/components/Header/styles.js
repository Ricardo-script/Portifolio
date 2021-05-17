import styled from 'styled-components';

const link = '#737380';
const roxo2 = '#805BD9';
const verde = '#04d361';

export const Container = styled.div`
    padding-top: 20px;
`;

export const HeaderTop = styled.header`
    width: 100%;
    max-width: 1120px;
    display: grid;
    grid-template-columns: 1fr 1fr 15px;
    align-items: center;
    margin: 0 auto;

    @media(max-width: 965px){
        grid-template-columns: 0;
    }

`;

export const Logo = styled.div`
    width:200px;
    @media(max-width: 412px){
        margin-left: 12px;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export const MenuToggle = styled.div`
   
    width: 40px;
    height: 40px;
    //display: none;@media(max-width: 900px){display: block};

    .hamburguer{
        display: none;
        position: absolute;
        right: 8%;
        top: 3%;
        @media(max-width: 965px){
            display: block;
        }
    }

    .one,
    .two,
    .three{
        background-color: #FFF;
        height: 5px;
        width: 40px;
        margin: 6px auto;
        transition-duration:0.3s;
    }

    .area-menu{
        &.on{
            position: absolute;
            top: 0;
            left: 0;
            background: #7159C1;
            width: 100vw;
            height: 100vh;
            z-index: 1;
            transition-duration: 0.5s;

            .one{
                transform: rotate(45deg) translate(7px,7px);
            }

            .two{
                opacity: 0;
            }

            .three{
                transform: rotate(-45deg) translate(8px,-8px);
            }

        }
    }
`;


export const Menu = styled.nav`

    @media(max-width: 965px){
        z-index: 2;
    }

    ul{
        display: flex;
        align-items: center;
        
        @media(max-width: 965px){
          display: none;
        }

        &.onNav{
            display: block;
            text-align: center;
            margin-top: -11px;
        }

        @media(max-width: 965px){
            flex-direction: column;
            position: absolute;
            left: 0;
            right: 0;
        }

        li{
            list-style: none;
            padding: 0 35px;
            position: relative;
            @media(max-width: 965px){
                padding: 30px;
            }


            a{
                text-decoration: none;
                color: ${link};
                
                @media(max-width: 965px){
                    color: #040404;
                    font-size: 20px;
                    font-weight: 500;
                }
                
                &::before {
                    content: "";
                    position: absolute;
                    width: 80%;
                    height: 3px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: -3px auto;
                    background-color: ${roxo2};
                    visibility: hidden;
                    transform: scaleX(0);
                    transition: all 0.3s ease-in-out 0s;
                }

                &:hover::before {
                    visibility: visible;
                    -webkit-transform: scaleX(1);
                    transform: scaleX(1);
                }

                &:hover{
                    color: ${verde};
                }
            }
        }
    }
`;
