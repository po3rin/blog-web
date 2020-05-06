<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h1>😢</h1>
    <p v-if="error.statusCode === 404">ページが見つかりません</p>
    <p v-else>エラーが発生しました</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 50vh;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
