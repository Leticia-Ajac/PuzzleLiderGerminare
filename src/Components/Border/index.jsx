import { BordaContainer } from "./style";

export default function Borda(props){
    return(
        <BordaContainer style={{borderColor:`${props.corBorda}`}}>
            {props.children}
        </BordaContainer>
    )
}