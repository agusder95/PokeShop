import Button from "../button";
import Products from "../products";
import { ButtonsContainer, ItemContainer, Carrousel, MainHomeWrapper } from "./styles";

function MainHome() {
     return (
          <MainHomeWrapper>
               <ButtonsContainer>
                    <Button txt={'Pokeballs'} width ={7} height ={3}/>
                    <Button txt={'Heals'} width ={7} height ={3}/>
                    <Button txt={'Potions'} width ={7} height ={3}/>
               </ButtonsContainer>

               <Carrousel>
                    <Products />
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