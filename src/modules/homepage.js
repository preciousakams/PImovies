const row = document.querySelector('.row');

const handleLike = async (e) => {
  const id = e.target.previousElementSibling.previousElementSibling.innerText;
  const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/likes';
  const newLikes = {
    item_id: id,
    likes: 1,
  };

  const postResponse = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newLikes),
  });
  const postData = await postResponse;
  window.location.reload();
  return postData;
};
const renderMovie = (allMovies) => {
  allMovies.forEach((movie) => {
    const col = document.createElement('div');
    col.classList = 'col-md-4';
    const movieImg = document.createElement('div');
    movieImg.classList = 'movieImg';
    const displayImg = document.createElement('img');
    displayImg.setAttribute('src', movie.show.image.medium);
    const title = document.createElement('p');
    title.classList = 'title';
    title.innerHTML = `${movie.show.name}`;
    const spanDiv = document.createElement('div');
    spanDiv.classList = 'spanDiv';
    const spanLikes = document.createElement('span');
    spanLikes.classList = 'likes';
    spanLikes.innerHTML = '<i class="fa-regular fa-heart"></i>';
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.addEventListener('click', handleLike);
    const id = document.createElement('span');
    id.innerText = `${movie.show.id}`;
    id.className = 'hidden';
    id.style.display = 'none';
    const comments = document.createElement('button');
    comments.classList = 'comments';
    comments.innerHTML = 'Comments';
    const cardDiv = document.createElement('div');
    cardDiv.classList = 'cardDiv';

    row.append(col);
    col.append(cardDiv);
    cardDiv.append(movieImg);
    movieImg.append(displayImg);
    cardDiv.append(title);
    cardDiv.append(spanDiv);
    spanDiv.append(id);
    spanDiv.append(spanLikes);
    spanDiv.append(likeBtn);
    cardDiv.append(comments);

    const setLikeCounter = (currentLikeData, id, spanLikes) => {
      const liked = currentLikeData.find(
        (element) => element.item_id === id.innerText,
      );
      if (typeof liked === 'undefined') {
        spanLikes.innerHTML = '0 <i class="fa-regular fa-heart"></i>';
      } else if (liked.likes === 1) {
        spanLikes.innerHTML = '1 <i class="fa-solid fa-heart" style="color: red;"></i>';
      } else {
        spanLikes.innerHTML = `${liked.likes} <i class="fa-solid fa-heart" style="color: red;"></i>`;
      }
    };
    const getLikeFunction = () => {
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/likes')
        .then((resp) => resp.json())
        .then((currentLikeData) => setLikeCounter(currentLikeData, id, spanLikes));
    };
    getLikeFunction();
  });
};
const getMovies = async () => {
  const url = 'https://api.tvmaze.com/search/shows?q=n';
  const response = await fetch(url);
  const data = await response.json();
  renderMovie(data);
};

getMovies();