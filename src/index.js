import 'material-icons'
import './sass/main.scss';
import { refs } from './js/refs'
import ApiService from './js/apiService';
import LoadMoreBtn from './js/loadMoreBtn';
import { debounce } from "lodash";
import photoCardTpl from './templates/photoCardTpl.hbs'
import { errorSearch } from './js/errorSearch';
import imgScroll from './js/imgScroll';

const loadMoreBtn = new LoadMoreBtn({
    ref: document.querySelector('#loadMoreBtn'),
    hidden: true
});

const apiService = new ApiService();

const fetchError = () => {
    console.log(`Error! Can't find the picture!`);
}

const clearPicsList = () => {
    refs.galleryList.innerHTML = '';
}

const appendPicMarkup = (images) => {
    refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(images));

}

const onHandleInput = e => {
    e.preventDefault();
    apiService.searchQuery = e.target.value.trim();
    if (!apiService.searchQuery) {
        return
    };

    apiService.resetPage();
    
    apiService.fetchArt().then(images => { 
        if(images.hits.length === 0) {
            errorSearch();
        }
        console.log(images);
        clearPicsList();
        appendPicMarkup(images);
        images.totalHits>12&&images.hits.length<=12?loadMoreBtn.show():loadMoreBtn.hide()
        imgScroll(refs.loadMoreBtn);
        
    }).catch(fetchError)
}

const renderFetchBtn = () => {
    loadMoreBtn.disable();
    apiService.fetchArt().then(images => { 
        appendPicMarkup(images);
        imgScroll(refs.loadMoreBtn);
        loadMoreBtn.enable();
    }).catch(fetchError)
}

refs.input.addEventListener('input', debounce(onHandleInput, 500))
refs.loadMoreBtn.addEventListener('click', renderFetchBtn);