import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'

export default function FirstVideoPage() {

    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff'}} />
            <p>ola</p>
        </Borda>
    )
}