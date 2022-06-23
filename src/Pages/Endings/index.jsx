import Borda from '../../Components/Border/index'
import { Link, useNavigate } from "react-router-dom";
import { Press } from "../../Components/Press/style";
import END1 from '../../Assets/END1.png'
import END2 from '../../Assets/END2.png'
import END3 from '../../Assets/END3.png'

export function EndingLevel1Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={END1} alt="" style={{width:'150px'}} />
            <Link onClick={navegate} to='/IntroLevel2'style={{fontSize:'32px', margin:'50px 0 -20px', textDecoration:'none', color:'white'}} >MÃOS PARA CIMA!!!</Link>
        </Borda>
    )
}

export function EndingLevel2Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={END2} alt="" style={{width:'150px'}} />
            <Link onClick={navegate} to='/IntroLevel3'style={{fontSize:'32px', margin:'50px 0 -20px', textDecoration:'none', color:'white'}} >MÃOS PARA CIMA!!!</Link>
        </Borda>
    )
}

export function EndingLevel3Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <p style={{fontSize:'32px', margin:'0 0 50px'}} >PARABÉNS</p>
            <img src={END3} alt="" style={{width:'150px'}} />
            <Link onClick={navegate} to='/IntroLevel2'style={{fontSize:'32px', margin:'50px 0 -20px', textDecoration:'none', color:'white'}} >MÃOS PARA CIMA!!!</Link>
        </Borda>
    )
}