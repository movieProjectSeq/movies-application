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
        options.body = JSON.stringify({title: movieTittle, rating: raTings });
        options.method = "POST";
        console.log(options);
        return fetch(url, options)
            .then(response => console.log(response.json()))
            .catch(error => console.log(error))
    },
    delMovies: (input) => {
        fetch(url, options)
            .then(() => console.log('done'))
            .catch(error => console.log('error'))
    },
    editMovies: (input) => {
        // const =
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        };
        fetch(url, options)
            .then()
            .catch(error => console.log('error'))
    }
};

