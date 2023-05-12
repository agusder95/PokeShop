import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    width:${props=> props.width}rem;
    height:${props=> props.height }rem;
    border-radius: 8px;
    font-size: .8rem;
    background-color: ${props=> props.color};

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