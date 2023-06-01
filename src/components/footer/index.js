import { FooterWrapper, ImageContainer, LI, UL, P, Div1, Div2, A } from "./styles";

import Logo from '../../assets/Images/footer-logo.png'
import Imagen from "../image";

function Footer() {
     return (
          <FooterWrapper>
               <Div1>
                    <ImageContainer>
                         <Imagen src={Logo} alt = {'footer-logo.png'} width={100} />
                    </ImageContainer>
                    <Div2>

                         <P menu={true}>Developed by</P>
                         <UL>
                              <LI><P>De Robles Agustin</P></LI>
                              <LI><A href="https://github.com/agusder95" target={"_blank"}><P>GitHub</P></A></LI>
                              <LI><A href="https://www.linkedin.com/in/agustin-de-robles-62a965214/" target={"_blank"}><P>Linkedin</P></A></LI>
                         </UL>
                    </Div2>
               
               </Div1>
               <Div2>
                    <P menu={true}>Contact</P>
                    <UL>
                         <LI><A href="" target="_blank" ><P>abcdef@mail.com</P></A></LI>
                         <LI><P>Telephone: 9353095848</P></LI>
                    </UL>
               
               </Div2>
          </FooterWrapper>
     );
}

export default Footer;