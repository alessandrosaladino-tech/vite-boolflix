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

  </div>
</template>

<style scoped></style>
