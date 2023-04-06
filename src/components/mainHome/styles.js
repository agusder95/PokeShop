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

export const Container = styled.div`
  width:90%;
  height:85%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background-color:white;
`;

export const ItemContainer = styled.div`
  
`;