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
// default css ---------------
html {
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, 'Segoe UI', 'Helvetica Neue',
    'Hiragino Kaku Gothic ProN', メイリオ, meiryo, sans-serif;
  font-family: sans-serif;
  color: $sec-color;
}

h1 {
  margin: 0;
}

body {
  margin: 0px;
  min-height: 100vh;
}

svg {
  cursor: pointer;
}

a {
  word-break: break-all;
}
</style>
