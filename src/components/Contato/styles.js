import styled from 'styled-components';


const verde = '#04d361';
const texto = '#e1e1e6';
const roxo3 = '#737380';
const roxo =  '#5B3D77';

export const Container = styled.section`
    width: 100%;
    margin-bottom: 200px;
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

export const Content = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    background: #202024;
    border-radius: 5px;
    padding: 2%;

    @media(max-width: 1169px){
        flex-direction: column;
    }
    @media(max-width: 411px){
        width:92%;
    }

    .contact{
        width: 50%;
        @media(max-width: 1169px){
            width: 100%;
        }

        .box{
            text-align: center;
            h3{
                color: #FFF;

                span{
                    color:${texto};
                }
            }

            h4{
                margin: 10px 0 10px 0;
                color: ${roxo3}
            }
        }

        .redes{
            display: flex;
            align-items: center;
            justify-content: center;

            .card{
                width: 83px;
                height: 83px;
                background: #FFF;
                padding: 2%;
                border-radius: 5px;
                margin: 5px;
                cursor: pointer;

                @media(max-width: 412px){
                    width: 65px;
                    height: 65px;
                }
                
                img{
                    width: 100%;
                    height: auto;
                }
                h6{

                }
            }
        }

        .info{
            h3{
                width: 80%;
                margin: 0 auto;
                text-align: center;
                color: #FFF;
                margin-top: 80px;
                @media(max-width: 600px){
                    width: 90%;
                    margin-top: 20px;
                    margin-bottom: 30px;
                }
            }
        }
    }

    .message{
       width: 50%;
        @media(max-width: 1169px){
            width: 100%;
        }
       
        form{
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: 0 auto;
            background: ${roxo};
            padding: 5% 5% 0 5%;
            border-radius: 4px;

            @media(max-width: 600px){
                width: 100%;
            }

            label{
                display: flex;
                flex-direction: column;
                color: #FFF;
                margin-bottom: 5px;
            }

            input{
                outline: 0;
                height: 35px;
                padding-left: 10px;
                border-radius: 4px;
                margin-top: 5px;

                &:focus{
                    border: 2px solid purple;
                }
            }

            textarea{
                outline: 0;
                border-radius: 4px;
                padding-left: 8px;
                padding-top: 8px;
                margin-top: 5px;

                &:focus{
                    border: 2px solid purple;
                }
            }

            .msg-btn{
 
                button{
                    width: 110px;
                    height: 42px;
                    margin-left: 50px;
                    cursor: pointer;
                    border-radius: 5px;
                    background: ${verde};
                    display: block;
                    margin: 5% auto;
                    font-weight: 700;
                    color:#3a3a3f;

                    &:active{
                        position: relative;
                        top: 1px;
                    }
                }
            }
        }
    }
`;