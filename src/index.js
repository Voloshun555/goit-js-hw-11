import { fetchImages } from './js/fetch-Image';
import { renderGallary } from './js/render-gallary';
import { Notify } from 'notiflix';
import { spinnerPlay, spinnerStop } from './js/spiner';
import 'simplelightbox/dist/simple-lightbox.min.css';
import NewsApiService from './js/fetch-Image';
import isOpen from './js/take'

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const newsApiService = new NewsApiService();
const gallary = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);


spinnerPlay();

window.addEventListener('load', () => {
  spinnerStop();
});


loadMoreBtn.classList.add("is-hidden");

async function onSearch(evt) {
  
  evt.preventDefault();
  newsApiService.query = evt.currentTarget.searchQuery.value.trim();
  newsApiService.resetPage();
  spinnerPlay();
  clearHitsMarcap()
  try {
    const awaitFetch = await newsApiService.fetchHits();
    console.log(awaitFetch.data);
    console.log(awaitFetch.data.hits);
    console.log(awaitFetch.data.totalHits);
    spinnerPlay();

    if (!newsApiService.query) {
      showNotification('empty')
      return
    }
   
    
    if (awaitFetch.data.totalHits === 0) {
      showNotification('failure')
        return;
    }
    Notify.info(`Hooray! We found ${awaitFetch.data.totalHits} images.`)
    renderGallary(awaitFetch.data.hits);
    loadMoreBtn.classList.remove("is-hidden");
    
    if (newsApiService.perPage * newsApiService.page > awaitFetch.data.totalHits) {
      loadMoreBtn.classList.add("is-hidden");
      showNotification('end')
  }

} catch (error) {
    console.log(error.message);
} finally {
  spinnerStop();
}
}

 async  function onLoadMore() {
  newsApiService.increment()
try {
  const awaitFetch = await newsApiService.fetchHits();
  renderGallary(awaitFetch.data.hits);
  scrollOn()
  spinnerPlay();

  // if (awaitFetch.data.totalHits < 40) {
  //   showNotification('end')
  //   loadMoreBtn.classList.add("is-hidden");
  //     return;
  // }

  if (newsApiService.perPage * newsApiService.page > awaitFetch.data.totalHits) {
    loadMoreBtn.classList.add("is-hidden");
    showNotification('end')
}
  
} catch (error) {
  console.log(error.message);
  
} finally {
  spinnerStop();
}};



function clearHitsMarcap() {
  gallary.innerHTML = '';
}

const showNotification = (status) => {
  if (status === 'failure') {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  }
  if (status === 'end') {
      Notify.info('We`re sorry, but you`ve reached the end of search results.')
  }
  if (status === 'empty') {
      Notify.info('Fill the form for searching')
  }
}



function scrollOn () {
  const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
}

// window.addEventListener('scroll', scrollFunction);

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     refs.btnUpWrapper.style.display = 'flex';
//   } else {
//     refs.btnUpWrapper.style.display = 'none';
//   }
// }
// refs.btnUp.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
