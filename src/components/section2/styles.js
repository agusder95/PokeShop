import styled from 'styled-components';

export const Section2Wrapper = styled.div`
  background-color:${props=>props.colorBk};
  
  height:15rem;
  @media screen and (min-width:700px){
    height:19rem;
    padding: 1rem 0;
  }
`;

export const MarginMax = styled.div`
  margin:auto;
  height:100%;
  width:100%;
  box-sizing:border-box;
  max-width:1850px;
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  text-align:center;
  @media screen and (min-width:700px){
    flex-direction:${props=>props.orientation === 'vertical' ? 'column' : props.orientation === 'horizontal' ? 'row-reverse' : ''};
  }
`;

export const ImageWrapper = styled.div`
  width:100%;
  height:100%;
  
  
  @media screen and (min-width: 700px) {
    height:100%;
    
  }

`;

export const ContainerImage = styled.div`
  flex-grow:0;
  height:8rem;

  @media screen and (min-width:700px){
    height:100%;

  }

`;

export const ContainerText = styled.div`
  flex-grow:1;
  display:flex;
  align-items: center;
  justify-content:center;
`;


export const P = styled.p`
 
`;