import Articles from './BlogArticles';

function Blog() {
    return (
        <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
                {
                    ["dot", "dot", "dot"].map((data, i) =>  <div className={data} key={i}></div>)
                }
            </div>
          </header>
         < Articles />
        </div>
      </section>
    )
}


export default Blog;