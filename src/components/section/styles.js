import styled from "styled-components";

export const SectionWrapper = styled.div`
  /* width: 100%;
  box-sizing: border-box;
  height: ${props=>props.heigth}rem;
  display: flex;
  justify-content: space-between;
  flex-direction:${props=>props.flip ? 'row-reverse' : '' };
  background-color: ${props=>props.color}; */
  width: 100%;
  background-color: ${props=>props.color};
  height:auto;

  @media screen and (min-width: 900px){
    height: ${props=>props.heigth ? `${props.heigth}rem` : 'auto'};

  }
  /*  box-sizing: border-box;
  height: auto;
  display: flex;
  flex-direction:column;
  
  @media screen and (min-width: 700px) {
    flex-direction:${props=>props.flip ? 'row-reverse' : 'row' };
  } */
`;

export const MarginMax = styled.div`
  margin:0 auto;
  max-width:1850px;
  box-sizing: border-box;
  height: auto;
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 700px) {
    flex-direction:${props=>props.flip ? 'row-reverse' : 'row' };
  }

`;

export const SectionImage = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1rem;
  width: ${props=>props.double ? '50%' : 'auto'};
  margin: 0 auto;
  @media screen and (min-width: 700px){
    
    width: ${props=>props.double ? 45 : 100}%;
  }
  @media screen and (min-width: 1000px){
    width: ${props=>props.double ? 25 : 100}%;
  }
`;

export const ImageWrapper = styled.div`
  
  height: ${props=>props.double ? 50 : 100}%;
  width:auto;
  height: 100%;
  margin: auto;
  &:last-child{
    display:${props=>props.double ? '' : 'none'};
  }
  /* align-self: ${(props) => (props.flip === true ? "flex-start" :"flex-end")}; */
  
`;

export const ImageFootWrapper = styled.div`
  width: 4rem;
  height: auto;
  align-self: center;
  @media screen and (min-width: 700px){
    align-self: ${(props) => (props.flip === true ? "flex-start" :"flex-end")};
    margin:0 1rem;
    width: 5rem;
  }
  @media screen and (min-width: 1000px){
    width: 6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius:10px;
`;

export const Div = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  
`;

export const Div2 = styled.div`
  padding: 1rem;
  flex-grow:1;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  /* height: 100%;
  display: flex;
  align-items: center;
  justify-content:center; */
  /* justify-content:${props=>!props.flip ? 'flex-end' :'flex-start' }; */
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
`;