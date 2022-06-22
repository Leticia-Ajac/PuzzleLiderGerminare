import Borda from "../../Components/Border"
import imagem from '../../Assets/DRADIN.png'
import './style.css'
import { Press } from "../../Components/Press/style";
import { useNavigate } from "react-router-dom";


export default function IntroLevel2Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 1</p>
            <Press onClick={navegate} to='/Level2'  >PRESS START</Press>
        </Borda>
    )
}