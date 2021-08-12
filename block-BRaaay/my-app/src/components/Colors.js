import data from './data.json';
import '../styles/style.css';

function Colors() {
    return (
        Object.keys(data).map((key) => (
            < Color color = {key} colors = {data[key]}/>
        ))
    )
}



function Color(props) {
    // let values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    return (
        <section className="flex">
            <aside class="flex-15">
                <h3>{props.color}</h3>
                <h5>{"Colors." + props.color}</h5>
            </aside>
            <div class="flex-80">
                <ul className="flex"> 
                    {
                        props.colors.map((color, i) => (
                            <li class="flex-18">
                                <div class="box1 w-full" style = {{backgroundColor: color}}></div>
                                <div class="flex jcb box2">
                                    <span>{i === 0 ? 50 : i * 100}</span>
                                    <span>{color}</span>
                                </div>
                            </li>
                        ))
                        
                    }
                    
                </ul>
            </div>
        </section>
    )
}



export default Colors;