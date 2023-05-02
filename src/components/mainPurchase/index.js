import React, { useContext, useEffect } from 'react'
import { MainWrapper, ItemContainer, Button, P, Input, H1, Container1, Container2, Description, Description2, H3, InputWrapper, ButonInput } from './styles';
import { useState } from 'react';
import PurchaseContext from '../../context/purchase';


function MainPurchase() {

     const {itemsBuy, setItemsBuy} = useContext(PurchaseContext)

     const [total, setTotal] = useState(0)

     let object = itemsBuy
     
     const totalAmount = () =>{
          let stotal = 0
          itemsBuy.map((item)=>{
               stotal = stotal + (item.amount * item.price )
          })
          setTotal(stotal)     
     }


     useEffect(()=>{
          totalAmount()
     },[object])
     

     const changueAmount  = (nro, id) =>{
          if(nro > 1){
               setItemsBuy((prev)=>
                    prev.map((item, index)=> (index === id ? {...item, amount: nro}  : item))
               )
               
          }
     }

     return (
          <MainWrapper>

               <H1>Finalizar Compra</H1>
               <Description>
                    <H3>Compra</H3>
                    <Description2>
                         <H3>Cantidad</H3>
                         <H3>Subtotal</H3>
                    </Description2>
               </Description>
               {
                    object.map((item, index)=>(

                         <ItemContainer key={index}>
                              <Container1>
                                   <Button >X</Button>
                                   <P>{item.title}</P>
                              </Container1>

                              <Container2>
                                   
                                   <Input id={index} type="number"  placeholder='1' min={1}  />
                                   <Button onClick={()=> changueAmount(Number(document.getElementById(index).value), index)} > ok</Button>
                                   <P>{`${item.amount}x $${item.price}`}</P>
                                   
                              </Container2>

                         </ItemContainer>
                    ))
               }

               <P>{`Total: $${total}`}</P>
                   
          </MainWrapper>
     );
}


export default MainPurchase;