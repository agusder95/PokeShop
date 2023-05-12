import { useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MainPurchase from "../../components/mainPurchase";
import PopUp from "../../components/popUp";
import { PurchaseWrapper } from "./styles";
import ShowElements from "../../context/showElements";

function Purchase() {
     const {show, setShow} = useContext(ShowElements)
     return (
          <PurchaseWrapper>
               <Header direction ={"/"}/>
               <MainPurchase />
               <PopUp  state={show.state} />
               <Footer />
          </PurchaseWrapper>
     );
}

export default Purchase;