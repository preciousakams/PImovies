import renderModal from './view.js';
import { getLikeFunction, postLikeFunction } from './likes.js';

const row = document.getElementById('row');

const renderMovie = (movies) => {
  movies.forEach((movie) => {
    const div = document.createElement('div');

    div.classList.add('col');
    div.classList.add('col-sm-6');
    div.classList.add('col-md-4');
    div.classList.add('col-lg-3');

    div.id = movie.show.id;

    div.innerHTML = `
    <div class="cardDiv">
        <div class="movieImg">
          <img src=${movie.show.image.medium} alt="">
        </div>
        <p class="title">${movie.show.name}</p>
        <div class="spanDiv">
          
          <button class="like-btn"><span class="likes">0</span><i class="fa-solid fa-heart"></i></button>
        </div>
        <button class="comments" id='comment-${movie.show.id}'>Comments</button>
      </div>
    `;

    row.appendChild(div);

    const commentBtn = document.getElementById(`comment-${movie.show.id}`);
    commentBtn.addEventListener('click', () => {
      renderModal(movie);
    });
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

export default getMovies;
