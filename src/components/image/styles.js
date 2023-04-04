import styled from 'styled-components';

export const ImageWrapper = styled.img`
    
    width:${props => props.size}%;
    height:auto;
    border-radius: ${props => props.radius}%;
`;