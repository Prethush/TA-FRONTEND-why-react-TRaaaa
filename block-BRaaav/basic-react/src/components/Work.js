function Work() {
    return(
        <section className="work padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Work</h2>
            <div className="dot-wrapper">
            {
                    ["dot", "dot", "dot"].map((data, i) =>  <div className={data} key={i}></div>)
                }
            </div>
          </header>
          <div className="flex">
              {
                  ["/work-image1.jpg", "/work-image2.jpg", "/work-image3.jpg", "/work-image4.jpg"].map((data, i) => < Image info = {data} key = {i}/>)
              }
            
          </div>
        </div>
      </section>
    )
}

function Image(props) {
    return (
        <div className="flex-23">
             <img
                className="flexible-img"
                src={props.info}
                alt="Work Image 1"
              />
        </div>
    )
}
export default Work;