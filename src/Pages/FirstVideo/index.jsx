import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'
import som from '../../Assets/firstVideo.mp3'

import * as React from "react";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';


export default function FirstVideoPage() {
    const navegate = useNavigate()
    const nav = setTimeout(
        function(){
            document.getElementById('nav').style.display = 'flex'
            return navegate
        }, 1000
    );

    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff'}} />
            <div style={{display:'none'}}>
            <ReactAudioPlayer src={som} autoPlay controls />
            </div>
            <Link style={{display:'none'}} id="nav" className="i1_input" onClick={nav} to="/Rules" > {'>'} </Link>
        </Borda>
    )
}