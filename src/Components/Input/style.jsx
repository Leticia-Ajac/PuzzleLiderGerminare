import * as React from 'react'
import { styled } from "@mui/system";
import { Box } from '@mui/material'

export const InputBox = styled('input')({
    width:'57px', margin:' auto 6px', height: '57px', background:'none',border:'none', borderBottom:'1px solid #5D1C7C', color:'#5D1C7C', textAlign: 'center', fontSize:'20px',textTransform:'uppercase'
})
export const FormContainer = styled(Box)({
    display:'flex', flexDirection:'column'
})