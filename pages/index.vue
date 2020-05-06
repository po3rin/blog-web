<template>
  <div class="container">
    <section class="top">
      <h1 class="title">好奇心に殺される。</h1>
      <p class="sub">ソフトウェアエンジニア pon のブログサイト</p>
      <div class="top_sns">
        <a href="https://twitter.com/po3rin">
          <twitter-icon />
        </a>
        <a href="https://github.com/po3rin">
          <gh-icon />
        </a>
      </div>
    </section>
    <cards :blogs="blogs" />
  </div>
</template>

<script>
import Cards from '~/components/Cards'
import TwitterIcon from '~/components/sns/Twitter'
import GhIcon from '~/components/sns/GitHub'

export default {
  components: {
    Cards,
    TwitterIcon,
    GhIcon
  },
  async asyncData(context) {
    const res = await context.app.$axios.$get('/post?size=12')
    return { blogs: res.data }
  },
  methods: {
    push(id) {
      this.$router.push({ path: `/blog/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;
  &_sns {
    padding: 24px;
    width: 140px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

.title {
  padding: 0 12px;
  margin: 24px 0px;
  background: linear-gradient(transparent 70%, $main-color 0%);
  font-size: 1.6rem;
}

.sub {
  margin: 0px;
  font-size: 0.9rem;
}

@media screen and (max-width: 640px) {
  .top {
    padding-top: 96px;
  }
}
</style>
