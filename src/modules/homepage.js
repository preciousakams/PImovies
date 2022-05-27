import { getLikeFunction, postLikeFunction } from './likes.js';

const row = document.querySelector('.row');
let list = '';

const renderMovie = (allMovies) => {
  allMovies.forEach((movie) => {
    list += `<div class="col col-sm-6 col-md-4 col-lg-3" id=${movie.show.id}>
  <div class="cardDiv">
    <div class="movieImg">
      <img src=${movie.show.image.medium} alt="">
    </div>
    <p class="title">${movie.show.name}</p>
    <div class="spanDiv">
      
      <button class="like-btn"><span class="likes">0</span><i class="fa-solid fa-heart"></i></button>
    </div>
    <button class="comments">Comments</button>
  </div>
</div>
    `;
    row.innerHTML = list;
  });
  getLikeFunction();
  postLikeFunction();
};
const getMovies = async () => {
  try {
    const url = 'https://api.tvmaze.com/search/shows?q=n';
    const response = await fetch(url);
    const data = await response.json();
    renderMovie(data);
  } catch (error) {
    return error;
  }
  return null;
};

getMovies();

export default { renderMovie };