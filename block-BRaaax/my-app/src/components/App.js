import Button from './Button';
import {buttonSizes, buttonTypes} from './buttonInfo';

function App() {
    return (
    <>
        < Button label="Click Me"/>
        < Button label="Click Me" type={buttonTypes.PRIMARY} size={buttonSizes.SMALL}/>
        < Button label="Click Me" type={buttonTypes.SECONDARY} size={buttonSizes.LARGE}/>
        < Button label="Click Me" type={buttonTypes.TERTIARY} size={buttonSizes.MEDIUM}/>
        < Button onClickHandler = {() => alert("You clicked me")}/>
       
    </>
    )
}


export default App;