import styled from 'styled-components';

export const MainHomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background-color:#ff8c73;

  flex-grow:4;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  @media screen and (min-width: 1024px){
    width:70%;
  } 
`;

export const Carrousel = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:#d4e358;
  @media screen and (min-width: 1024px){
    margin:1rem;
    width:70%;
  } 
`;

export const ItemContainer = styled.div`
  width:100%;
  height:100%;
`;