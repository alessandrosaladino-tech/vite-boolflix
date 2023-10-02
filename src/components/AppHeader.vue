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
            store.query = []

        }
    },
}
</script>

<template>
    <header>

        <nav class="navbar navbar-expand d-flex justify-content-between  px-3">
            <a class="nav-item nav-link active" href="#" aria-current="page">
                <h1>BOOLFLIX</h1>
            </a>

                <div class="input-group  w_20 d-flex ">
                    <input type="text" class="form-control border-danger bg-transparent text-light" placeholder="Type a title"
                        aria-label="Type a title" aria-describedby="button-addon2" @keyup.enter="addQuery"
                        v-model="this.store.query">
                    <button class="btn btn-outline-danger" @click="addQuery" type="button" id="button-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-search-heart" viewBox="0 0 16 16">
                            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                            <path
                                d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                        </svg>

                    </button>
                </div>


        </nav>

    </header>
</template>

<style lang="scss" scoped>
@use "../src/assets/scss/partials/variables" as *;

header {
    background-color: $blfx_secondary;

    & h1 {
        color: $blfx_logo;
        text-shadow: 3px 3px 3px black;
    }
}

.w_20 {
    width: 20%;
}
</style>
