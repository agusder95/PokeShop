import React, { useState } from 'react';
import { ButtonContainer, ImageWrapper, CarouselItem, OL, P, ProductsWrapper, CarouselList, ContainerProducts, ButtonSlider, Card } from "./styles";


function Products({ items, itemsPerSlide, value }) {

     const [currentIndex, setCurrentIndex] = useState(0);
     
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
                                             <p>{item.title}</p>
                                             <p>{item.id}</p> 
                                        </Card>
                                   </CarouselItem>
                              ))
                         }

                    </CarouselList>

                    <div>
                         <p>{`${itemsPerSlide + currentIndex} / ${items[value].length}`}</p>
                    </div>
                    
               </ContainerProducts>

               <ButtonContainer>
                    <ButtonSlider onClick={nextSlide}>Next</ButtonSlider> 
               </ButtonContainer>


          </ProductsWrapper>
     )
}

export default Products;
