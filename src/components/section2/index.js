import { ContainerImage, ContainerText, Image, ImageWrapper, MarginMax, P, Section2Wrapper } from "./styles";


import Imagen from "../image";

function Section2({image, text, colorBk, orientation}) {
     return (
          <Section2Wrapper colorBk = {colorBk}>
               <MarginMax orientation = {orientation}>
                    <ContainerImage>
                         <ImageWrapper>
                              <Imagen src={image} alt={image} height={100} width={100}/>
                         </ImageWrapper>
                         
                        
                    </ContainerImage>
                    
                    <ContainerText>
                         
                         <P>{text}</P>
                    </ContainerText>
               </MarginMax>
          </Section2Wrapper>
     );
}

export default Section2;