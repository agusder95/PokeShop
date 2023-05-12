
import { useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MainHome from "../../components/mainHome";
import { HomeWrapper } from "./styles";
import ShowElements from "../../context/showElements";
import PopUp from "../../components/popUp";

function Home() {

     const {show, setShow} = useContext(ShowElements)


     return (
          <HomeWrapper>
               <Header direction={"purchase"}/>
               <MainHome />
               <PopUp state={show.state} />
               <Footer />
          </HomeWrapper>
     );
}

export default Home;