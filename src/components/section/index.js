import { Div, Div2, Image, ImageFootWrapper, ImageWrapper, P, SectionImage, SectionWrapper, MarginMax } from "./styles";
function Section({IMG1, IMG2, IMG3, TXT, COLOR, FLIP, HEIGTH, TOP}) {
     var double = false;

     if(IMG2){
          double = true;
     }

     return (
          <SectionWrapper color={COLOR}  heigth={HEIGTH} top={TOP}>
               <MarginMax flip={FLIP}>

                    <SectionImage flip={FLIP} double = {double}>
                         
                         <ImageWrapper double={double} flip={FLIP}>
                              <Image src={IMG1}></Image>
                         </ImageWrapper>
                         
                         <ImageWrapper double={double} flip={FLIP} >
                                   <Image src={IMG2}></Image>
                         </ImageWrapper>
                         
                    </SectionImage>

                    <Div>
                         <Div2 flip={FLIP}>
                              <P>{TXT}</P>
                         </Div2>

                         <ImageFootWrapper  flip={FLIP}>
                              <Image src={IMG3}></Image>
                         </ImageFootWrapper>
                    </Div>
               </MarginMax>
          </SectionWrapper>
     );
}

export default Section;