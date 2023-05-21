import { Image, ImageWrapper, MarginMax, P, Section2Wrapper } from "./styles";

import Articuno from "../../assets/Images/Body/articuno.png"

function Section2() {
     return (
          <Section2Wrapper>
               <MarginMax>
                    <ImageWrapper>
                         <Image src={Articuno} alt="Articuno.png" />
                    </ImageWrapper>
                    <P>an articuno for lucky</P>
               </MarginMax>
          </Section2Wrapper>
     );
}

export default Section2;