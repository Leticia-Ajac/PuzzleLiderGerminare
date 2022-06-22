import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'

import * as React from "react";
import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/TimerFirstVideo/index';

export default function FirstVideoPage() {
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
    return (
        <Borda corBorda="#fff" justifyContent="center" >
            <img src={gif} alt="gif" style={{border:'1px solid #fff'}} />
            <p></p>
            <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
        </Borda>
    )
}