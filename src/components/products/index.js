import Button from "../button";
import Imagen from "../image";
import { ButtonContainer, ImageWrapper, P, ProductsWrapper } from "./styles";

function Products() {
     return (
          <ProductsWrapper>
               <ImageWrapper>
                    
                    {/* <Imagen  /> */}
               </ImageWrapper>

               <P>Nombre</P>
               <P>Precio: xxx</P>

               <ButtonContainer>
                    <Button txt={'Comprar'} width ={7} height ={3} color={'#d13d3d'}/>
               </ButtonContainer>

          </ProductsWrapper>
     );
}

export default Products;