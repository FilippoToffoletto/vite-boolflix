import {reactive} from 'vue';

export const store = reactive({
    getApiPopularFilms:'https://api.themoviedb.org/3/movie/popular?api_key=9225cbceec9a2eb0c169c5ed63fca124',
    getApiPopularTv:'https://api.themoviedb.org/3/tv/popular?api_key=9225cbceec9a2eb0c169c5ed63fca124',
    getApiSerieTv:'https://api.themoviedb.org/3/search/tv?api_key=9225cbceec9a2eb0c169c5ed63fca124',
    getApiMovie:'https://api.themoviedb.org/3/search/movie?api_key=9225cbceec9a2eb0c169c5ed63fca124',
    arrayFilms:[],
    arraySerieTv:[],
    language:'it_IT',
    query:'',
    isSearch:false
})