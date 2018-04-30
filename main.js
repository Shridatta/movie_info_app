$(document).ready(()=>{
 $('#searchForm').on('submit',(e)=>{
   let searchText=$('#searchText').val();
   getMovies(searchText);
   e.preventDefault();
 });
});


function getMovies(searchText)
{
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=16c7ac5a745691fcb615134a5d34cefb&query='+searchText)
    .then(function (response) {
      console.log(response);
      let movies = response.data.results;
      let output='';
      $.each(movies,(index,movie)=> {
        output += `
          <div class="col-md-3">
           <div class="well text-center">
            <h5>${movie.title}</h5>
            <a onClick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details </a>
            </div>
          </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });



    /* axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=thewdb').then((response) => {
    console.log(response);
  })
  .catch(err) => {
    console.log(err);
  });*/
}
