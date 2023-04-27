import React from 'react'
import { MainWrapper, ItemContainer, Button, P, Input, H1 } from './styles';
import { useState } from 'react';

function MainPurchase() {

     const[cantInput, setCantInput] =useState({
          number1:1,
     })

     return (
          <MainWrapper>
               <H1>Finalizar Compra</H1>
               <ItemContainer>
                    <Button >X</Button>
                    <P>Item</P>
                    <Button > ok</Button>
                    <P>1x $xxxx  </P>

               </ItemContainer>
                    <Input type="number"   />
                    <Input type="number"    />
          </MainWrapper>
     );
}


export default MainPurchase;