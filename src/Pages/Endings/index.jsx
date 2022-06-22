import Borda from '../../Components/Border/index'
import { useNavigate } from "react-router-dom";
import imagem from '../../Assets/DRADIN.png'
import './style.css'
import { Press } from "../../Components/Press/style";

export function EndingLevel1Page(){
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >MÃOS PARA CIMA!!!</p>
        </Borda>
    )
}

export function EndingLevel2Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >MÃOS PARA CIMA!!!</p>
        </Borda>
    )
}

export function EndingLevel3Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >MÃOS PARA CIMA!!!</p>
        </Borda>
    )
}