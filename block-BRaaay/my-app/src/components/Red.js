import '../styles/style.css';
import colors from './data.json';

function Red() {
   let values = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
    return (
        <section className="flex">
            <div className="flex-15">
                <h3>Red</h3>
                <h5>colors.red</h5>
            </div>
            <div className="flex-75 flex">
                {
                        
                        colors["red"].map((color, i) => < RedColor color={color} value = {values[i]} key={i} />)
                        
                    
                }
            </div>
        </section>
    )
}

function RedColor(props) {
     
    return(
        <>
            <div className="flex-16 flex-col parent">
                <div style={{backgroundColor: props.color, padding: "1rem", marginLeft: "20px"}}></div>
                <div>
                    <span className="span">{props.value}</span>
                    <span className="span2 span">{props.color}</span>
                </div>
            </div>
            
        </>
    )
}
export default Red;