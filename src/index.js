import './style.css';
import './index.html';

const row = document.querySelector('.row');

const renderMovie = (allMovies) => {
  let render = '';
  allMovies.forEach((movie) => {
    render += `<div class="col-md-4">
    <div class="movieImg">
    <img src="${movie.show.image.medium}" alt="">
    </div>
    <p class="title">${movie.show.name} <i class="fa-regular fa-heart"></i></p>
    <div><span class="likes" id=${movie.show.id}>likes</span></div>
    <button class="comments">Comments</button>
    <button class="reserve">Reservations</button>
   </div>`;
    row.innerHTML = render;
  });
};

const getMovies = async () => {
  const url = 'https://api.tvmaze.com/search/shows?q=n';
  const response = await fetch(url);
  const data = await response.json();
  renderMovie(data);
};

getMovies();