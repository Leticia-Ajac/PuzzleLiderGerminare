import * as React from "react";
import { useNavigate } from "react-router-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer1/index';
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

        const agora = new Date().getTime();
        const dateTimeAfterThreeDays = agora + 180000;

    const [valor1verde, setValor1Verde] = React.useState('')
    const [valor2verde, setValor2Verde] = React.useState('')
    const [valor3verde, setValor3Verde] = React.useState('')
    const [valor4verde, setValor4Verde] = React.useState('')

    const navegate = useNavigate()
    
    function onSubmit() {
        const list = ([valor1verde, valor2verde, valor3verde, valor4verde].sort()).toString()
        const inputlvUmClasse = Array.from(
            document.getElementsByClassName("inputVerde")
        );

        if (list == 'DOMINANTE,EXTROVERTIDO,FORMAL,IMPACIENTE') {
            console.log('certinho')
            navegate("/EndingLevel1")
        } else {
            
            inputlvUmClasse.forEach(element => {
                element.classList.add('erradoLv1')
                setTimeout(() => {
                    inputlvUmClasse.forEach(element => {
                        element.classList.remove('erradoLv1')
                    })
                }, 500)
                setTimeout(() => {
                    inputlvUmClasse.forEach(element => {
                        element.classList.add('erradoLv1')
                    })
                }, 1000)
                setTimeout(() => {
                    inputlvUmClasse.forEach(element => {
                        element.classList.remove('erradoLv1')
                    })
                }, 1500)
                setTimeout(() => {
                    inputlvUmClasse.forEach(element => {
                        element.classList.add('erradoLv1')
                    })
                }, 2000)
                setTimeout(() => {
                    inputlvUmClasse.forEach(element => {
                        element.classList.remove('erradoLv1')
                        setValor1Verde('')
                        setValor2Verde('')
                        setValor3Verde('')
                        setValor4Verde('')
                    })
                }, 2500)

                
        })
    }}

    return (
        <Borda corBorda="#21DA49" color="#21DA49" justifyContent="space-around">
        <Header level='1' titulo='Caça-palavras' style='margin: 0;' />

        <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-between'}} >

        <div className="esquerdaContainerVerde">
            <img src={cacaPalavras} style={{width:'80%', height:'100%'}}/>
        </div>

            <div className="direitaContainerVerde">
                <CountdownTimer className='timerVerde' targetDate={dateTimeAfterThreeDays} />
                <p>CARACTERÍSTICAS PI <br/>DE UM LÍDER GERMINARE</p>
                <input className="inputVerde" value={valor1verde} onChange={(e) => {
                    setValor1Verde((e.target.value).toUpperCase())
                    console.log(e.target.value)
                }

                    }/>
                <input className="inputVerde" value={valor2verde} onChange={(e) => {setValor2Verde((e.target.value).toUpperCase())}}/>
                <input className="inputVerde" value={valor3verde} onChange={(e) => {setValor3Verde((e.target.value).toUpperCase())}}/>
                <input className="inputVerde" value={valor4verde} onChange={(e) => {setValor4Verde((e.target.value).toUpperCase())}}/>
                <button className="btnSubmitVerde" onClick={onSubmit}> {'>'} </button>
            </div>


        </div>
    </Borda>
    );
}

