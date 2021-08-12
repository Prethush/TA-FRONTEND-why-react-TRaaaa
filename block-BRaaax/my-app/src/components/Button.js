import '../styles/style.css';
import {buttonTypes, buttonSizes} from './buttonInfo';

function Button(props){
    function getStyles() {
        return `button button-${props.type ? props.type : buttonTypes.PRIMARY} button-${props.size ? props.size : buttonSizes.MEDIUM}`;
    }
    return <button onClick={props.onClickHandler} className={getStyles() + " block"}>{props.label || "Button"}</button>
    
}

export default Button;