import Borda from "../../Components/Border"
import { Link, useNavigate } from "react-router-dom"

export default function RulesPage(){
    const nevagate = useNavigate()
    return(
        <Borda corBorda="#fff" color="#fff" justifyContent="center" >
            <div style={{border:'1px solid #fff', width:'40%', height:'80%', fontSize:'30px', padding:'40px 0 0' }} >
                <Link onClick={nevagate} to='/SecretPassword' style={{textDecoration:'none', color:'white'}} >Rules</Link>

                <div style={{ height:'60%', fontSize:'20px', listStyle:'none', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <p>Proibido abrir o inspecionar</p>
                    <p>Proibido apertar F11</p>
                    <p>Proibido dar refresh na página</p>
                </div>
            </div>
        </Borda>
    )
}