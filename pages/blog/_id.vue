<template>
  <section>
    <div class="post">
      <h1>{{ post.title }}</h1>
      <div v-html="$md.render(post.body.split('---')[2])"></div>
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism'
export default {
  async asyncData(context) {
    const res = await context.app.$axios.$get(
      `/post/${context.route.params.id}`
    )
    return { post: res.data }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
.post {
  padding: 64px;
  margin: auto;
  max-width: 860px;
}

// for blog
p {
  line-height: 2.2em;
  vertical-align: baseline;
  font-weight: 300;
  margin: 48px 36px;
}

hr {
  display: none;
}

p,
h1,
h2,
h3,
h4 {
  margin: 48px 36px;
  // margin: 36px 0px;
}

code {
  background: #e0f8f7;
  padding: 4px 8px;
}
</style>
