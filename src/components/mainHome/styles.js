import styled from 'styled-components';
import { Colors } from '../../constants/PaletColors';

export const MainHomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background-color:${Colors.BkMainHome}; //
  position: relative;
  flex-grow:4;
`;

export const ButtonsContainer = styled.div`
  display: ${props=>props.display > 660 ? "flex" : "none"};
  flex-wrap: wrap;
  width:100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;

  @media screen and (min-width: 500px) {
      width:70%;
  }

  @media screen and (min-width: 1024px){
    min-width:${props=>props.elements*10}rem;
    max-width:${props=>props.elements*15}rem;
  } 
`;

export const MobileMenu = styled.div`
  display: ${props=>props.display <= 660 ? "flex" : "none"};
  align-items:center;
  margin: 2rem 0;

`;

export const Label = styled.label`
  font-size:1.5rem;
  margin: 0 .5rem 0 0;


`;

export const Select = styled.select`
  width:7rem;
  padding: .6rem;
  font-size:1rem;
  background-color:${Colors.ButtonMainHomePrimary};
  border-radius:10px;
  
`;

export const Option = styled.option`

`;

export const Carrousel = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  @media screen and (min-width: 1024px){
    margin:1rem;
    width:90%;
  } 
`;

export const ItemContainer = styled.div`
  width:100%;
  height:100%;
`;

export const ImageWrapper = styled.div`
  
`;

export const Image = styled.img`
  width:4rem;
  height:auto;
  @media screen and (min-width: 700px){
    
    width: 5rem;
  }
  @media screen and (min-width: 1000px){
    width: 6rem;
  }
`;

export const H2 = styled.h2`

  @media screen and (max-width: 660px){
    
    display:none;
  }

  @media screen and (min-width: 900px){
    padding-top:1rem;
    display:inline-block;
    font-size:30px;
  }

`;
