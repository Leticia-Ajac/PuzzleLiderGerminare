import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'

import * as React from "react";

export default function SecretPasswordPage() {
    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff', width:'400px'}} />
            <p style={{fontSize:'24px'}} >PUT THE SECRET PASSWORD</p>
            
        </Borda>
    )
}