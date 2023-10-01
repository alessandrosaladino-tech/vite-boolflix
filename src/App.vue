<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
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

  <AppMain></AppMain>
  
</template>

<style lang="scss" scoped>
@use "./assets/scss/partials/variables" as *;

main {
  background-color: $blfx_primary;
  height: 100vh;
}
</style>
