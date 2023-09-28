import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
    movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=811cc1d70d0da0842f58ea6aad4434ed",
    myApiKey: "811cc1d70d0da0842f58ea6aad4434ed",
    query: "",
    films: "",


    fetchFilms(url){

        axios 
        .get(this.url)
        .then(response =>{
            this.films = response.data
            .console.log(this.films);
        })
        .catch(error =>{
            console.error(error);
        })
    }

})