import * as React from 'react'
import { styled } from "@mui/system";
import { Box, Link } from '@mui/material'

export const InputBox = styled('input')({
    width:'57px', margin:' 0 6px 40px', height: '57px', background:'none',border:'none', borderBottom:'1px solid #5D1C7C', color:'#5D1C7C', textAlign: 'center', fontSize:'20px',textTransform:'uppercase'
})
export const FormContainer = styled(Box)({
    display:'flex', flexDirection:'column'
})

// export const ButtonSeta = styled(Link)({
//     margin:'50px 0 60px auto', fontSize:'20px', width:'50px', background:'none',border:'1px solid #5D1C7C', color:'#5D1C7C'
// })