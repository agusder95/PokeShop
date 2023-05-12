import { useContext } from "react";
import { Button, P, PopUpWrapper } from "./styles";
import ShowElements from "../../context/showElements";

function PopUp() {

     const {show, setShow} = useContext(ShowElements)

     return (
          <PopUpWrapper state={show.state}>
               <P>{show.msg}</P>
               <Button onClick={()=>setShow(false)}>OK</Button>
          </PopUpWrapper>
     );
}

export default PopUp;