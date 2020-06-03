<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h1>😢</h1>
    <div v-if="error.statusCode === 404" class="container_item">
      <p class="message">ページが見つかりません</p>
    </div>
    <div v-else class="container_item">
      <p class="message">一時的に障害が起きているようです。</p>
      <p class="description">
        現在復旧作業を行なっています。ご迷惑をおかけして申し訳ございません。記事のマスターはGitHub上でご覧いただけます。<br />
        <a href="https://github.com/po3rin/post/blob/master/CONTENTS.md"
          >記事のリポジトリへ</a
        >
      </p>
    </div>
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
p {
  line-height: 2em;
  vertical-align: baseline;
  font-weight: 300;
}

.container {
  min-height: 50vh;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &_item {
    max-width: 512px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.message {
  font-weight: bold;
  font-size: 1rem;
}

.description {
  font-size: 0.9rem;
}
</style>
