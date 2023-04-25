import styled from 'styled-components';

export const ImageWrapper = styled.img`
    
    width:${props => props.width}%;
    height:${props => props.height}%;;
    border-radius: ${props => props.radius}%;
`;