import * as React from "react";
import { render } from "react-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer/index';
import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";


import './style.css'

export default function LevelUmPage() {
    var selecionados = []

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
            )
            }
        };
        
    function selecionar(e) {
        const cor = e.target.style.color

        if (cor == 'rgb(255, 255, 255)' ) {
            e.target.style.color = '#930000'
            e.target.style.background = 'none'
            e.target.style.border = '1px solid #930000'
            selecionados.splice(selecionados.indexOf(e.target.innerText), 1)
        } else {
            e.target.style.color = '#fff'
            e.target.style.background = '#ffffff34'
            e.target.style.border = '2px solid #ffffff'
            selecionados.push(e.target.innerText)
        }
        console.log(selecionados)
    }

    const agora = new Date().getTime();
    const dateTimeAfterThreeDays = agora + 180000;

    return (
        <Borda corBorda="#930000" color="#930000" justifyContent="space-around">
            <Header level='3' titulo='****' style='margin: 0;' />

            <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >
                

            <div className="esquerdaContainer">
                <div class="grid-container">
                    <button onClick={selecionar} class={`grid-item`}>1</button>
                    <button onClick={selecionar} class={`grid-item`}>2</button>
                    <button onClick={selecionar} class={`grid-item`}>3</button>
                    <button onClick={selecionar} class={`grid-item`}>4</button>
                    <button onClick={selecionar} class={`grid-item`}>5</button>
                    <button onClick={selecionar} class={`grid-item`}>6</button>
                    <button onClick={selecionar} class={`grid-item`}>7</button>
                    <button onClick={selecionar} class={`grid-item`}>8</button>
                    <button onClick={selecionar} class={`grid-item`}>9</button>
                    <button onClick={selecionar} class={`grid-item`}>10</button>
                    <button onClick={selecionar} class={`grid-item`}>11</button>
                    <button onClick={selecionar} class={`grid-item`}>12</button>
                </div>
            </div>

                <div className="direitaContainer" style={{width:'400px', border:'1px solid red', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}} >
                    <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
                    <button className="btnSubmit"> {'>'} </button>
                </div>


            </div>
        </Borda>
    );
}

