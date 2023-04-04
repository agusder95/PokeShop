import Header from "../../components/header";
import MainHome from "../../components/mainHome";
import { HomeWrapper } from "./styles";

function Home() {
     return (
          <HomeWrapper>
               <Header />
               <MainHome />
          </HomeWrapper>
     );
}

export default Home;