

import { ButtonWrapper } from "./styles";

function Button({txt, func, width, height, color}) {
    return (
        <ButtonWrapper onClick={func} width ={width} height ={height} color={color}>
            {txt} 
        </ButtonWrapper>
    );

}




export default Button;