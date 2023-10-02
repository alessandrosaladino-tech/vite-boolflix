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
  background-color: $blfx_primary;
  height: 100vh;
}


</style>
