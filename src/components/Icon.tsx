import LogoImg from '../assets/shared/logo.svg'

const Icon = ({icon, className , ...rest} : LogoProps) => {

    switch(icon){
        case "logo":
            return <img src={LogoImg} className={className} style={{height:48,width:48}} {...rest}/>

    }
}

type LogoProps = {
    icon : string,
    className : string,
}

export default Icon