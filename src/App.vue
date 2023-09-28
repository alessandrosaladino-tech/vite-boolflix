<script>
import { store } from "./store.js"
export default {
  data() {
    return {
      store
    }
  },

  methods: {
    addQuery() {
      const urlMovieComplete = this.store.movieUrl + `&query=${this.store.query}`
      this.state.fetchFilms(urlMovieComplete)
    }
  }
}
</script>

<template>
  
  <div>

    <input v-model="this.store.query" type="text">
    <button>trova</button>

  </div>

</template>

<style scoped></style>
