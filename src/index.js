/**
 * es6 modules and imports
 */
const $ = require('jquery');
let paginationOutTop =`<nav aria-label="Page navigation"><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`;
const paginationOutBottom = `<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>`;
/**
 *
 *
 *
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    let outputHtml = "";

  // console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
      // $('#test').text(`id#${id} - ${title} - rating: ${rating}`);
      outputHtml += `<div class="well" id="${id}">`;
      outputHtml += `<h2>Title: ${title} </h2>`;
      outputHtml += `<h3> Rating: ${rating} </h3>`;
      outputHtml += `</div>`;
      paginationOutTop += `<li><a href="${id}">${id}</a></li>`;

  });

    $('#movies').removeClass("loader").html(outputHtml).append(paginationOutTop + paginationOutBottom);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);

});

