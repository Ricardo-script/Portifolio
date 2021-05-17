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

export const AreaSkills = styled.section`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 40px;
    margin-bottom: 200px;
    position: relative;
    margin-bottom: 100px;

    hr{
        border: 0;
        border-bottom: 1px solid rgb(41, 41, 46);
        margin-top: 20px;
        width: 100%;
        position: absolute;
        bottom: -40px;
    }
`;

export const Card = styled.div`
    height: 300px;
    background: #202024;
    border-bottom: 2px solid ${props => props.color};
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    overflow: hidden;

    &:hover{
        background: #262633;
    }

    &:hover .areaIcon{
        width: 125px;
        transition: .7s;
    }

    .icons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .areaIcon{
        width: 100px;
        width: 100px;
        margin-top: 20px;
        display: inline-block;

        img{
            width: 100%;
            height: auto;
        }
    }

    .description{
        h1{
            font-size: 24px;
            line-height: 34px;
            color: #E1E1E6;
            text-align: center;
        }
        p{
            font-size: 14px;
            line-height: 24px;
            color: #A8A8B3;
            padding: 10px;
            text-align: center;
        }
    }
`;