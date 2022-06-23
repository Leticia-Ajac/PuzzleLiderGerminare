import Borda from "../../Components/Border"
import imagem from '../../Assets/DRADIN.png'
import './style.css'
import { Press } from "../../Components/Press/style";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";

export function IntroLevel1Page(){
    const navegate = useNavigate()
    const nav = setTimeout(
        function(){
            document.getElementById('nav').style.display = 'flex'
            return navegate
        }, 3000
    );

    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 20px'}} >LEVEL 1</p>
            <Link style={{display:'none'}} id="nav" className="i1_input" onClick={nav} to="/Level1" > {'>'} </Link>
        </Borda>
    )
}

export function IntroLevel2Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 2</p>
            <Press onClick={navegate} to='/Level2'  >PRESS START</Press>
        </Borda>
    )
}

export function IntroLevel3Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 3</p>
            <Press onClick={navegate} to='/Level3'  >PRESS START</Press>
        </Borda>
    )
}

