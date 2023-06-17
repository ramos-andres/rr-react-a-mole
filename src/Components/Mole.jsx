import {useEffect} from 'react'
import moleImg from '../assets/mole.png'

const Mole = (props) => {
    
useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 8000)
    let timer = setTimeout(() => {
        props.toggle(false)
    }, randSeconds)
    return () => clearTimeout(timer)
})

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            alt="Mole"
            onClick={props.handleClick} />
        </div>
    )
}


export default Mole