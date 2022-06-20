import * as React from "react";
import { render } from "react-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer/index';
import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";


import './style.css'

export default function LevelUmPage() {
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

    return (
        <Borda corBorda="#21DA49" color="#21DA49" justifyContent="space-around">
            <Header level='1' titulo='CAÇA PALAVRAS' />

            <div style={{border:'1px solid pink', width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >

                <div style={{width:'400px', border:'1px solid red', height:'100px'}} >lalala</div>

                <div style={{width:'400px', border:'1px solid red', height:'100px', display:'flex', justifyContent:'center'}} >
                    <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
                </div>
                
            </div>
        </Borda>
    );
}

