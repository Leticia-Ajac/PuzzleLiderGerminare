import * as React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { InputBox } from './style';

export default function InputLevel2() {
    const {register, getValues} = useForm()
    const navegate = useNavigate()
    return (
        <form style={{marginBottom:'30px'}} >
            <InputBox maxLength={1} type="text" {...register("teste1")} autoFocus />
            <InputBox maxLength={1} type="text" {...register("teste2")} />
            <InputBox maxLength={1} type="text" {...register("teste3")} />
            <InputBox maxLength={1} type="text" {...register("teste4")} />
            <InputBox maxLength={1} type="text" {...register("teste5")} />
            <InputBox maxLength={1} type="text" {...register("teste6")} />
            <InputBox maxLength={1} type="text" {...register("teste7")} />
            <InputBox maxLength={1} type="text" {...register("teste8")} />
            <InputBox maxLength={1} type="text" {...register("teste9")} />
            <InputBox maxLength={1} type="text" {...register("teste10")} />
            <InputBox maxLength={1} type="text" {...register("teste11")} />
            <br></br>
            <button 
            style={{margin:'50px 0 60px auto', fontSize:'20px', padding:'0 30px', background:'none',border:'1px solid #5D1C7C', color:'#5D1C7C', textDecoration:'none'}}

            onClick={()=>{
                const mult = getValues(["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10", "teste11"]);

                if(mult.join('').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == 'EXPERIENCIA'){
                    navegate("/EndingLevel2")
                }else{
                    alert('nao foi dessa vez')
                }
            }}
            > &gt; </button>
            <br />
        </form>
    )
}

// export default function InputSeparado() {
//     const [values, setValues] = React.useState(Array(11).fill(''))
//     const { fields } = usePinInput({
//         values,
//         onChange: (values) => {setValues(values)},
//     })

//   return (
//     <div className style={{margin:'0 0 30px'}}>
//       {fields.map((propsField, index) => (
//         <input key={index} {...propsField} style={{width:'57px', margin:' auto 5px', height: '57px', background:'none', border:'1px solid #5D1C7C', color:'#5D1C7C', textAlign: 'center', fontSize:'20px'}}  />
//       ))}
//     </div>
//   )
// }

