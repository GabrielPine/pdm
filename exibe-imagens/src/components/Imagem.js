import React from 'react'

const Imagem = ({key,url,alt,imgStyle}) => { //Nessa linha tirando props, você já abstrai na constante para substuir props
    //const key = props.key    // declara cada constante 1 por 1
    //const url = props.url
    //const alt = props.alt
    //const{key,url,alt}=props //declarando constantes como as variaveis de props

    return (
        <div
            className={`${imgStyle} flex justify-content-center`}
            key={key}>
            <img
                src={url} 
                alt={alt} />
        </div>
    )
}

export default Imagem