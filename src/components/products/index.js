import React, { useContext, useEffect, useState } from 'react';
import { ButtonContainer, ImageWrapper, CarouselItem, P, ProductsWrapper, CarouselList, ContainerProducts, ButtonSlider, Card, DataContainer, BuyButton} from "./styles";
import Imagen from '../image';
import ShowElements from "../../context/showElements";
import PurchaseContext from '../../context/purchase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';




function Products({ items, itemsPerSlide, value }) {
     
     
     const [currentIndex, setCurrentIndex] = useState(0);

     const {itemsBuy, setItemsBuy} = useContext(PurchaseContext)
     const {show, setShow} = useContext(ShowElements)
     
     useEffect(()=>{
          setCurrentIndex(0);
          
     },[value])

     const diffPositive = () =>{
          if(items[value].length - itemsPerSlide < 0 ){
               return 0
          }else{
               return items[value].length - itemsPerSlide
          }
     }
     

     const prevSlide = () => {
          setCurrentIndex(
            currentIndex === 0 ? diffPositive() : currentIndex - 1
          );
     };
      
     const nextSlide = () => {
          setCurrentIndex(
               currentIndex === diffPositive()  ? 0 : currentIndex + 1
          );
     };

     const check = (Title) => {
          let flg = true;

          itemsBuy.map((item)=>{
               if (item.title === Title){
                    flg = false;
               }
          })

          return flg
     }


     const buyItems = ( Title, Price, Stock) => {

          if(Stock > 0){

               if (check(Title)){

                    let array = {
                         stock: Stock,
                         title: Title,
                         price: Price,
                         amount: 1,
                    }
                    setItemsBuy(current=> [...current, array])
               
               }else{
                    
                    setShow({
                         state:true,
                         msg:"Already in cart",
                    })
               }
               
          }else{
               setShow({
                    state:true,
                    msg:"Out of stock",
               })
          }

     }

     const obj = items[value].length < itemsPerSlide ? 1 :  items[value].length - (itemsPerSlide-1)
    

     return(
          <ProductsWrapper>
              
               <ButtonContainer>
                    <ButtonSlider onClick={prevSlide}><FontAwesomeIcon icon={faCircleArrowLeft} size={"lg"} /></ButtonSlider>     
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
                                                  <BuyButton onClick={()=>buyItems( item.title, item.price, item.stock)} >Buy Now</BuyButton>
                                             </DataContainer>

                                        </Card>
                                   </CarouselItem>
                              ))
                         }
                    </CarouselList>
                   
                    <P>{`${currentIndex+1} / ${obj}`}</P>
                   
               </ContainerProducts>

               <ButtonContainer>
                    <ButtonSlider onClick={nextSlide}><FontAwesomeIcon icon={faCircleArrowRight} size={"lg"} /></ButtonSlider> 
               </ButtonContainer>
          </ProductsWrapper>
     )
}

export default Products;

