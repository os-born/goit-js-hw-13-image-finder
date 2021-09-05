
export default class LoadMoreBtn {
    constructor({ ref, hidden = false }) {
        this.ref = ref,
        hidden && this.hide()
    }

    enable() {
        this.ref.disabled = false;
    }

    disable() {
        this.ref.disabled = true;
    }

    show() {
        this.ref.classList.remove('is-hidden');
    }

    hide() {
        this.ref.classList.add('is-hidden');
    }
}



// ========================================

// refs.button.addEventListener('click', loadMore)

//  function loadMore() {
//  refs.button.scrollIntoView({
//  behavior: 'smooth',
//   block: 'end',
//    });
//  imagesApiService.fetchImages().then(renderImage).catch(onFetchError)
// }


// fetchImages() {
//     return fetch(`
// ${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
// .then(this.handleErrors).then(res => res.json())
// .then(data=> {
//      return data.hits})
     
// }



// export function renderImage(tagName) {
//     refs.galleryList.insertAdjacentHTML('beforeend',renderMarkUp(tagName));
// }

// ========================================


// function onSearch (e) {
//     e.preventDefault();
//     imagesApiService.query = e.currentTarget.elements.query.value.trim();
//     if(!imagesApiService.query) {
//       return
//     }
//   imagesApiService.resetPage();
//   imagesApiService.fetchImages().then(images => { 
//     if(images.length === 0) {
//       errorSearch();
//     }
//       cleanImages();
//     renderImage(images);
//   imagesApiService.incrementPage();
//   }).catch(onFetchError)
  
// }


// fetchImages() {
//     return fetch(`
// ${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
// .then(this.handleErrors).then(res => res.json())
// .then(data=> {
//      return data.hits})
     
// }