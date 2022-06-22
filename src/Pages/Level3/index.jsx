import * as React from "react";
import { render } from "react-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer/index';
import Header from "../../Components/HeaderLevels";
import Borda from "../../Components/Border/index";


import './style.css'
import { getElementError } from "@testing-library/react";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

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
        const idEl = e.target.id

        if (selecionados.includes(idEl)) {
            e.target.classList.remove('selecionado');
            selecionados.splice(selecionados.indexOf(idEl), 1)
        } else {
            e.target.classList.add('selecionado')
            selecionados.push(idEl)
        }
        console.log(selecionados)
    }

    function onSubmit(e) {
        // document.getElementsByClassName("selecionado").forEach(function(element, i) {
        //     console.log(element, i);
        // })

        const selecionadosClasse = Array.from(
            document.getElementsByClassName("selecionado")
        );
        selecionadosClasse.forEach(element => {
            element.classList.add('errado')
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.remove('selecionado')
                    element.classList.remove('errado')
                })
                selecionados=[]
            }, 3000)
        })

        setTimeout(() => {
            selecionadosClasse.forEach(element => {
                element.classList.remove('selecionado')
                element.classList.remove('errado')
            })
            selecionados=[]
        }, 3000)
        
    }

    const agora = new Date().getTime();
    const dateTimeAfterThreeDays = agora + 180000;

    return (
        <Borda corBorda="#930000" color="#930000" justifyContent="space-around">
            <Header level='3' titulo='****' style='margin: 0;' />

            <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >
                

            <div className="esquerdaContainer">
                <div class="grid-container">
                    <button onClick={selecionar} id='1' class={`grid-item`}>Liderança heróica</button>
                    <button onClick={selecionar} id='2' class={`grid-item`}>Desafiar o estabelecido</button>
                    <button onClick={selecionar} id='3' class={`grid-item`}>Liderança por exemplo</button>
                    <button onClick={selecionar} id='4' class={`grid-item`}>Entregar de resultados</button>
                    <button onClick={selecionar} id='5' class={`grid-item`}>Liderança diplomática</button>
                    <button onClick={selecionar} id='6' class={`grid-item`}>Direcionar</button>
                    <button onClick={selecionar} id='7' class={`grid-item`}>Centralizar</button>
                    <button onClick={selecionar} id='8' class={`grid-item`}>Visão compartilhada</button>
                    <button onClick={selecionar} id='9' class={`grid-item`}>Liderança agitada</button>
                    <button onClick={selecionar} id='10' class={`grid-item`}>Inspirar</button>
                    <button onClick={selecionar} id='11' class={`grid-item`}>Controlar as pessoas</button>
                    <button onClick={selecionar} id='12' class={`grid-item`}>Aberto à inovação</button>
                </div>
            </div>

                <div className="direitaContainer" style={{width:'400px', border:'1px solid red', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}} >
                    <CountdownTimer className targetDate={dateTimeAfterThreeDays}  />
                    <button className="btnSubmit" onClick={onSubmit}> {'>'} </button>
                </div>


            </div>
        </Borda>
    );
}

