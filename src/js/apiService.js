import { debounce } from "lodash";
import { refs } from "./refs"
import photoCardTpl from "../templates/photoCardTpl.hbs"

const request = {
BASE_URL: 'https://pixabay.com/api',
orientation: 'orientation=horizontal',
numOfPage: 1,
perPage: 'per_page=12',
key: 'key=23162659-e31e220340403b8018b25f991'
}

export default function apiService (searchQuery) {
    // try {
        return fetch(`${request.BASE_URL}/?image_type=photo&${request.orientation}&q=${searchQuery}&page=${request.numOfPage}&${request.perPage}&${request.key}`)
    
    // }
    // catch (error) {console.log(error)}
}



const renderCardList = (res) => {
    const markup = photoCardTpl(res);
    refs.galleryList.innerHTML = markup;
    console.log(res);
}

const onHandleInput = e => {
    e.preventDefault();
    const searchQuery = e.target.value.trim();
    if (!searchQuery) {
        return
    };  

    console.log(searchQuery);

    apiService(searchQuery)
    .then(res => res.json())
    .then(renderCardList)
    .catch(console.error())
    
}



refs.input.addEventListener('input', debounce(onHandleInput, 1000))
