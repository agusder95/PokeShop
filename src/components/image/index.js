import { string } from "prop-types";
import { ImageWrapper } from "./styles";

function Imagen({src,alt,radius,width, height}) {
    return (
        <ImageWrapper src={src} alt = {alt} radius = {radius} width ={width} height ={height}/>
    );
}

Imagen.prototype = {
    radius:string,
    width:string,
    height:string,
}

Imagen.defaultProps ={
    radius: 0,
    height: 100,
    width: 100,
}

export default Imagen;