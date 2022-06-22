import Borda from "../../Components/Border"

export default function RulesPage(){
    return(
        <Borda corBorda="#fff" color="#fff" justifyContent="center" >
            <div style={{border:'1px solid #fff', width:'40%', height:'80%', fontSize:'30px', }} >
                <p>Rules</p>

                <div style={{ height:'60%', fontSize:'20px', listStyle:'none', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <p>Proibido abrir o inspecionar</p>
                    <p>Proibido apertar F11</p>
                    <p>Proibido dar refresh na página</p>
                </div>
            </div>
        </Borda>
    )
}