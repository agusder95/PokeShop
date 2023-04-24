import { useState} from "react";
import Button from "../button";
import Products from "../products";
import { ButtonsContainer, ItemContainer, Carrousel, MainHomeWrapper } from "./styles";
import { PRECIOS } from "../../constants/DataList";

function MainHome() {

     const [width, setWidth] = useState(window.innerWidth)
  

     const size = () =>{
          if (width < 450){
               return 1
          }else if (width < 700){
               return 2
          }else{
               return 3
          }
     }

     return (
          <MainHomeWrapper>
               <ButtonsContainer>
                    <Button txt={'Pokeballs'} width ={7} height ={3}/>
                    <Button txt={'Heals'} width ={7} height ={3}/>
                    <Button txt={'Potions'} width ={7} height ={3}/>
               </ButtonsContainer>

               <Carrousel>
                    <Products items={PRECIOS} itemsPerSlide={size()} value={"pokeball"}/>
               </Carrousel>
          </MainHomeWrapper>
     );
}

export default MainHome;




{/* <Button txt={'<--'} width ={3} height ={2.5}/>
<ItemContainer>
     <Products />
</ItemContainer>
<Button txt={'-->'}width ={3} height ={2.5}/> */}