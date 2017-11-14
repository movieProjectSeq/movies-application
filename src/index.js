{
    "use strict";

    let paginationOutTop = "";
    const paginationOutBottom = `<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>`;
    const {getMovies, delMovies, addMovies, editMovies} = require('./api.js');

    getMovies().then((movies) => buildDisplay(movies))
        .catch((error) => {
                alert('Oh no! Something went wrong.\nCheck the console for details.');
                console.log(error);
    });

    const buildDisplay = (movies) => {
            let outputHtml = "";
            paginationOutTop = `<nav aria-label="Page navigation"><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`;

            movies.forEach(({title, rating, id}) => {

                outputHtml += `<div id="movie-${id}" class="well movie-div">`;
                outputHtml += `<h2>Title: ${title} </h2>`;
                outputHtml += `<h3> Rating: ${rating} </h3><br>`;
                outputHtml += `<div style="text-align: right" id="buttons-${id}" class="btn-group"><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-danger">Delete</button></div>`;
                outputHtml += `</div>`;

                paginationOutTop += `<li><a href="#${id}">${id}</a></li>`;

            });

            $('#pageNav').html(paginationOutTop + paginationOutBottom);
            $('#movies').removeClass("loader").html(outputHtml);
            $('.movie-div').click((e) => {
                $('#').show();
                console.log(e.currentTarget.id);
             });
        };


    // addMovies();
// delMovies();
// editMovies();

    $('#add-btn').click ((e) => {
        e.preventDefault();
         $('#add-modal').modal('show');
    });


    $('#model-add').click((e) => {
        e.preventDefault();
        let movieTitle = $('#movie-title').val();
        let raTings = $('#rating').val();

        addMovies(movieTitle, raTings)
            .then(() => {
            getMovies().then((movies) => buildDisplay(movies));
            })
    });


}