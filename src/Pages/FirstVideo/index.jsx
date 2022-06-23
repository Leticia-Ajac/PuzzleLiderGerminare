import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'
import som from '../../Assets/fistVideo.mp3'

import * as React from "react";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

class AutoPlay extends Component {
    
}

export default function FirstVideoPage() {
    const navegate = useNavigate()
    const nav = setTimeout(
        function(){
            document.getElementById('nav').style.display = 'flex'
            return navegate
        }, 52000
    );

    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff'}} />
            <p></p>
            <Link style={{display:'none'}} id="nav" className="i1_input" onClick={nav} to="/Level1" > {'>'} </Link>
        </Borda>
    )
}