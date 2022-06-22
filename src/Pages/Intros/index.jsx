import Borda from "../../Components/Border"
import imagem from '../../Assets/DRADIN.png'
import './style.css'
import { Press } from "../../Components/Press/style";
import { Link, useNavigate } from "react-router-dom";
import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/TimerIntro1/index';

export function IntroLevel1Page(){
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
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 20px'}} >LEVEL 1</p>
            <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
        </Borda>
    )
}

export function IntroLevel2Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 2</p>
            <Press onClick={navegate} to='/Level2'  >PRESS START</Press>
        </Borda>
    )
}

export function IntroLevel3Page(){
    const navegate = useNavigate()
    return(
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={imagem} alt="" className="girar" style={{width:'150px'}} />
            <p style={{fontSize:'32px', margin:'50px 0 -20px'}} >LEVEL 3</p>
            <Press onClick={navegate} to='/Level3'  >PRESS START</Press>
        </Borda>
    )
}

