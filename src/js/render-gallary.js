import SimpleLightbox from 'simplelightbox';
export {renderGallary}
const gallary = document.querySelector('.gallery')


function renderGallary (photo) {
    const gallaryRander = photo
    .map(photo => {const 
      {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = photo;
 return `<div class="photo-card">
 <a class="gallery__item" href="${largeImageURL}">
        <img class="photoImg" src="${webformatURL}" alt="${tags}" loading="lazy"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>${likes}
          </p>
          <p class="info-item">
            <b>Views</b>${views}
          </p>
          <p class="info-item">
            <b>Comments</b>${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>${downloads}
          </p>
        </div>
      </div>
      `;
    }
    )
    gallary.insertAdjacentHTML('beforeend', gallaryRander.join(''));
    simpleLightBox.refresh();
};
const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // опис
  captionDelay: 250, // затримка 250 мілісекунд
});
