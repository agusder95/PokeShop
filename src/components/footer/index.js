import { FooterWrapper, ImageContainer, LI, UL, P, Div1, Div2, A } from "./styles";

import Logo from '../../assets/Images/footer-logo.png'
import Imagen from "../image";

function Footer() {
     return (
          <FooterWrapper>
               <Div1>
                    <ImageContainer>
                         <Imagen src={Logo} alt = {'footer-logo.png'}  />
                    </ImageContainer>
                    <Div2>

                         <P>Developed by:</P>
                         <UL>
                              <LI>De Robles Agustin</LI>
                              <LI><A href="https://github.com/agusder95" >GitHub</A></LI>
                              <LI><A href="https://www.linkedin.com/in/agustin-de-robles-62a965214/">Linkedin</A></LI>
                         </UL>
                    </Div2>
               
               </Div1>
               <Div2>
                    <P>Contacto</P>
                    <UL>
                         <LI><A href="" >abcdef@mail.com</A></LI>
                         <LI>Telefono: 9353095848</LI>
                    </UL>
               
               </Div2>
          </FooterWrapper>
     );
}

export default Footer;