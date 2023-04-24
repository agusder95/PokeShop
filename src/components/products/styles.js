import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 100%;

  background-color:gray;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: orange;
`;

export const P = styled.p`
  
`;

export const ButtonContainer = styled.div`
  margin:5px;

`;

export const CarouselItem = styled.li`
  flex-shrink: 0;
  width: calc(100% / ${(props) => props.itemsPerSlide});
  height: 14rem;
  box-sizing: border-box;
  background-color:#fd9e7b;
  border: 1px solid black;

  display: flex;
  justify-content:center;
  align-items:center;
`;

export const CarouselList = styled.ul`
  height:28rem;
  display: flex;
  transition: transform 0.3s ease-in-out;
  list-style:none;
  margin: 0 ;
  padding: 0;
  background-color:red;
`;

export const Card = styled.div`
  background-color:grey;
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width: 13rem;
  height: 100%;
  border-radius: 10%;

`;


export const ContainerProducts = styled.div`
  min-width:10rem;
  max-width:45rem;
  height:33rem;
  background-color:#9dbb70;
  display: flex;
  flex-direction:column;
  margin: 0 auto;
  overflow: hidden;
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