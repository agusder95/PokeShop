import styled from 'styled-components';

export const ImageWrapper = styled.img`
    
    width:${props => props.width != 'auto' ? `${props.width}%` : 'auto' };
    height:${props => props.height != 'auto' ? `${props.height}%` : 'auto' };
    
    border-radius: ${props => props.radius}%;
`;