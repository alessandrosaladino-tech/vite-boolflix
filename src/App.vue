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

  },

  created() {

  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppCards></AppCards>
  </main>

</template>

<style lang="scss" scoped>
@use "./assets/scss/partials/variables" as *;

main {
  background-image: url(./assets/img/netflix-800x450.webp);
  height: calc(100vh - 72px);
  overflow: auto;
}


</style>
