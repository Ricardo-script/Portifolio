import styled from 'styled-components';

export const AreaFooter = styled.footer`
    padding:50px 0;
    color:#f0f9ff;
    background-color:#282d32;
`;

export const Container = styled.div`
    .row{
        display: flex;
        justify-content: center;
        @media(max-width: 660px){
            flex-direction: column;
        }

        .col{
            padding: 0 5%;
            @media(max-width: 660px){
                margin: 0 auto;
            }

            h3{
                margin-top:0;
                margin-bottom:12px;
                font-weight:bold;
                font-size:16px;
            }

            ul{
                padding:0;
                list-style:none;
                line-height:1.6;
                font-size:14px;
                margin-bottom:0;

                li{
                    a{
                        color:inherit;
                        text-decoration:none;
                        opacity:0.6;
                        
                        &:hover {
                            opacity:0.8;
                        }
                    }
                }
            }
        }
    }

    .copyright{
        text-align: center;
        margin-bottom: 15px;
        padding-top:24px;
        opacity:0.3;
        font-size:13px;
        margin-bottom:0;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    .icon{
        padding: 0 1%;
    }
`;