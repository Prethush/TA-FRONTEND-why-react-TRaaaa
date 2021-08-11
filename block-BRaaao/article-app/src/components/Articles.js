import articles from '../data.js';

import '../styles/style.css';

function Articles() {
    return(
        <>
        <h2 class="text-5xl my-6 font-bold text-center">Atricles List</h2>
        <section className="flex justify-between px-12 flex-wrap">
            
                {
                    articles.map(article => < Article key = {article.author} {...article}/>)
            
                }
               
        </section>
        </>
    )
}

function Article(props) {
    return (
        <article class="flex-custom">
            <div class="p-8 rounded-lg bg-blue-400 mb-8 ">
                <img src={props.urlToImage} alt="" className="w-full rounded-lg"/>
                <h1 class="text-xl my-2 text-red-500 font-bold">{props.title}</h1> 
            </div>
              
        </article>
    )
}

export default Articles;