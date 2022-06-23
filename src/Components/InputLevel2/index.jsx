import * as React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './style.css'


export default function InputLevel2() {
    const {register, getValues} = useForm()
    const navegate = useNavigate()
    

    function onSubmitLv2(event) {
        console.log(event)
        event.preventDefault()
        const inputlvDoisClasse = Array.from(
            document.getElementsByClassName("inputRoxo")
        );
        const mult = getValues(["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10", "teste11"]);

        if (mult.join('').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == 'EXPERIENCIA'){
            navegate("/EndingLevel2")
        }else{
            inputlvDoisClasse.forEach(element => {
                element.classList.add('erradoLv2')
                setTimeout(() => {
                    inputlvDoisClasse.forEach(element => {
                        element.classList.remove('erradoLv2')
                    })
                }, 500)
                setTimeout(() => {
                    inputlvDoisClasse.forEach(element => {
                        element.classList.add('erradoLv2')
                    })
                }, 1000)
                setTimeout(() => {
                    inputlvDoisClasse.forEach(element => {
                        element.classList.remove('erradoLv2')
                    })
                }, 1500)
                setTimeout(() => {
                    inputlvDoisClasse.forEach(element => {
                        element.classList.add('erradoLv2')
                    })
                }, 2000)
                setTimeout(() => {
                    inputlvDoisClasse.forEach(element => {
                        element.classList.remove('erradoLv2')
                    })
                }, 2500)
        })
        }
    }

    return (
        <form style={{marginBottom:'30px'}} >
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste1")} autoFocus />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste2")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste3")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste4")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste5")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste6")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste7")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste8")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste9")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste10")} />
            <input className='inputRoxo' maxLength={1} type="text" {...register("teste11")} />
            <br></br>
            <button 
            style={{margin:'50px 0 60px auto', fontSize:'20px', padding:'0 30px', background:'none',border:'1px solid #5D1C7C', color:'#5D1C7C', textDecoration:'none'}}
            onClick={onSubmitLv2}
            > &gt; </button>
            <br />
        </form>
    )
}
