import { string } from "prop-types";
import { ImageWrapper } from "./styles";

function Imagen({src,alt,radius,size}) {
    return (
        <ImageWrapper src={src} alt = {alt} radius = {radius} size ={size}/>
    );
}

Imagen.prototype = {
    radius:string,
    size:string,
}

Imagen.defaultProps ={
    radius: 0,
    size: 100,
}

export default Imagen;