import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
    movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=811cc1d70d0da0842f58ea6aad4434ed&query=",
    myApiKey: "811cc1d70d0da0842f58ea6aad4434ed",
    query: "",
    films: "",
    completeUrl: "",


    fetchFilms(url){

        axios 
        .get(url)
        .then(response =>{
            this.films = response.data.results
            console.log(this.films);
        })
        .catch(error =>{
            console.error(error);
        })
    }

})