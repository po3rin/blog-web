<template>
  <header class="header">
    <nuxt-link to="/">
      <div class="header_logo"></div>
    </nuxt-link>
    <nuxt-link to="/">
      <div class="header_item" @click="push('/')">🏠home</div>
    </nuxt-link>
    <!-- <div class="header_item" @click="push('/blog')">blog</div> -->
    <nuxt-link to="/about">
      <div class="header_item" @click="push('/about')">😊about</div>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  methods: {
    push(p) {
      this.$router.push({ path: p })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $sec-color;
  text-decoration: none;
}

.header {
  z-index: 1000000;
  padding: 12px 48px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  &_logo {
    width: 36px;
    height: 36px;
    background-color: $main-color;
    margin-right: 24px;
    cursor: pointer;
  }
  &_item {
    padding: 0px 20px;
    cursor: pointer;
  }

  &_item:hover {
    background: linear-gradient(transparent 70%, $main-color 0%);
  }
}

@media screen and (max-width: 640px) {
  .header {
    width: 100%;
    position: absolute;
    padding: 8px 0px;
    &_logo {
      margin: 0px 8px;
    }
    &_item {
      padding: 8px 8px;
    }
    background-color: rgba(255, 255, 255, 1);
    &_item:hover {
      background: none;
    }
  }
}
</style>
