import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    text-transform: uppercase;
    width:${props=> props.width}rem;
    height:${props=> props.height }rem;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${props=> props.color};

    @media screen and (min-width: 1024px){
        width:${props=> props.width*1.5}rem;
        height:${props=> props.height *1.5}rem;
        font-size: 1.3rem;
    }
`;