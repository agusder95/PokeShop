import Footer from "../../components/footer";
import Header from "../../components/header";
import MainPurchase from "../../components/mainPurchase";
import { PurchaseWrapper } from "./styles";

function Purchase() {
     return (
          <PurchaseWrapper>
               <Header direction ={"/"}/>
               <MainPurchase />
               <Footer />
          </PurchaseWrapper>
     );
}

export default Purchase;