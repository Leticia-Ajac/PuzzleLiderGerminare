import * as React from "react";
import Hacker from "../../Assets/hacker.png"
import './style.css'

import Borda from "../../Components/Border/index";
import { Link, useNavigate } from "react-router-dom";
import { Press } from "./style";

export default function BeginningPage(){
    const navegate = useNavigate()

    return (
        <Borda corBorda='#fff' >
        <div className="container">
            <div className="containerText" >
                <div className="groupText">
                    <p style={{fontWeight:'700', fontSize:'76px'}} >LEADING</p>
                    <p style={{fontSize:'24px', margin: '-20px 0 20px 0'}} >WITH HACKERS</p>
                    <p style={{fontSize:'10px'}} >t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </div>
            <img src={Hacker} alt="hacker" style={{width: '390px'}} />

        </div>
        <Press onClick={navegate} to='/level1'  >PRESS START</Press>
        </Borda>
    )
}