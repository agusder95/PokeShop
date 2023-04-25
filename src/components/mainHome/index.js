import { useState, useEffect} from "react";
import Button from "../button";
import Products from "../products";
import { ButtonsContainer, ItemContainer, Carrousel, MainHomeWrapper } from "./styles";
import { PRECIOS } from "../../constants/DataList";

function MainHome() {

     /* const [width, setWidth] = useState(window.innerWidth) */
     const [item, setItem] = useState('pokeball')
  
     /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */

     const [widthSize, setWidthSize] = useState(window.innerWidth);

     useEffect(() => {
          const handleWidthResize = () => {
               setWidthSize(window.innerWidth);
          };

          window.addEventListener("resize", handleWidthResize);

          return () => {
               window.removeEventListener("resize", handleWidthResize);
          };
     }, []);
     
     /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */
     const size = () =>{
          if (widthSize < 650){
               return 1
          }else if (widthSize < 920){
               return 2
          }else{
               return 3
          }
     }

     return (
          <MainHomeWrapper>
               <ButtonsContainer>
                    <Button txt={'Pokeballs'} width ={7} height ={3} func={()=>setItem('pokeball')}/>
                    <Button txt={'Heals'} width ={7} height ={3} func={()=>setItem('antidote')}/>
                    <Button txt={'Potions'} width ={7} height ={3} func={()=>setItem('potions')}/>
               </ButtonsContainer>

               <Carrousel>
                    <Products items={PRECIOS} itemsPerSlide={size()} value={item}/>
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