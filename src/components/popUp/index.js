import { useContext } from "react";
import { Button, P, PopUpWrapper, TxtContainer } from "./styles";
import ShowElements from "../../context/showElements";

function PopUp({top}) {

     const {show, setShow} = useContext(ShowElements)

     return (
          <PopUpWrapper state={show.state} top={top}>
               <TxtContainer>
                    <P>{show.msg}</P>
                    <P>{show.msgAmount}</P>
               </TxtContainer>
               
               <Button onClick={()=>setShow(false)}>OK</Button>
          </PopUpWrapper>
     );
}

export default PopUp;