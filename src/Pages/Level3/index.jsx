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
        <Borda corBorda="#930000" color="#930000" justifyContent="space-around">
            <Header level='3' titulo='CODE NAMES' />

            <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >
                

                <div style={{width:'400px', border:'1px solid red', height:'100px'}} >
                <div class="grid-container">
                    <button class="grid-item">1</button>
                    <button class="grid-item">2</button>
                    <button class="grid-item">3</button>  
                    <button class="grid-item">4</button>
                    <button class="grid-item">5</button>
                    <button class="grid-item">6</button>  
                    <button class="grid-item">7</button>
                    <button class="grid-item">8</button>
                    <button class="grid-item">9</button>
                    <button class="grid-item">10</button>
                    <button class="grid-item">11</button>
                    <button class="grid-item">12</button>
                </div>
            </div>

                <div style={{width:'400px', border:'1px solid red', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}} >
                    <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
                        
                </div>


            </div>
        </Borda>
    );
}

