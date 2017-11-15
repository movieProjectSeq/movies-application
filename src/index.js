{
    "use strict";

    let paginationOutTop = "";
    let currentID = 0;
    const paginationOutBottom = `<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>`;
    const {getMovies, delMovies, addMovies, editMovies} = require('./api.js');

    getMovies().then((movies) => buildDisplay(movies))
        .catch((error) => {
                alert('Oh no! Something went wrong.\nCheck the console for details.');
                console.log(error);
    });

    const editModal = (event) => {
        currentID = event.currentTarget.id.split('-');
        let oldTitle = event.target.parentElement.innerHTML.split(' ');
         $('#edit-movie-title').html(`<label for="edit-movie-title" class="control-label">Movie Title:</label>\n <input type="text" placeholder="${oldTitle[1]}" id="edit-movie-title-box" class="form-control">`);
        $('#edit-modal').modal('show');
    };



    const buildDisplay = (movies) => {
            let outputHtml = "";
            // paginationOutTop = `<nav aria-label="Page navigation"><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`;

            movies.forEach(({title, rating, id}) => {

                outputHtml += `<div id="movie-${id}" class="well movie-div">`;
                outputHtml += `<h2>Title: ${title}  </h2>`;
                outputHtml += `<h3> Rating: ${rating} </h3><br>`;
                outputHtml += `<button id="edit-btn-${id}" type="button" class="btn btn-primary">Edit</button><button id="del-btn-${id}" type="button" class="btn btn-danger">Delete</button>`;
                outputHtml += `</div>`;

                // paginationOutTop += `<li><a href="#${id}">${id}</a></li>`;

            });


            // $('#pageNav').html(paginationOutTop + paginationOutBottom);
            $('#movies').removeClass("loader").html(outputHtml);



                /*click to edit*/
                $('.btn-primary').click((e) => {
                    editModal(e);
                });
// ---------------------
//        click to Delete

                $('.btn-danger').click((e) => {
                    let id = event.currentTarget.id.split('-');
                    delMovies(id[2]);
                    $('#movie-' + id[2]).hide();
                });

        };
// --------------------------


    $('#add-btn').click ((e) => {
        e.preventDefault();
         $('#add-modal').modal('show');
    });


    $('#model-add').click((e) => {
        e.preventDefault();
        let movieTitle = $('#add-movie-title').val();
        let raTings = $('#add-rating').val();

        addMovies(movieTitle, raTings)
            .then(() => {
            getMovies().then((movies) => buildDisplay(movies));
            })
    });

    $('#model-edit').click((e) => {
        e.preventDefault();
        let movieTitle = $('#edit-movie-title-box').val();
        let raTings = $('#edit-rating').val();
        console.log(e);
        editMovies(movieTitle, raTings, currentID[2]).then(() => getMovies().then((movies) => buildDisplay(movies)));
    });

}