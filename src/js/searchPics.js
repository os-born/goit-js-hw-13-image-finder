import ApiService from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import { debounce } from "lodash";
import { refs } from "./refs"
import photoCardTpl from "../templates/photoCardTpl.hbs"

const loadMoreBtn = new LoadMoreBtn({
  hidden: true,
});

const apiService = new ApiService();

const renderCardList = (res) => {
    const markup = photoCardTpl(res);
    refs.galleryList.innerHTML = markup;
    console.log(res);
}

const fetchPics = () => {
    loadMoreBtn.disable();
    apiService.fetchPics().
    then(res => {
      renderCardList(res);
      loadMoreBtn.enable();
    });
}

const clearPicsList = () => {
    refs.galleryList.innerHTML = '';
}

const onHandleInput = e => {
    e.preventDefault();
    const searchQuery = e.target.value.trim();
    if (!searchQuery) {
        return
    };  

    loadMoreBtn.show()
    apiService.resetPage();
    // clearPicsList();
    fetchPics();
}

refs.input.addEventListener('input', debounce(onHandleInput, 1000))
refs.loadMoreBtn.addEventListener('click', fetchPics);
