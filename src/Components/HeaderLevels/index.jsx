export default function Header(props){

    return(
        <div>
        <p style={{fontSize:'18px'}} >LEVEL {props.level}</p>
        <p style={{fontSize:'24px'}} >{props.titulo}</p>
        </div>
    )
}