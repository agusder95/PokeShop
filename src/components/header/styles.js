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
     width:4rem;
     background-color: white;
     display: flex;
     justify-content: center;
     border-radius:50%;
     @media screen and (min-width: 500px) {
          width:5rem;
     }
     @media screen and (min-width: 1024px) {
          width:10rem;
     }
`;

export const CartWrapper = styled.div`
     
     display: flex;
     justify-content: center;
     position:relative;
     background-color: white;
     border-radius: 50%;
     height: 2.5rem;
     width: 2.5rem;
     align-items: center;

     @media screen and (min-width: 500px) {
          width:3rem;
          height:3rem;
     }

     @media screen and (min-width: 1024px) {
          width:4rem;
          height: 4rem;
     }
`;



export const PurchaseConfirm = styled.div`
     display: ${props => props.show ? 'block' : 'none'};
     width:1rem;
     height:1rem;
     position: absolute;
     left:0px;
     bottom:1px;
     @media screen and (min-width: 1024px) {
          width:1.5rem;
          height:1.5rem;
     }
`;

export const H1 = styled.h1`

     font-family:'Pokemon-Solid';
     font-size: 2.5rem;
     color: #ffcc00;
     -webkit-text-stroke: 3px #0f417d;
     margin-right: 1rem;
     @media screen and (min-width: 500px) {
          font-size:4rem;
     }

     @media screen and (min-width: 1024px) {
          margin-right:5rem;
          font-size: 4rem;
     }

`;

