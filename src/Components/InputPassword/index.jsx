import * as React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './style.css'


export default function InputPassword() {
    const {register, getValues} = useForm()
    const navegate = useNavigate()
    

    function onSubmitLvFinal(event) {
        console.log(event)
        event.preventDefault()
        const inputlvBrancoClasse = Array.from(
            document.getElementsByClassName("inputBranco")
        );
        const mult = getValues(["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10", "teste11", "teste12"]);

        if(mult.join('').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == 'COLETIVIDADE'){
            navegate("/SecondtVideo")
        }else{
            inputlvBrancoClasse.forEach(element => {
                element.classList.add('erradoLvFinal')
                setTimeout(() => {
                    inputlvBrancoClasse.forEach(element => {
                        element.classList.remove('erradoLvFinal')
                    })
                }, 500)
                setTimeout(() => {
                    inputlvBrancoClasse.forEach(element => {
                        element.classList.add('erradoLvFinal')
                    })
                }, 1000)
                setTimeout(() => {
                    inputlvBrancoClasse.forEach(element => {
                        element.classList.remove('erradoLvFinal')
                    })
                }, 1500)
                setTimeout(() => {
                    inputlvBrancoClasse.forEach(element => {
                        element.classList.add('erradoLvFinal')
                    })
                }, 2000)
                setTimeout(() => {
                    inputlvBrancoClasse.forEach(element => {
                        element.classList.remove('erradoLvFinal')
                    })
                }, 2500)
        })
        }
    }

    return (
        <form style={{marginBottom:'30px'}} >
            <input className='inputBranco' maxLength={1} type="text" {...register("teste1")} autoFocus />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste2")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste3")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste4")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste5")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste6")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste7")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste8")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste9")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste10")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste11")} />
            <input className='inputBranco' maxLength={1} type="text" {...register("teste12")} />
            <br></br>
            <button 
            style={{margin:'0 0 60px auto', fontSize:'20px', padding:'0 30px', background:'none',border:'1px solid #fff', color:'#fff', textDecoration:'none'}}
            onClick={onSubmitLvFinal}
            > &gt; </button>
            <br />
        </form>
    )
}



