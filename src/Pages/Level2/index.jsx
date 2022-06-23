import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";
import Cubo from "../../Components/Cubo/index";
import bola from "../../Assets/DRADIN.png";
import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer2/index';
import InputLevel2 from "../../Components/InputLevel2/index"
import './style.css'
import um from '../../Assets/E1.png'
import dois from '../../Assets/X2.png'
import tres from '../../Assets/P3.png'
import quatro from '../../Assets/E4.png'
import cinco from '../../Assets/R5.png'
import seis from '../../Assets/I6.png'
import sete from '../../Assets/E7.png'
import oito from '../../Assets/N8.png'
import nove from '../../Assets/C9.png'
import dez from '../../Assets/I10.png'
import onze from '../../Assets/A11.png'


export default function LevelDoisPage(){
    const CountdownTimer = ({ targetDate }) => {
        const [days, hours, minutes, seconds] = useCountdown(targetDate);
        
            if (days + hours + minutes + seconds <= 0) {
            return <ExpiredNotice />;
            } else {
            return (
                <ShowCounter
                minutes={minutes}
                seconds={seconds}
                />
            );
            }
        };

    const agora = new Date().getTime();
    const dateTimeAfterThreeDays = agora + 180000;

    return(
        <Borda corBorda="#5D1C7C" color="#5D1C7C" justifyContent="space-around">
            <Header level='2' titulo='ENIGMA DAS FIGURAS' />
            <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />

            <div style={{display:'flex', flexDirection:'row', widows:'90%', justifyContent:'space-around', margin:'20px auto'}} >
                <Cubo>
                    <img src={um} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={dois} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={tres} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={quatro} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={cinco} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={seis} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={sete} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={oito} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={nove} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={dez} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={onze} alt="" className="uc" />
                </Cubo>
            </div>
            <div>
                <InputLevel2></InputLevel2>
            </div>

        </Borda>
    )
}