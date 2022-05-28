const modal = document.getElementById('view');
const closeBtn = document.getElementById('closeModal');
const cardBody = document.getElementById('card-body');
const itemId = document.getElementById('hidden');
const form = document.getElementById('form');
const loadingForm = document.getElementById('loading-form');
const commentForm = document.getElementById('comment-form');

let movieCache = null;

const fetchComment = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/comments?item_id=${id}`);

  if (res.status === 400) return null;

  const data = await res.json();
  return data;
};

const renderViewModal = (movie) => {
  movieCache = movie;

  modal.style.display = 'flex';

  itemId.value = movie.show.id;

  fetchComment(movie.show.id)
    .then((data) => {
      cardBody.innerHTML = `
        <div>
            <img src="${movie.show.image.original}" alt="">
            <h2 id="title">${movie.show.name}</h2>
            <div class="details">
              <p><span class="bold">Language: </span><span>${movie.show.language}</span></p>
              <p><span class="bold">Type: </span><span>${movie.show.type}</span></p>
              <p><span class="bold">Premiered: </span><span>${movie.show.type}</span></p>
              <p><span class="bold">Status: </span><span>${movie.show.status}</span></p>
              <p><span class="bold">Genres: </span><span>${movie.show.genres.toString()}</span></p>
            </div>
            <div class="comment">
              <h5>Comments (${data ? data.length : 0})</h5>
                <ul id="comment-list">
                  
                </ul>
            </div>
            <div class="description">
                ${movie.show.summary}
            </div>
        </div>
    `;
      const commentList = document.getElementById('comment-list');

      if (data) {
        data.forEach((comment) => {
          const item = document.createElement('li');
          item.innerHTML = `<p><span class="bold">${comment.creation_date} ${comment.username}:</span> ${comment.comment}</p>`;
          commentList.appendChild(item);
        });
      }

      commentForm.style.display = 'block';
    });
};

const addComment = async (form) => {
  loadingForm.style.display = 'block';
  form.preventDefault();

  const data = Object.fromEntries(new FormData(form.target).entries());

  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ item_id: data.item_id, comment: data.comment, username: data.username }),
  });

  loadingForm.style.display = 'none';
  commentForm.style.display = 'none';
  cardBody.innerHTML = "<h4 class='loading'>Loading . . .</h4>";
  renderViewModal(movieCache);

  form.target.reset();
};

form.addEventListener('submit', addComment);

const close = () => {
  commentForm.style.display = 'none';
  cardBody.innerHTML = "<h4 class='loading'>Loading . . .</h4>";
  modal.style.display = 'none';
};

closeBtn.addEventListener('click', close);

export default renderViewModal;