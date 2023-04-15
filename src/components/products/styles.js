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

export const LI = styled.li`
  background-color:greenyellow;
  margin-right:1rem;
  font-size:15px;
  width: 12rem;
  height: 20rem;
  flex-shrink:0;
  display: flex;
  justify-content:center;
  align-items:center;


  
  border-right: 2px solid #000000;
`;

export const UL = styled.ul`
  height:28rem;
  max-width:100%;
  display: flex;
  align-items:center;
  overflow: auto;
  background-color:red;
`;

export const OL = styled.ol`
  display: flex;
`;

export const ContainerProducts = styled.div`
  min-width:10rem;
  max-width:45rem;
  height:33rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  
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