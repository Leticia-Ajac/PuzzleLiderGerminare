import Borda from "../../Components/Border"
import imagem from '../../Assets/DRADIN.png'
import './style.css'


export default function IntroLevel1Page(){

    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 1</p>
        </Borda>
    )
}