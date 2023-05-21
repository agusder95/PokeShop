
import { useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MainHome from "../../components/mainHome";
import { HomeWrapper, TOP } from "./styles";
import ShowElements from "../../context/showElements";
import PopUp from "../../components/popUp";
import Section from "../../components/section";

import Banner from "../../assets/Images/Body/banner1.png";
import SubPika from "../../assets/Images/Body/pikachu.png";
import Tipos from "../../assets/Images/Body/tipos.png";
import Gengar from "../../assets/Images/Body/gengar.png";
/* import Articuno from "../../assets/Images/Body/articuno.png";
import Bulbasaur from "../../assets/Images/Body/bulbasaur.png";
import Dragonite from "../../assets/Images/Body/dragonite.png";
*/

import MeowthBalloon from "../../assets/Images/Body/meowth-balloon.png"
import Squirtle from "../../assets/Images/Body/squirtle.png"; 
import PewterCity from "../../assets/Images/Body/pewter-city.png";
import Shop1 from "../../assets/Images/Body/shop1.png";
import Section2 from "../../components/section2";
import Imagen from "../../components/image";

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
                    TXT={"In pokeshop we have everything you need for you to start your journey and catch them all"}
                    COLOR ={"#f3d67b"}
                    FLIP={false}
                    TOP={17}
               />

               <Section 
                    IMG1={Tipos}
                    IMG3={Gengar}
                    HEIGTH={23}
                    TXT={"fire, water or fighting type? It doesn't matter, here you will find the supplies you are looking for. And with just a couple of clicks!!!"}
                    COLOR={"#747097"}
                    FLIP={true}
               />
               
               <MainHome />
               
               <Section 
                    IMG1={PewterCity}
                    IMG2={Shop1}
                    IMG3={Squirtle}
                    TXT={"In pokeshop we have everything you need for you to start your journey and catch them all"}
                    COLOR ={"#4ba2ad"}
                    FLIP={false}
               />
               <Section2 />
               
               <Footer />
               <TOP onClick={()=>toTheTop()} >
                    <Imagen src={MeowthBalloon} alt = {'MeowthBalloon'} width ={100} height ={100} />
               </TOP>
          </HomeWrapper>
     );
}

export default Home;