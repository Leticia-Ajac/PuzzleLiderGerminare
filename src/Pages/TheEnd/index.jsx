import * as React from "react";
import Hacker from "../../Assets/hacker.png"
import './style.css'

import Borda from "../../Components/Border/index";
import { Link, useNavigate } from "react-router-dom";
import { Press } from "../../Components/Press/style";

export default function TheEndPage(){
    const navegate = useNavigate()

    return (
        <Borda corBorda='#fff' color="#fff" justifyContent="center" >
        <div className="container">
            <div className="containerText" >
                <div className="groupText">
                    <p style={{fontWeight:'700', fontSize:'76px'}} >THE END</p>
                </div>
            </div>
            <img src={Hacker} alt="hacker" style={{width: '390px'}} />

        </div>
        </Borda>
    )
}