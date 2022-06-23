import * as React from "react";
import { render } from "react-dom";

import { useCountdown, ExpiredNotice, ShowCounter } from '../../Components/Timer3/index';
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
    }



    function onSubmit(e) {
        const selecionadosClasse = Array.from(
            document.getElementsByClassName("selecionado")
        );
        const respostaCerta = (selecionados.sort()).toString()

        if (respostaCerta == '3,6,8' ) {
            selecionadosClasse.forEach(element => {
                element.classList.add('certo')
            })

        } else {
        selecionadosClasse.forEach(element => {
            element.classList.add('errado')
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.remove('selecionado')
                    element.classList.remove('errado')
                })
            }, 500)
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.add('selecionado')
                    element.classList.add('errado')
                })
            }, 1000)
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.remove('selecionado')
                    element.classList.remove('errado')
                })
            }, 1500)
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.add('selecionado')
                    element.classList.add('errado')
                })
            }, 2000)
            setTimeout(() => {
                selecionadosClasse.forEach(element => {
                    element.classList.remove('selecionado')
                    element.classList.remove('errado')
                })
            }, 2500)
            selecionados=[]
        })}

    }

    const agora = new Date().getTime();
    const dateTimeAfterThreeDays = agora + 3000;

    return (
        <Borda corBorda="#930000" color="#930000" justifyContent="space-around">
            <Header level='3' titulo='Hyper CodeNames' style='margin: 0;' />

            <div style={{ width:'90%', height:'70%',display:'flex',flexDirection:'row', justifyContent:'space-around'}} >


            <div className="esquerdaContainer">
                <div class="grid-container">
                    <button onClick={selecionar} id='1' className={`grid-item`}>Liderança heróica</button>
                    <button onClick={selecionar} id='2' className={`grid-item`}>Desafiar o estabelecido</button>
                    <button onClick={selecionar} id='3' className={`grid-item`}>Liderança por exemplo</button>
                    <button onClick={selecionar} id='4' className={`grid-item`}>Entregar de resultados</button>
                    <button onClick={selecionar} id='5' className={`grid-item`}>Liderança diplomática</button>
                    <button onClick={selecionar} id='6' className={`grid-item`}>Direcionar</button>
                    <button onClick={selecionar} id='7' className={`grid-item`}>Centralizar</button>
                    <button onClick={selecionar} id='8' className={`grid-item`}>Visão compartilhada</button>
                    <button onClick={selecionar} id='9' className={`grid-item`}>Liderança agitada</button>
                    <button onClick={selecionar} id='10' className={`grid-item`}>Inspirar</button>
                    <button onClick={selecionar} id='11' className={`grid-item`}>Controlar as pessoas</button>
                    <button onClick={selecionar} id='12' className={`grid-item`}>Aberto à inovação</button>
                </div>
            </div>

                <div className="direitaContainer">
                    <CountdownTimer className targetDate={dateTimeAfterThreeDays} />
                    <p>1. Estilo de liderança positivo</p>
                    <p>2. Modelo padrão de gestão de pessoas</p>
                    <p>3. Entender demandas da organização e da equipe</p>
                    <button className="btnSubmit" onClick={onSubmit}> {'>'} </button>
                </div>


            </div>
        </Borda>
    );
}

