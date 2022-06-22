import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";
import Cubo from "../../Components/Cubo/index";
import bola from "../../Assets/DRADIN.png";
import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer/index';
import InputSeparado from "../../Components/Input/index"
import './style.css'

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
    const dateTimeAfterThreeDays = agora + 2000;

    return(
        <Borda corBorda="#5D1C7C" color="#5D1C7C" justifyContent="space-around">
            <Header level='2' titulo='ENIGMA DAS FIGURAS' />
            <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />

            <div style={{display:'flex', flexDirection:'row', widows:'90%', justifyContent:'space-around', margin:'20px auto'}} >
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
                <Cubo>
                    <img src={bola} alt="" className="uc" />
                </Cubo>
            </div>
            <div>
                <InputSeparado></InputSeparado>
            </div>

        </Borda>
    )
}