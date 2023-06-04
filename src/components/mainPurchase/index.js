import React, { useContext, useEffect } from 'react'
import { MainWrapper, ItemContainer, StateButton, P, Input, H1, Container1, Container2, Description, Description2, H3, Total, Div } from './styles';
import { useState } from 'react';
import PurchaseContext from '../../context/purchase';
import ShowElements from '../../context/showElements';
import Button from '../button';
import PopUp from '../popUp';
import { Colors } from '../../constants/PaletColors';

function MainPurchase() {

     const {itemsBuy, setItemsBuy} = useContext(PurchaseContext)
     const {show, setShow} = useContext(ShowElements)
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
     

     const changueAmount  = (nro, id, stock) =>{
          if(nro >= 1 && nro <= stock){
               setItemsBuy((prev)=>
                    prev.map((item, index)=> (index === id ? {...item, amount: nro}  : item))
               )
          }else if(nro > stock){
               setShow({
                    state:true,
                    msg:`In Stock: ${stock}`,
               })
          }
     }

     const deleteItem =(id) =>{
          setItemsBuy(itemsBuy.filter((item, index) => index !== id))
     }

     const endPurchase =()=>{
          if(total > 0) {
               setShow({
                    state:true,
                    msg:`Thank you for choosing PokeShop`,
                    msgAmount: `Your bag total is: $${total}`
               })
               setItemsBuy((prevState)=> prevState.filter((element)=>typeof element !== "object")) 
          }
     }

     return (
          <MainWrapper>

               <H1>Check Out</H1>
               <Description>
                    <H3>Item</H3>
                    <Description2>
                         <H3>Amount</H3>
                         <H3>Subtotal</H3>
                    </Description2>
               </Description>
               {
                    object.map((item, index)=>(

                         <ItemContainer key={index}>
                              <Container1>
                                   <StateButton onClick={()=>deleteItem(index)} >X</StateButton>
                                   <P>{item.title}</P>
                              </Container1>

                              <Container2>
                                   
                                   <Input id={index} type="number"  placeholder='1' min={1}  />
                                   <StateButton onClick={()=> changueAmount(Number(document.getElementById(index).value), index, item.stock)} > ok</StateButton>
                                   <P>{`${item.amount}x $${item.price}`}</P>
                                   
                              </Container2>

                         </ItemContainer>
                    ))
               }
               <Div>
                    <Total>{`Total: $${total}`}</Total>
                    <Button txt={'Buy'} func={()=>endPurchase()} height={3} width={7} colorPrimary={Colors.ButtonPurchasePrimary} colorSecondary={Colors.ButtonPurchaseSecondary}/>
               </Div>
               <PopUp state={show.state} top={18}/>
          </MainWrapper>
     );
}
export default MainPurchase;

