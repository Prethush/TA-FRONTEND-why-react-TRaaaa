import articles from '../data.js';

import '../styles/style.css';

function Articles() {
    return(
        <>
        <h2 className="text-5xl my-12 font-bold text-center">Atricles List</h2>
        <section className="flex justify-between px-12 flex-wrap articles">
            
                {
                    articles.map(article => < Article key = {article.publishedAt} {...article}/>)
            
                }
               
        </section>
        </>
    )
}

function Article(props) {
    return (
        <article className="flex-custom article">
            <div className="p-8 rounded-lg shadow-custom mb-8 ">
                <img src={props.urlToImage} alt={props.title} className="w-full rounded-lg"/>
                <h1 className="text-2xl my-2 text-red-500 font-bold">{props.title}</h1> 
                <p className="my-2">{props.content.slice(0, 200)}</p>
                <a href={props.url} className="p-2 bg-green-600 rounded-lg text-white font-bold inline-block my-2">Read More</a>
            </div>
              
        </article>
    )
}

export default Articles;