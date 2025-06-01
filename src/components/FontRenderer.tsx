interface IArusianFont {
    size:string;
    color?:string;
    text:string;
    weight?:string;
}

export function FontRenderer(props:IArusianFont){
    return(
        <span className="semlek" style={{
            fontSize: props.size,
            color: props.color ? props.color : '#000',
            fontWeight: props.weight ? props.weight : '100'
        }}>
            {props.text}
        </span>
    );
}