import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 100%;

  /* background-color:gray; */
`;

export const ButtonContainer = styled.div`
  

`;

export const ButtonSlider = styled.button`
  width: 3rem;
  height:2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:white;
  border-radius: 8px;
  font-size:15px;

  @media screen and (min-width: 1024px){
    width: 3.5rem;
    height:3rem;
    font-size:20px;
  }
`;

export const ContainerProducts = styled.div`
  /* min-width:10rem;
  max-width:45rem; */
  height:27rem;
  /* background-color:#9dbb70; */
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
  /* background-color:red; */
  z-index:0;
`;

export const CarouselItem = styled.li`
  flex-shrink: 0;
  width: calc(100% / ${(props) => props.itemsPerSlide});
  
  height: 100%;
  box-sizing: border-box;
  /* background-color:#fd9e7b; */
  /* border: 1px solid black; */

  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  
`;

export const Card = styled.div`
  background-color:grey;
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
  background-color: orange;
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
  background-color:red;
  padding:1rem;
  border-radius:.5rem;
`;


export const CounterContainer = styled.div`
  display:flex;
  justify-content:center;
`;

export const CounterButon = styled.button`
  width:3rem;
  font-size:2.5rem;
  border-radius:10%;
  background-color:#fd9e7b;
`;