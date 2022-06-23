import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'
import InputPassword from '../../Components/InputPassword/index'
import cartao from '../../Assets/FOLDER.png'

import * as React from "react";

export function SecretPasswordPage() {
    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff', width:'400px'}} />
            <p style={{fontSize:'24px'}} >PUT THE SECRET PASSWORD</p>
            <InputPassword></InputPassword>
        </Borda>
    )
}

export function DefaultSecretPassword() {

    setTimeout(()=>{
        document.getElementById('dicaFinal').style.display = 'inline'
    }, 15000)

    return(
        <Borda corBorda='white' justifyContent='center' >
            <p style={{fontSize:'45px'}} >PUT THE SECRET PASSWORD ON THE SCREEN</p>
            <img src={cartao} style={{display:'none', height:'50px', margin:'-20px auto -30px'}} id='dicaFinal' />
        </Borda>
    )
}