import { fetchImages } from './js/fetch-Image';
import { renderGallary } from './js/render-gallary';
import { Notify } from 'notiflix';

import 'simplelightbox/dist/simple-lightbox.min.css';
import NewsApiService from './js/fetch-Image';

const form = document.querySelector('.search-form');
const submit = document.querySelector('[type="submit"]');
const loadMoreBtn = document.querySelector('.load-more');
const newsApiService = new NewsApiService();
const gallary = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();
  newsApiService.query = evt.currentTarget.searchQuery.value.trim();
  newsApiService.resetPage();
  newsApiService.fetchHits().then(renderGallary);
  clearHitsMarcap();
}
function onLoadMore() {
  newsApiService.fetchHits().then(renderGallary);
}

function clearHitsMarcap() {
  gallary.innerHTML = '';
}

//
// function alertImagesFound(data) {
//     Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//   }

//   function alertNoEmptySearch() {
//     Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
//   }

//   function alertNoImagesFound() {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.',
//     );
//   }

//   function alertEndOfSearch() {
//     Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
//   }

// =======================================================================================================================================
// const newsApiService = new NewsApiService();
// function onSearch(e) {
// e.preventDefault();
// newsApiService.query = e.currentTarget.searchQuery.value.trim();
// newsApiService.resetPage();
// newsApiService.fetchArticles();

// }
