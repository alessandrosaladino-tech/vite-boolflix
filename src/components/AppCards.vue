<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col" v-for="result in this.store.completeResults">

                    <div class="shadow blfx_card mt-4">


                        <div class="card_img">
                            <img :src="'https://image.tmdb.org/t/p/w500/' + `${result.poster_path}`">
                        </div>

                        <div class="card_body_blfx">
                            <p>Titolo: {{ result.title ? result.title : result.name }}</p>
                            <p>Titolo originale: {{ result.original_title ? result.original_title : result.original_name }}
                            </p>
                            <p>Lingua:
                                <img :src="result.original_language == 'en' ? 'https://flagsapi.com/GB/shiny/64.png' : 'https://flagsapi.com/' + result.original_language.toUpperCase().split('_')[0] + '/shiny/64.png'"
                                    @error="$event.target.src = 'https://cdn2.iconfinder.com/data/icons/calin-support/32/-_52_world_support-1024.png'"
                                    :alt="result.original_language" class="blfx_flag" />
                            </p>

                            <p class="d-flex align-items-center gap-1"><span>Voto: </span>
                                <span v-for="star in Math.round(result.vote_average / 2)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow"
                                        class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>

                                <span v-for="star in Math.round(5 - result.vote_average / 2)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-star" viewBox="0 0 16 16">
                                        <path
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                </span>
                            </p>

                            <p><span>Overview: </span> {{ result.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../src/assets/scss/partials/variables" as *;

.blfx_card {
    width: 200px;
    height: 350px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    border: 3px solid grey;

    & .card_img {
        width: 100%;
        height: 100%;

        & img {
            width: 100%;
            height: 100%;
        }
    }
}

.card_body_blfx {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: none;
    overflow-y: auto;
    cursor: default;
    background-color: $blfx_primary;
    color: white;
    padding: 1rem;

    & p {
        font-weight: bold;
        font-size: 10px;
        vertical-align: middle;
    }

    & blfx_flag {
        height: 15px;

    }

    & img {
        width: 20%;
    }
}

.blfx_card:hover .card_body_blfx {
    display: block;
}

.blfx_card:hover {
    border: 3px solid $blfx_logo;
}

section {
    background-color: $blfx_primary;
}
</style>