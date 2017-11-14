
    /**
     * es6 modules and imports
     */
    // const $ = require('jquery');
    // const bs = require('bootstrap');
    let paginationOutTop = `<nav aria-label="Page navigation"><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`;
    const paginationOutBottom = `<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>`;
    /**
     *
     *
     *
     * require style imports
     */
    const {getMovies, delMovies, addMovies, editMovies} = require('./api.js');
    getMovies().then((movies) => {
        let outputHtml = "";

        movies.forEach(({title, rating, id}) => {

            outputHtml += `<div  id="boxInfo" class="well">`;
            outputHtml += `<div id="${id}">`;
            outputHtml += `<h2>Title: ${title} </h2>`;
            outputHtml += `<h3> Rating: ${rating} </h3>`;
            outputHtml += `</div>`;
            outputHtml += `</div>`;

            paginationOutTop += `<li><a href="#${id}">${id}</a></li>`;

        });

        $('#pageNav').append(paginationOutTop + paginationOutBottom);
        $('#movies').removeClass("loader").html(outputHtml);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);


    });
// addMovies();
// delMovies();
// editMovies();

    $('#add-btn').click(function (e) {
        e.preventDefault();
         $('#add-modal').modal('show');
    });
