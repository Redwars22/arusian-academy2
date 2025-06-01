interface IArusianFont {
    size:string;
    color?:string;
    text:string;
    weight?:string;
    rtl:boolean;
    translit:string;
}

export function FontRenderer(props:IArusianFont){
    let text_to_render = props.text;

    if(props.rtl){
        let str_to_reverse = text_to_render;
        let arr = [];

        for(let i = text_to_render.length; i >= 0; i--){
            arr.push(text_to_render[i]);
        }

        text_to_render = arr.join("");
    }
    
    return(
        <span className="semlek" style={{
            fontSize: props.size,
            color: props.color ? props.color : '#000',
            fontWeight: props.weight ? props.weight : '100'
        }}
            title={props.translit}
        >
            {text_to_render}
        </span>
    );
}