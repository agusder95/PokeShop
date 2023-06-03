import Footer from "../../components/footer";
import Header from "../../components/header";
import MainHome from "../../components/mainHome";
import { HomeWrapper, IMG } from "./styles";
import Section from "../../components/section";

import Banner from "../../assets/Images/Body/banner1.png";
import SubPika from "../../assets/Images/Body/pikachu.png";
import Tipos from "../../assets/Images/Body/tipos.png";
import Gengar from "../../assets/Images/Body/gengar.png";
import Articuno from '../../assets/Images/Body/articuno.png';

import MeowthBalloon from "../../assets/Images/Body/meowth-balloon.png"
import Squirtle from "../../assets/Images/Body/squirtle.png"; 
import PewterCity from "../../assets/Images/Body/pewter-city.png";
import Shop1 from "../../assets/Images/Body/shop1.png";
import Section2 from "../../components/section2";
import { Colors } from "../../constants/PaletColors";

function Home() {

     const toTheTop = () => {
          window.scrollTo({top: 0, behavior: 'smooth'});
     }
     
     return (
          <HomeWrapper >
               <Header direction={"purchase"} isStatic={false}/>
               <Section 
                    IMG1={Banner}
                    IMG3={SubPika}
                    HEIGTH={30}
                    TXT={"In Pokeshop you will find everything you need to begin your journey and catch them all"}
                    COLOR ={Colors.BkSectionPk}
                    FLIP={false}
                    TOP={17}
               />

               <Section 
                    IMG1={Tipos}
                    IMG3={Gengar}
                    HEIGTH={23}
                    TXT={"Fire, water or fighting type? It doesn't matter, whatever you are looking for is just a few clicks away!"}
                    COLOR={Colors.BkSectionGe}
                    FLIP={true}
               />
               
               <MainHome />
               
               <Section 
                    IMG1={PewterCity}
                    IMG2={Shop1}
                    IMG3={Squirtle}
                    TXT={"Buy online, or come to visit us in our completly renovated store located in Pewter-City"}
                    COLOR ={Colors.BkSectionPC}
                    FLIP={false}
               />
               <Section2 
                    image={Articuno} 
                    text={'Have an articuno for good luck'}
                    colorBk={Colors.BkSectionAr}
                    orientation={'vertical'}
               />
               
               <Footer />
               
               <IMG onClick={()=>toTheTop()} src={MeowthBalloon} alt = {'MeowthBalloon'} />
          </HomeWrapper>
     );
}

export default Home;
