import 'material-icons'
import { apiServiceOld } from './js/apiService';
import './sass/main.scss';
import { refs } from './js/refs'
// import { from } from 'rxjs/observable/from';




import ApiService from './js/apiService';
import LoadMoreBtn from './js/loadMoreBtn';
import { debounce } from "lodash";
// import { refs } from "./refs"
import photoCardTpl from './templates/photoCardTpl.hbs'
import { errorSearch } from './js/errorSearch';

const loadMoreBtn = new LoadMoreBtn({
    ref: document.querySelector('#loadMoreBtn'),
    hidden: true
});


const apiService = new ApiService();

const renderCardList = (res) => {
    const markup = photoCardTpl(res);
    refs.galleryList.innerHTML = markup;
    console.log(res);
}

const fetchError = () => {
    console.log(`Error! Can't find the picture!`);
}

const fetchPics = () => {
    loadMoreBtn.disable();
    try {
        apiService.fetchArt()
        .then(res => {
            appendPicMarkup(res);
            console.log(res);
            loadMoreBtn.enable();
        });
        
    } catch (error) {
        fetchError();
    }
}

const clearPicsList = () => {
    refs.galleryList.innerHTML = '';
}

const appendPicMarkup = (images) => {
    refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(images))
}

const onHandleInput = e => {
    e.preventDefault();
    apiService.searchQuery = e.target.value.trim();
    if (!apiService.searchQuery) {
        return
    };

    loadMoreBtn.show();
    
    apiService.resetPage();

    apiService.fetchArt().then(images => { 
        if(images.length === 0) {
          errorSearch();
        }
        clearPicsList();
        appendPicMarkup(images);
        apiService.incrementPage();
    }).catch(fetchError)
}

refs.input.addEventListener('input', debounce(onHandleInput, 1000))
refs.loadMoreBtn.addEventListener('click', appendPicMarkup);
