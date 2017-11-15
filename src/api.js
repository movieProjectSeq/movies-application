const $ = require("jquery");
// const blogPost = {title: 'Ajax Requests', body: 'Are a frustrating way to use JS!', id: 3};
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
        console.log("hi");
        return fetch('/api/movies')
            .then(response => response.json());
    },
    addMovies: (movieTittle, raTings) => {
        options.body = JSON.stringify({title: movieTittle, rating: raTings});
        options.method = "POST";
        console.log(options);
        return fetch(url, options)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))
    },
    delMovies: (id) => {
        options.method = "DELETE";
        console.log(options);
        return fetch(`/api/movies/${id}`, options)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))
    },
    editMovies: (movieTittle, raTings, id) => {
        options.body = JSON.stringify({title: movieTittle, rating: raTings});
        options.method = "PUT";
        console.log(options);
        return fetch(`/api/movies/${id}`, options)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))
    }
};

