import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color:#87adfd;
  height: 10rem;
  
  

  @media screen and (min-width: 1024px) {
    height: 13rem;
  }
`;

export const LogoWrapper = styled.div`
     width:5rem;
     background-color: white;
     display: flex;
     justify-content: center;
     border-radius:50%;
     @media screen and (min-width: 1024px) {
          width:10rem;
     }
`;

export const CartWrapper = styled.div`
     width:5rem;
     display: flex;
     justify-content: center;
     
     background-color: white;
     border-radius: 50%;
     height: 3rem;
     width: 3rem;
     align-items: center;

     @media screen and (min-width: 1024px) {
          width:4rem;
          height: 4rem;
     }
`;

export const H1 = styled.h1`

     font-family:'Pokemon-Solid';
     font-size: 3rem;
     color: #ffcc00;
     -webkit-text-stroke: 3px #0f417d;
     margin-right: 1rem;

     @media screen and (min-width: 1024px) {
          margin-right:5rem;
          font-size: 4rem;
     }

`;

