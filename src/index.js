/**
 * es6 modules and imports
 */
const $ = require('jquery');
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {

    let outputHtml = "";
  // console.log('Here are all the movies:');

  movies.forEach(({title, rating, id}) => {



      // $('#test').text(`id#${id} - ${title} - rating: ${rating}`);
      outputHtml += `<div id="${id}">`;
      outputHtml += `<h2>Title: ${title} </h2>`;
      outputHtml += `<h3> Rating: ${rating} </h3>`;
      outputHtml += `</div>`

      // console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
    $("#movies").removeClass("loader");


    $("#movies").html(outputHtml)

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);

});

