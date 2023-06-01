

import { ButtonWrapper } from "./styles";

function Button({txt, func, width, height, colorPrimary, colorSecondary}) {
    return (
        <ButtonWrapper onClick={func} width ={width} height ={height} colorPrimary={colorPrimary} colorSecondary={colorSecondary}>
            {txt} 
        </ButtonWrapper>
    );

}




export default Button;