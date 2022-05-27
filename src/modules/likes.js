const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/likes';

const getLikeFunction = async () => {
  const cards = document.querySelectorAll('.col');
  const likeCount = document.querySelectorAll('.likes');
  await fetch(likeUrl)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};
const postLikeFunction = async () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  const likeBtnCount = document.querySelectorAll('.likes');
  const card = document.querySelectorAll('.col');
  likeBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(likeUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: card[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};

export { getLikeFunction, postLikeFunction };
