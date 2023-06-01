import styled from 'styled-components';
import { Colors } from '../../constants/PaletColors';

export const ProductsWrapper = styled.div`
  display: flex;
  
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 100%;

`;

export const ButtonContainer = styled.div`
`;

export const ButtonSlider = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${Colors.ButtonMainHomePrimary};
  border-radius:4rem;
  padding:0;
  font-size:25px;
  border:none;

  @media screen and (min-width: 1024px){
    font-size:35px;
  }
`;

export const ContainerProducts = styled.div`
  height:27rem;
  display: flex;
  flex-direction:column;
  margin: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    
    height:33rem;
  }
`;

export const CarouselList = styled.ul`
  height:100%;
  display: flex;
  transition: transform 0.3s ease-in-out;
  list-style:none;
  margin: 0 ;
  padding: 0;
  z-index:0;
`;

export const CarouselItem = styled.li`
  flex-shrink: 0;
  width: calc(100% / ${(props) => props.itemsPerSlide});
  
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  
`;

export const Card = styled.div`
background: ${Colors.CardPrimary};
background: linear-gradient(225deg,${Colors.CardPrimary} 10%, ${Colors.CardSeconseary} 90%);
background: -webkit-linear-gradient(225deg,${Colors.CardPrimary} 10%, ${Colors.CardSeconseary} 90%);
background: -moz-linear-gradient(225deg,${Colors.CardPrimary} 10%, ${Colors.CardSeconseary} 90%);
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width: 12rem;
  height: 19rem;
  padding:1rem 0;
  border-radius: 10%;

  @media screen and (min-width: 500px) {
    
    width: 15rem;
    height: 25rem;
  }

  @media screen and (min-width: 1207px){
    width: 18rem;
    height: 25rem;
  }

`;

export const ImageWrapper = styled.div`
  width: 80%;
  height: 48%;
  background-color: ${Colors.CardImageBk};
  border-radius: 10%;
  @media screen and (min-width: 1207px){
    height: 55%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
`;

export const P = styled.p`
  text-align:center;
  padding:1rem;
`;

export const BuyButton = styled.button`
  background-color:${Colors.ButtonPurchasePrimary};
  padding:1rem;
  border-radius:.5rem;
  border:none;

  &:active{
    background-color:${Colors.ButtonPurchaseSecondary};
  }
`;


export const CounterContainer = styled.div`
  display:flex;
  justify-content:center;
`;
