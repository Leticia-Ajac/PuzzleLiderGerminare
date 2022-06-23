import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FirstVideoPage() {
    const navegate = useNavigate()
    const nav = setTimeout(
        function(){
            document.getElementById('nav').style.display = 'flex'
            return navegate
        }, 3000
    );
    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff'}} />
            <p></p>
            <Link style={{display:'none'}} id="nav" className="i1_input" onClick={nav} to="/Level1" > {'>'} </Link>
        </Borda>
    )
}