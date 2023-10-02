<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppCards from "./components/AppCards.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppCards
  },
  data() {
    return {
      store
    }
  },

  methods: {
    addQuery() {
      store.completeResults = [];
      const urlMovieComplete = this.store.movieUrl + this.store.query;
      const urlTvsComplete = this.store.tv_url + this.store.query;
      this.store.fetchTv(urlTvsComplete);
      this.store.fetchFilms(urlMovieComplete);
      console.log(this.store.query, urlMovieComplete, urlTvsComplete);

    }
  },

  created() {

  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <AppCards></AppCards>
  
</template>

<style lang="scss" scoped>
@use "./assets/scss/partials/variables" as *;


</style>
