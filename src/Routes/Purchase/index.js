import { useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MainPurchase from "../../components/mainPurchase";
import { PurchaseWrapper } from "./styles";
import ShowElements from "../../context/showElements";
import Section2 from "../../components/section2";
import Dragonite from "../../assets/Images/Body/dragonite.png"
import { Colors } from "../../constants/PaletColors";

function Purchase() {
     const {show, setShow} = useContext(ShowElements)
     return (
          <PurchaseWrapper>
               <Header direction ={"/"} isStatic={true}/>
               <MainPurchase />
               <Section2 
                    image={Dragonite} 
                    text={'We work with dragons! Which is to say, packages are delivered worldwide, on the same day!!!'}

                    colorBk={Colors.BkSectionDr}
                    orientation={'horizontal'}
               />
               <Footer />
          </PurchaseWrapper>
     );
}

export default Purchase;
