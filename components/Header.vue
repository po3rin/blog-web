<template>
  <header class="header">
    <div class="header_logo" @click="push('/')"></div>
    <div class="header_item" @click="push('/')">home</div>
    <div class="header_item" @click="push('/blog')">blog</div>
    <div class="header_item" @click="push('/about')">about</div>
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
.header {
  z-index: 1000000;
  padding: 24px 48px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  &_logo {
    width: 36px;
    height: 36px;
    background-color: #00ffc4;
    margin-right: 24px;
    cursor: pointer;
  }
  &_item {
    padding: 0px 20px;
    cursor: pointer;
  }

  &_item:hover {
    background: linear-gradient(transparent 70%, #00ffc4 0%);
  }
}

@media screen and (max-width: 640px) {
  .header {
    display: none;
  }
}
</style>
