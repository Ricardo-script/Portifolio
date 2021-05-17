import styled from 'styled-components';

const verde = '#04d361';
const texto = '#e1e1e6';

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

export const AreaServices = styled.div`
    width: 70%;
    margin: 0 auto;
    /*@media(max-width: 411px){
        width: 85%;
    }*/
`;

export const Items = styled.div`
    display: flex;
    padding-top: 25px;
    @media(max-width: 688px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Images = styled.div`
    width: 400px;
    min-width: 400px;

    @media(max-width: 420px){
        width: 100%;
        min-width: 100%;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export const Info = styled.div`
    
    margin-top: 100px;
    margin-left: 40px;

    h3{
        font-size: 35px;
        line-height: 107%;
        color: ${texto};
        font-weight: 700;
        margin-bottom: 40px;
        width: 100%;
    }

    p{
        font-size: 18px;
        line-height: 167%;
        color: ${texto};
    }
`;