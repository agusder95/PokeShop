import Button from "../button";
import { ButtonsContainer, ItemsContainer, MainHomeWrapper } from "./styles";

function MainHome() {
     return (
          <MainHomeWrapper>
               <ButtonsContainer>
                    <Button txt={'Pokeballs'} />
                    <Button txt={'Heals'} />
                    <Button txt={'Potions'} />
               </ButtonsContainer>

               <ItemsContainer>
                    <p>Aca van los items</p>
               </ItemsContainer>
          </MainHomeWrapper>
     );
}

export default MainHome;