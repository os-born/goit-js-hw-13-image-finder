import { debounce } from "lodash";
import { refs } from "./refs"
import photoCardTpl from "../templates/photoCardTpl.hbs"

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23162659-e31e220340403b8018b25f991'

export default class ApiService {
    constructor () {
    this.searchQuery = '';
    this.page = 1;
    }

    fetchArt () {
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
        return fetch(url)
        .then(this.handleErrors)
        .then(response => response.json())
        .then( data => {
            this.incrementPage();
            return data;
        });
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    incrementPage() {
        this.page += 1;
      }
    
    resetPage() {
        this.page = 1;
      }
    
    get query() {
        return this.searchQuery;
      }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
      }
}

// const request = {
// BASE_URL: 'https://pixabay.com/api',
// orientation: 'orientation=horizontal',
// numOfPage: 1,
// perPage: 'per_page=12',
// key: '23162659-e31e220340403b8018b25f991'
// }

// export function apiServiceOld (searchQuery) {
//     // try {
//         return fetch(`${request.BASE_URL}/?image_type=photo&${request.orientation}&q=${searchQuery}&page=${request.numOfPage}&${request.perPage}&key=${request.key}`)
    
//     // }
//     // catch (error) {console.log(error)}
// }



// const renderCardList = (res) => {
//     const markup = photoCardTpl(res);
//     refs.galleryList.innerHTML = markup;
//     console.log(res);
// }

// const onHandleInput = e => {
//     e.preventDefault();
//     const searchQuery = e.target.value.trim();
//     if (!searchQuery) {
//         return
//     };  

//     // loadMoreBtn.show()

//     console.log(searchQuery);

//     apiServiceOld(searchQuery)
//     .then(res => res.json())
//     .then(renderCardList)
//     .catch(console.error())
    
// }



// refs.input.addEventListener('input', debounce(onHandleInput, 1000))
