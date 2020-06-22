$(document).ready(function(){

  var afterFilter = function(result, jQ){
    $('#total_movies').text(result.length);
  }

  var FJS = FilterJS(movies, '#movies', {
    template: '#movie-template',
    search: {
      ele: '#searchbox',
      fields: ["name","outline", "rating", "stars"],
      start_length: 1,
      searchType: 'multiword',
      searchWeighting: {
        "name": 50,
        "outline": 10,
        "rating": 10,
        "director": 10,
        "year": 10,
        "stars": 10,
      }
    },
    callbacks: {
      afterFilter: afterFilter,
      sortingCallback: function(query) {
        query.order({ 'weight': 'desc' });
      }
    },
    pagination: {
      container: '#pagination',
      visiblePages: 5,
      perPage: {
        values: [12, 15, 18],
        container: '#per_page'
      },
    }
  });

  window.FJS = FJS;
});