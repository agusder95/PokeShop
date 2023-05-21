import { useState, useEffect, useContext} from "react";
import Button from "../button";
import Products from "../products";
import { ButtonsContainer, ItemContainer, Carrousel, MainHomeWrapper, MobileMenu, Label, Select, Option, ImageWrapper, Image } from "./styles";
import {PRECIOS} from '../../constants/DataList'
import ShowElements from "../../context/showElements";
import PopUp from "../popUp";
import Bulbasaur from "../../assets/Images/Body/bulbasaur.png"

function MainHome() {

     /* const [width, setWidth] = useState(window.innerWidth) */
     
     /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */

     const {show, setShow} = useContext(ShowElements)
     
     const [widthSize, setWidthSize] = useState(window.innerWidth);
     const categories = Object.keys(PRECIOS)
     /* const [selected, setSelected] = useState(categories[0]) */
     const [item, setItem] = useState(categories[0])
     
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
          }else if (widthSize < 1502){
               return 3
          }else{
               return 4
          }
     }

     
     const itemSelect = () =>{
          return document.querySelector("#category").value
     }

     {/* <Button txt={'Pokeballs'} width ={6} height ={3} func={()=>setItem('pokeball')}/>
     <Button txt={'Heals'} width ={6} height ={3} func={()=>setItem('antidote')}/>
     <Button txt={'Potions'} width ={6} height ={3} func={()=>setItem('potions')}/>
     <Button txt={'Others'} width ={6} height ={3} func={()=>setItem('other')}/> */}

     return (
          <MainHomeWrapper>
               <ButtonsContainer display={widthSize} elements={categories.length}>
                    {
                         categories.map((items, index) => (
                              <Button key={index} txt={items} width={6} height={3} func={()=>setItem(items)} />
                              
                             ))
                    }
               </ButtonsContainer>

               <MobileMenu display = {widthSize}>
                    <Label htmlFor="category" >Categories:  </Label>
                    <Select
                         id="category"
                         name="category"
                         size="1"
                         onInput={()=> setItem(itemSelect())}
                    >
                         {
                              categories.map((item, index)=>(
                                   <Option key={index} value={item}>
                                        {item}
                                   </Option>
                              ))
                         }
                    </Select>


               </MobileMenu>


               <Carrousel>
                    <Products items={PRECIOS} itemsPerSlide={size()} value={item}/>
               </Carrousel>
               
               <ImageWrapper>
                    <Image src={Bulbasaur} alt = {'Bulbasaur'}  />
               </ImageWrapper>
               <PopUp state={show.state} top={25}/>
          </MainHomeWrapper>
     );
}

export default MainHome;




{/* <Button txt={'<--'} width ={3} height ={2.5}/>
<ItemContainer>
     <Products />
</ItemContainer>
<Button txt={'-->'}width ={3} height ={2.5}/> */}