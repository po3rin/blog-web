<template>
  <div class="wrapper">
    <nuxt />
  </div>
</template>

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

.header {
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;
  &_sns {
    padding: 12px;
    width: 120px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
