import styled from 'styled-components';

export const PopUpWrapper = styled.div`
     display:${props => props.state  ? "flex" : "none"};
     flex-direction:column;
     justify-content:center;
     align-items:center;
     border:1px solid black;
     background-color:white;
     width:20rem;
     height:20rem;
     position:absolute;
     border-radius:10px;
     top:40%;
     left:38%;
`;

export const P = styled.p`
  padding:1rem;
  font-size:1.5rem
`;

export const Button = styled.button`
  padding:1rem;
  border-radius:10px;
`;