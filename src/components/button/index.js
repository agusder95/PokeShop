
import { ButtonWrapper } from "./styles";

function Button({txt, func}) {
    return (
        <ButtonWrapper onClick={func}>
            {txt} 
        </ButtonWrapper>
    );
}



export default Button;