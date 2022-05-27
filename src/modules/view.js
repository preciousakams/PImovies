const modal = document.getElementById('view');
const closeBtn = document.getElementById('closeModal');
const cardBody = document.getElementById('card-body');

const renderViewModal = (movie) => {
  modal.style.display = 'flex';

  cardBody.innerHTML = `
        <div>
            <img src="${movie.show.image.original}" alt="">
            <h2 id="title">${movie.show.name}</h2>
            <div class="details">
            <p><span>Language: </span><span>${movie.show.language}</span></p>
            <p><span>Type: </span><span>${movie.show.type}</span></p>
            <p><span>Premiered: </span><span>${movie.show.type}</span></p>
            <p><span>Status: </span><span>${movie.show.status}</span></p>
            <p><span>Genres: </span><span>${movie.show.genres.toString()}</span></p>
            </div>
            <div class="description">
                ${movie.show.summary}
            </div>
        </div>
    `;
};

const close = () => {
  modal.style.display = 'none';
};

closeBtn.addEventListener('click', close);

module.exports = {
  renderViewModal,
};