let movie_list = document.querySelector('.movie_list');
let inputText = document.querySelector('input[type="text"]');

let allMovies = [];

inputText.addEventListener('keyup', e => {
    if(e.keyCode === 13){
        allMovies.push({
            name: e.target.value,
            watched: false
        })
        e.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    console.log(id);
    allMovies.splice(id, 1);
    createMovieUI();
}

function handleChange(event){
    console.dir(event.target);
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI();
}

// function elm(type, attr={}, ...children) {
//     let element = document.createElement(type);
//     for(let key in attr) {
//         if(key.startsWith('data-')) {
//             element.setAttribute(key, attr[key]);
//         }else if(key.startsWith('on')){
//             let eventName = key.slice(2);
//             element.addEventListener(eventName, attr[key]);
//         }
//         else{
//             element[key] = attr[key];
//         }
//     }

//     children.forEach(child => {
//         if(typeof child === "object"){
//             element.append(child);
//         }
//         if(typeof child === "string"){
//             let node = document.createTextNode(child);
//                 element.append(node);
//             }
//     });
//     return element;
// }

let elm = React.createElement;

function createMovieUI(){
   
    
    let movies = allMovies.map((movie, i) => {
        
        let li = elm("li", {
            className: "flex justify-between my-2 w-full border-b-2 border-dashed border-black p-2 rounded"
        }, elm("label", {
            htmlFor: i,
            className: 'text-2xl'
        }, movie.name),
        elm("button", {
            id: i,
            className: 'bg-black text-white p-1',
            onClick: handleChange
        }, movie.watched ? "Watched": "Not Watched"),
        elm("span", {
            className: "cursor-pointer",
            "data-id": i,
            className: "text-2xl font-bold text-red-600",
            onClick: deleteMovie
        }, "X"));
        
        return li;
    });
    
    ReactDOM.render(movies, movie_list);
   
}


