import LogoImg from './../assets/shared/logo.svg?react'

const Icon = ({icon, className , ...rest} : LogoProps) => {

    switch(icon){
        case "logo":
            return <LogoImg className={className} style={{height:48,width:60}} {...rest}/>

    }
}

type LogoProps = {
    icon : string,
    className : string,
}

export default Icon