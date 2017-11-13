const $ = require("jquery");
module.exports = {
    getMovies: () => {
        $("#movies").addClass("loader");
        return fetch('/api/movies')
            .then(response => response.json());
    }
};

