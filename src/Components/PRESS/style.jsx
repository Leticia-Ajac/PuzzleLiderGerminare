import { Link } from "react-router-dom";
import styled from "styled-components";
import {keyframes} from '@mui/system'

// const Ani  = keyframes(
//     0% {transform: scale(1)},
//     100% {transform: scale(1.2)}
// )

export const Press = styled(Link)({
    textDecoration:'none',
    color:'#fff', 
    margin:'37px auto 0',
    fontSize:'24px',
    // animation: `${Ani}`
})
