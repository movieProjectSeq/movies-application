const $ = require("jquery");
const url = 'api/movies';
let options = {
    method: '',
    headers: {
        'Content-Type': 'application/json',
    }
};


module.exports = {
    getMovies: () => {
        $("#movies").html("").addClass("loader");
        return fetch('/api/movies')
            .then(response => response.json());
    },
    addMovies: (movieTittle, raTings) => {
        options.body = JSON.stringify({title: movieTittle, rating: raTings});
        options.method = "POST";
        return fetch(url, options)
            .then(response => response.json())
            .catch(error => console.log(error))
    },
    delMovies: (id) => {
        options.method = "DELETE";
        return fetch(`/api/movies/${id}`, options)
            .then(response => response.json())
            .catch(error => console.log(error))
    },
    editMovies: (movieTittle, raTings, id) => {
        options.body = JSON.stringify({title: movieTittle, rating: raTings});
        options.method = "PUT";
        return fetch(`/api/movies/${id}`, options)
            .then(response => response.json())
            .catch(error => console.log(error))
    }
};

