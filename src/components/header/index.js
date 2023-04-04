import { H1, HeaderWrapper, CartWrapper, LogoWrapper } from "./styles";
import Logo from "../../assets/Images/pokemon.png"
import Shop from "../../assets/Images/shopping-cart.png"
import Imagen from "../image";


function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper >
                <Imagen src={Logo} alt={'Logo'}/> 
            </LogoWrapper>
            
            <H1> Pokeshop </H1>
            <CartWrapper >
                <Imagen src={Shop} alt={'Shop-cart'} size ={50} />
            </CartWrapper>
        </HeaderWrapper>
    );
}

export default Header;