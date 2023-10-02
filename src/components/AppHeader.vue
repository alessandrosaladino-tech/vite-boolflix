<script>
import { store } from "../store";
export default {
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
}
</script>

<template>
    <header>

        <nav class="navbar navbar-expand navbar-light d-flex justify-content-between px-3">
            <a class="nav-item nav-link active" href="#" aria-current="page">
                <h1>BOOLFLIX</h1>
            </a>
            <div class="nav navbar-nav">
                <input @keyup.enter="addQuery"  v-model="this.store.query" type="text"/>
                <button @click="addQuery">FIND</button>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>
@use "../src/assets/scss/partials/variables" as *;

/*header*/
header {
    background-color: $blfx_secondary;

    & h1 {
        color: $blfx_logo;
    }
}


/*header*/
</style>
