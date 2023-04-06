import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  
  align-items: center;
  background-color:#99cf77;
  height:4rem;
  color:#878787;
  justify-content:space-between;
  @media screen and (min-width: 1024px){
    height:5rem;
    padding: 0 3rem;
    justify-content:space-between;
  }
`;

export const ImageContainer = styled.div`
  width:2rem;
  @media screen and (min-width: 1024px){
    width:3rem;
  }
`;

export const P = styled.p`
  text-align:center;
  font-size:15px;
  @media screen and (min-width: 1024px){
    font-size:18px;    
  }
`;

export const UL = styled.ul`
  font-size:12px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (min-width: 1024px){
    font-size:16px;
  }
`;

export const LI = styled.li`
  
`;

export const A = styled.a`
  
`;

export const Div1 = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Div2 = styled.div`
  display:flex;
  flex-direction:column;
  padding: 0 1rem;

`;