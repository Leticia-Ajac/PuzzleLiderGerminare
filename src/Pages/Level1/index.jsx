import * as React from "react";
import { render } from "react-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer/index';
import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";
import cacaPalavras from "../../Assets/cacapalavras.png"
import './style.css'

export default function LevelTresPage() {
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

    const [valor1, setValor1] = React.useState('')
    const [valor2, setValor2] = React.useState('')
    const [valor3, setValor3] = React.useState('')
    const [valor4, setValor4] = React.useState('')

    function onSubmit() {
        const list = ([valor1, valor2, valor3, valor4].sort).toString
        console.log(list)
    }

    const agora = new Date().getTime();
    const dateTimeAfterThreeDays = agora + 180000;

    return (
        <Borda corBorda="#21DA49" color="#21DA49" justifyContent="space-around">
        <Header level='1' titulo='Hyper CodeNames' style='margin: 0;' />

        <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >

        <div className="esquerdaContainer">
            <img src={cacaPalavras}/>
        </div>

            <div className="direitaContainer">
                <CountdownTimer className targetDate={dateTimeAfterThreeDays} />
                <p>Características do P.I.</p>
                <input className="inputVerde" value={valor1} onChange={(e) => {setValor1((e.target.value))}}/>
                <input className="inputVerde" value={valor2} onChange={(e) => {setValor2((e.target.value))}}/>
                <input className="inputVerde" value={valor3} onChange={(e) => {setValor3((e.target.value))}}/>
                <input className="inputVerde" value={valor4} onChange={(e) => {setValor4((e.target.value))}}/>
                <button className="btnSubmitVerde" onClick={onSubmit}> {'>'} </button>
            </div>


        </div>
    </Borda>
    );
}

