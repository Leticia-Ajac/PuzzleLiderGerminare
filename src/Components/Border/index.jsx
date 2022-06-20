import { BordaContainer } from "./style";

export default function Borda(props){
    return(
        <BordaContainer style={{borderColor:`${props.corBorda}`, color:`${props.color}`, justifyContent:`${props.justifyContent}`}}>
            {props.children}
        </BordaContainer>
    )
}