<script>
import { store } from "./store.js"
export default {
  name: "App",
  data() {
    return {
      store
    }
  },

  methods: {
    addQuery() {
      const urlMovieComplete = this.store.movieUrl + this.store.query;
      this.store.fetchFilms(urlMovieComplete);
      console.log(this.store.query, urlMovieComplete);

    }
  },

  created() {

  }
}
</script>

<template>
  <div>

    <input v-model="this.store.query" type="text">
    <button @click="addQuery">trova</button>

    <div>

      <ul>
        <li v-for="film in this.store.films">
          <p>{{ film.title }}</p>
          <p>{{ film.original_title }}</p>
          <img
            :src="film.original_language == 'en' ? 'https://flagsapi.com/GB/shiny/64.png' : 'https://flagsapi.com/' + film.original_language.toUpperCase().split('_')[0] + '/shiny/64.png'"
            @error="$event.target.src = 'https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png'"  :alt="film.original_language"/> 
          
          <p>{{ film.vote_average }}</p>

        </li>
      </ul>

    </div>

  </div>
</template>

<style scoped></style>
