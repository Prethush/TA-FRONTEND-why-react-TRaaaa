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


function createMovieUI(){
    movie_list.innerHTML = "";
    
    allMovies.forEach((movie, i) => {
        
        let li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'my-4', 'w-custom');
        let movieName = document.createElement('label');
        movieName.for= i;
        movieName.innerText = movie.name;
        let check = document.createElement('input');
        check.type = "checkbox";
        check.id = i;
        check.checked = movie.watched;
        check.addEventListener("change", handleChange);
        let close = document.createElement('span');
        close.innerText = "X";
        close.classList.add("cursor-pointer");
        close.setAttribute('data-id', i);
        close.addEventListener('click', deleteMovie);
        li.append(check, movieName, close);
        movie_list.append(li);
    })
    
    
}


