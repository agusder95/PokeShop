import styled from 'styled-components';
import { Colors } from '../../constants/PaletColors';

export const HeaderWrapper = styled.header`
     box-shadow: 1px 6px 21px -1px rgba(0,0,0,0.76);
     -webkit-box-shadow: 1px 6px 21px -1px rgba(0,0,0,0.76);
     -moz-box-shadow: 1px 6px 21px -1px rgba(0,0,0,0.76);

     overflow: hidden;
     box-sizing: border-box;
     position: sticky;
     top: 0;
     z-index: 10;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items: center;
     background-color:${Colors.BkHeader};
    
     height:${props => props.static ? 9 : props.shrink ? 9 : 15}rem;
     
     transition: height 0.4s;
     transition-delay: .4s;
`;

export const LogoWrapper = styled.div`
     width:4rem;
     background-color: white;
     display: flex;
     justify-content: center;
     border-radius:50%;
     flex-grow:0;
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
     flex-grow:0;

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
     
     flex-grow:0;
     @media screen and (min-width: 500px) {
          font-size:4rem;
     }

     @media screen and (min-width: 1024px) {
          
          font-size: 4rem;
     }

`;

