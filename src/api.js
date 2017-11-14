const $ = require("jquery");
const blogPost = {title: 'Ajax Requests', body: 'Are a frustrating way to use JS!', id: 3};
const url = 'api/movies/3';
const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogPost),
};

module.exports = {
    getMovies: () => {
        $("#movies").addClass("loader");
        return fetch('/api/movies')
            .then(response => response.json());
    },
    addMovies: (input) => {
        fetch(url, options)
            .then(() => console.log('done'))
            .catch(error => console.log('error'))
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

