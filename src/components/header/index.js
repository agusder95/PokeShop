import { H1, HeaderWrapper, CartWrapper, LogoWrapper, PurchaseConfirm } from "./styles";
import Logo from "../../assets/Images/pokemon.png"
import Shop from "../../assets/Images/shopping-cart.png"
import Imagen from "../image";
import Compra from "../../assets/Images/footer-logo.png"
import { useContext } from "react";
import PurchaseContext from "../../context/purchase";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({direction}) {
    
    const {itemsBuy, setItemsBuy} = useContext(PurchaseContext)

    const [confirm, setConfirm] = useState(false)

    useEffect(()=>{
        if (itemsBuy != '') {
            setConfirm(true)
        }else{
            setConfirm(false)
        }
    },[itemsBuy])

    return (
        <HeaderWrapper>
            <LogoWrapper >
                <Imagen src={Logo} alt={'Logo'}/> 
            </LogoWrapper>
            
            <H1> Pokeshop </H1>
            
            <Link to={direction}>
                <CartWrapper >
                    <Imagen src={Shop} alt={'Shop-cart'} width ={50} height ={50} />
                    <PurchaseConfirm show ={confirm}>
                        <Imagen src={Compra} alt={'conf-compra'} />
                    </PurchaseConfirm>
                </CartWrapper>
            </Link>
        </HeaderWrapper>
    );
}

export default Header;