
import css from './Button.module.css'

const Button = ({ variation, children, id, onClick }) => {
    return (<button className={css[variation]} onClick={() => onClick(id)}>{children}</button>)
}

export default Button;