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
        }).then(console.log(this.page));
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
