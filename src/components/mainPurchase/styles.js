import styled from 'styled-components';

export const MainWrapper = styled.div`
  flex-grow:1;
  width:100%;
  max-width:900px;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export const H1 = styled.h1`
  text-align:center;
  margin: 1rem 0;
`;

export const ItemContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:3rem;
  border: 1px solid black;
  @media screen and (min-width: 900px){
    height:4rem;
  }
`;

export const Description = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:3rem;
`;

export const Description2 = styled.div`
  display:flex;
  align-items:center;
  width:auto;
  height:100%;
  @media screen and (min-width: 900px){
    margin: 0 1rem;
  }
`;

export const H3 = styled.h4`
  margin:0 1rem;
`;

export const Container1 = styled.div`
  display:flex;
  align-items:center;
  width:auto;
  height:100%;
`;

export const Container2 = styled.div`
  display:flex;
  align-items:center;
  width:auto;
  height:100%;
  
`;

export const StateButton = styled.button`
  width:1.5rem;
  height:1.5rem;
  padding:0;
  margin: 0 .5rem;
  @media screen and (min-width: 900px){
    width:2rem;
    height:2rem;
  }
  
`;

export const P = styled.p`
  margin:0 1rem;
  font-size:.8rem;
  @media screen and (min-width: 900px){
    font-size:1rem;
  }
`;

export const Input = styled.input`
  width:2rem;
  height:2rem;
  padding:0;
  text-align:center;
  @media screen and (min-width: 900px){
    width:3rem;
    height:2.5rem;
  }
`;

export const Total = styled.p`
  font-size:1.5rem;
`;

export const Div = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  width: 100%;
  margin-top:3rem;
`;
