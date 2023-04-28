import React, { useContext, useEffect, useState } from 'react';
import { ButtonContainer, ImageWrapper, CarouselItem, P, ProductsWrapper, CarouselList, ContainerProducts, ButtonSlider, Card, DataContainer, BuyButton, CounterContainer, CounterButon } from "./styles";
import Imagen from '../image';

import PurchaseContext from '../../context/purchase';

function Products({ items, itemsPerSlide, value }) {
     
     
     const [currentIndex, setCurrentIndex] = useState(0);

     const {itemsBuy, setItemsBuy} = useContext(PurchaseContext)
     
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

     const buyItems = (id, title, price, stock) => {
          
          if(stock > 0){
               let array = {
                    "id": id,
                    "title": title,
                    "price": price,
                    "amount": 1
               }
     
               setItemsBuy(current=> [...current, array])
          }else{
               alert("Out of stock")
          }


     }

    

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
                                                  <BuyButton onClick={()=>buyItems(item.id, item.title, item.price, item.stock)} >Comprar</BuyButton>
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

