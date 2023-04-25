import React, { useEffect, useState } from 'react';
import { ButtonContainer, ImageWrapper, CarouselItem, P, ProductsWrapper, CarouselList, ContainerProducts, ButtonSlider, Card, DataContainer, BuyButton } from "./styles";
import Imagen from '../image';


function Products({ items, itemsPerSlide, value }) {

     const [currentIndex, setCurrentIndex] = useState(0);
     
     useEffect(()=>{
          setCurrentIndex(0);
     },[value])

     const prevSlide = () => {
          setCurrentIndex(
            currentIndex === 0 ? items[value].length - itemsPerSlide : currentIndex - 1
          );
     };
      
     const nextSlide = () => {
          setCurrentIndex(
               currentIndex === items[value].length - itemsPerSlide ? 0 : currentIndex + 1
          );
     };

     return(
          <ProductsWrapper>
               
               <ButtonContainer>
                    <ButtonSlider onClick={prevSlide}>Prev</ButtonSlider>     
               </ButtonContainer>

               <ContainerProducts>
                    <CarouselList
                         style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
                    >
                         {
                              items[value].map((item) => (
                                   <CarouselItem 
                                        key={item.id} 
                                        itemsPerSlide={itemsPerSlide}
                                   >
                                        <Card >
                                             <ImageWrapper>
                                                  <Imagen src ={item.image} />
                                             </ImageWrapper>
                                             <DataContainer>
                                                  <P>{item.title}</P>
                                                  <P>{`Precio: $ ${item.price}`}</P>
                                                  <BuyButton  >Comprar</BuyButton>
                                             </DataContainer>

                                        </Card>
                                   </CarouselItem>
                              ))
                         }

                    </CarouselList>

                         <P>{`${itemsPerSlide + currentIndex} / ${items[value].length}`}</P>
                   
                    
               </ContainerProducts>

               <ButtonContainer>
                    <ButtonSlider onClick={nextSlide}>Next</ButtonSlider> 
               </ButtonContainer>


          </ProductsWrapper>
     )
}

export default Products;
