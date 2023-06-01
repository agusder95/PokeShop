import styled from 'styled-components';
import { Colors } from '../../constants/PaletColors';

export const PopUpWrapper = styled.div`
  display:${props => props.state  ? "flex" : "none"};
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:1px solid black;
  background-color:${Colors.BkPopupMenu};

  box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.76);
  -webkit-box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.76);
  -moz-box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.76);

  width:98%;
  max-width:400px;
  height:20rem;

  position:absolute;
  border-radius:10px;
  top:${props => props.top}%;
  z-index:99;

`;

export const P = styled.p`
  padding:1rem;
  font-size:1.5rem;
`;

export const Button = styled.button`
  padding:1rem;
  border-radius:10px;
  background-color: ${Colors.ButtonPopupPrimary};
  border: 2px solid ${Colors.ButtonPopupSecondary};

  &:active{
    background-color:${Colors.ButtonPopupSecondary};
  }
`;

export const TxtContainer = styled.div`
  flex-grow:.5;
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;