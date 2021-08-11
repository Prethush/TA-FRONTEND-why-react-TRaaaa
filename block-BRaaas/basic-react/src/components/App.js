import datas from '../data';
import '../styles/style.css';
import PropTypes from 'prop-types';

function App() {
   
    function handleChange(){
        alert("To learn React use https://reactjs.org");
        alert("React and ReactDOM works together");
        alert(" Babel helps in writing JSX");
    }

    let names = ["Arya", "Bran", "James"];
    return (
        <>
            <button className="bg-red-500 rounded-lg p-2 text-white" onClick={() => alert("Hello React Event")}>Click Me</button>
            <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={handleChange}>How Can I Help You</button>
            {
                names.map(name => <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => alert(`Hello ${name}`)} key={name}>{name}</button>)
            }
            {
                datas.map(data => < Key key= {data.id} {...data}/>)
            }
            
        </>
    )
}

function Key(props) {
    
    return (
        <button className="bg-red-500 rounded-lg p-2 ml-8 text-white" onClick={() => alert(props.value)}>{props.value}</button>
    )
}


Key.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
export default App;