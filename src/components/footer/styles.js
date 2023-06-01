import styled from 'styled-components';
import { Colors } from '../../constants/PaletColors';


export const FooterWrapper = styled.footer`
  display: flex;
  
  align-items: center;
  background-color:${Colors.BkFooter};
  height:4rem;
  color:${Colors.FooterFont};
  justify-content:space-between;
  @media screen and (min-width: 1024px){
    height:5rem;
    padding: 0 3rem;
    justify-content:space-between;
  }
`;

export const ImageContainer = styled.div`
  height:2rem;
  width:2rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px){
    width:3rem;
    height:3rem;
  }
`;

export const P = styled.p`
  text-align:center;
  font-size:${props=>props.menu === true ? 10 : 9}px;
  @media screen and (min-width: 1024px){
    font-size:${props=>props.menu === true ? 15 : 11}px;    
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
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Div2 = styled.div`
  display:flex;
  flex-direction:column;
  padding: 0 1rem;

`;