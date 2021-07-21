<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/portfolio">portfolio</router-link>
    </div> -->
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue"
import Footer from "./components/layout/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_index";
</style>
