<template>
  <div class="wrapper">
    <custom-header />
    <nuxt />
    <custom-footer />
  </div>
</template>

<script>
import CustomFooter from '~/components/Footer'
import CustomHeader from '~/components/Header'
export default {
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>

<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #1d3152;
}

h1 {
  margin: 0;
}

body {
  margin: 0px;
  min-height: 100vh;
}
</style>
