import Button from "../button";
import Imagen from "../image";
import { ButtonContainer, ImageWrapper, LI, OL, P, ProductsWrapper, UL, ContainerProducts,ButtonSlider } from "./styles";

import { PRECIOS } from "../../constants/DataList";
import { useSnapCarousel } from "react-snap-carousel";


function Products() {
     
     const { scrollRef, pages, activePageIndex, next, prev, goTo} = useSnapCarousel();

     return(
          <ProductsWrapper>
               
               <ButtonContainer>
                    <ButtonSlider onClick={()=>prev()}> Prev </ButtonSlider>            
               </ButtonContainer>

               <ContainerProducts>
                    <UL
                         ref={scrollRef}
                         style={{
                              display: 'flex',
                         }}
                    >
                         {
                              PRECIOS.pokeball.flatMap((item) => (
                                   <LI
                                   
                                   key={item.id}
                                   >
                                        {item.title}
                                   </LI>
                              ))
                         }

                    </UL>

                    <div>
                         {activePageIndex +1} / {pages.length}
                    </div>
               </ContainerProducts>

               <ButtonContainer>
                    <ButtonSlider onClick={()=>next()}> Next </ButtonSlider>
               </ButtonContainer>


               {/* <OL>
                    {pages.map((item) => (
                         <li key={item.id}>

                         </li>
                    ))}
               </OL> */}
          </ProductsWrapper>
     )
}

export default Products;



/* return (
     <ProductsWrapper>
          <ImageWrapper>
               
               
          </ImageWrapper>

          <P>Nombre</P>
          <P>Precio: xxx</P>

          <ButtonContainer>
               <Button txt={'Comprar'} width ={7} height ={3} color={'#d13d3d'}/>
          </ButtonContainer>

     </ProductsWrapper>
); */

/* ===== Importar data: ============= */

{/* <ul>
     {
          PRECIOS.antidote.flatMap((item) =>(
               <li key={item.id}>
                    <p>{item.title}</p>
               </li>
          )) 
     }

</ul> */}