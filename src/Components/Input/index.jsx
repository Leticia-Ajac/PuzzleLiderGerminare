import * as React from 'react'
//import { usePinInput } from 'react-pin-input-hook'
import { useForm } from 'react-hook-form'
import { InputBox } from './style';



export default function InputSeparado() {
    const {register, getValues} = useForm();
    
    
    return (
        <>
        <form>
            <InputBox maxLength={1} type="text" {...register("teste1")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste2")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste3")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste4")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste5")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste6")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste7")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste8")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste9")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste10")} className='levelTwo' />
            <InputBox maxLength={1} type="text" {...register("teste11")} className='levelTwo' />
            <br></br>
            <button type="button" style={{margin:'50px 0 60px auto', fontSize:'20px', width:'50px', background:'none',border:'1px solid #5D1C7C', color:'#5D1C7C'}}
            onClick={()=>{
                const mult = getValues(["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9", "teste10", "teste11"]);

                

                console.log(mult.join('').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
            }}
            
            > &gt; </button>
        </form>

        </>
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

