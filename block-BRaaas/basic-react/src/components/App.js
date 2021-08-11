import datas from '../data';
import '../styles/style.css';
import PropTypes from 'prop-types';

function App() {
    function handleClick(){
        alert("Hello React Event");
    }

    function handleChange(){
        alert("To learn React use https://reactjs.org");
        alert("React and ReactDOM works together");
        alert(" Babel helps in writing JSX");
    }

    function handleName(name){
        alert(`Hello ${name}`)
    }
    return (
        <>
            <button className="bg-red-500 rounded-lg p-2 text-white" onClick={handleClick}>Click Me</button>
            <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={handleChange}>How Can I Help You</button>
            <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => handleName("Arya")}>Arya</button>
            <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => handleName("John")}>John</button>
            <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => handleName("Bran")}>Bran</button>
            {
                datas.map(data => < Key key= {data.id} {...data}/>)
            }
            
        </>
    )
}

function Key(props) {
    function handleName(name){
        alert(`Hello ${name}`)
    }
    return (
        <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => handleName(props.value)}>{props.value}</button>
    )
}


Key.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
export default App;