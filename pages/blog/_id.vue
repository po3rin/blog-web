<template>
  <section>
    <div class="post">
      <h1>{{ post.title }}</h1>
      <p>
        {{
          post.created_at
            .split('T')[0]
            .split('-')
            .join(' / ')
        }}
      </p>
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
  max-width: 740px;
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
  margin: 48px 48px;
  // margin: 36px 0px;
}

strong {
  background: linear-gradient(transparent 70%, #ffff00 0%);
}

code {
  background: #e0f8f7;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 1rem;
}

pre > code {
  font-size: 1rem;
  font-weight: normal;
}

@media screen and (max-width: 640px) {
  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 36px 12px;
  }

  .post {
    padding: 0px;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  pre > code {
    font-size: 0.8rem;
  }
}
</style>
