import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color:${props=>props.colorPrimary};
    border: 2px solid ${props=> props.colorSecondary};
    width:${props=> props.width}rem;
    height:${props=> props.height }rem;
    border-radius: 8px;
    font-size: .8rem;
    transition-duration: 0.4s;
    cursor: pointer;
    
    &:active{
        transition-duration: 0.1s;
        background-color:${props=> props.colorSecondary};
    }

    @media screen and (min-width: 500px){
        width:${props=> props.width*1.2}rem;
        height:${props=> props.height*1.2}rem;
        font-size: 1.3rem;
    } 

    @media screen and (min-width: 1024px){
        width:${props=> props.width*1.5}rem;
        height:${props=> props.height *1.5}rem;
        font-size: 1.5rem;
    }
`;