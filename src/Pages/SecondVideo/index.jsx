import Borda from "../../Components/Border"
import gif from '../../Assets/questionMark.gif'

import * as React from "react";
import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/TimerSecondVideo/index';

export default function SecondVideoPage() {
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
            <p style={{fontSize:'24px', margin:'-10px 0 30px'}} >O QUE É SER UM  <span style={{textDecoration:'line-through'}} >HACKER</span>  LÍDER GERMINARE ?</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cgr2ggaIZpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <CountdownTimer className targetDate={dateTimeAfterThreeDays} />
        </Borda>
    )
}