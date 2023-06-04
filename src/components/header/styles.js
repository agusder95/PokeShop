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
    
     height:${props => props.static ? 7 : props.shrink ? 9 : 15}rem;
     
     transition: height 0.4s;
     transition-delay: .4s;
`;

export const LogoWrapper = styled.div`
     width: 10rem;
     @media screen and (min-width:700px){
          width: 15rem;
     }
     @media screen and (min-width:1024px){
          width: 18rem;
     }
`;

export const PokeballWrapper = styled.div`
     width:3rem;
     background-color: white;
     display: flex;
     justify-content: center;
     border-radius:50%;
     
     @media screen and (min-width:700px){
          width: 4rem;
     }
     
`;

export const CartWrapper = styled.div`
     
     display: flex;
     justify-content: center;
     position:relative;
     background-color: white;
     border-radius: 50%;
     height: 3rem;
     width: 3rem;
     align-items: center;
     flex-grow:0;

     @media screen and (min-width: 700px) {
          width:4rem;
          height:4rem;
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



