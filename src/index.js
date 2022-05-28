import './style.css';
import './index.html';
import getMovies from './modules/homepage.js';

(async () => {
  await getMovies();
})();