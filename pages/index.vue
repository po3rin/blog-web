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
  asyncData(context) {
    return context.app.$axios
      .$get('api/v1/post?size=12')
      .then((res) => {
        return { blogs: res.data }
      })
      .catch((e) => {
        if (e.response === undefined) {
          context.error({
            statusCode: 500,
            message: 'Internal Server Error'
          })
          return
        }

        context.error({
          statusCode: e.response.status,
          message: 'Post not found'
        })
      })
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
  padding: 36px 0 12px;
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
    flex-direction: row;
    justify-content: space-around;
  }
}

.title {
  padding: 0 12px;
  margin: 24px 0px;
  background: linear-gradient(transparent 70%, $main-color 0%);
  font-size: 1.5rem;
}

.sub {
  margin: 0px;
  font-size: 0.9rem;
}

@media screen and (max-width: 640px) {
  .title {
    font-size: 1.2rem;
  }

  .top {
    height: 18vh;
    padding-top: 96px;
    &_sns {
      padding: 16px;
      width: 120px;
    }
  }
}
</style>
