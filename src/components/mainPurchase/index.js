import React from 'react'
import { MainWrapper, ItemContainer, Button, P, Input, H1, Container1, Container2, Description, Description2, H3 } from './styles';
import { useState } from 'react';

function MainPurchase() {

     const[cantInput, setCantInput] =useState({
          number1:1,
     })

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
               <ItemContainer>
                    <Container1>
                         <Button >X</Button>
                         <P>ParalizeHeal</P>
                    </Container1>

                    <Container2>
                         <Input type="number"   />
                         <Button > ok</Button>
                         <P>1x $xxxx  </P>
                    </Container2>

               </ItemContainer>
                   
          </MainWrapper>
     );
}


export default MainPurchase;