<template>
  <div class="container">
    <div
      v-if="
        this.$route.query.tags !== '' &&
          this.$route.query.tags !== null &&
          this.$route.query.tags !== undefined
      "
      class="searched"
    >
      <p>
        🔍
        <span
          v-for="(tag, i) in this.$route.query.tags.split(',')"
          :key="i"
          class="searched_label"
          >{{ tag }}</span
        >
        タグの検索結果 !
      </p>
    </div>
    <cards :blogs="blogs" />
  </div>
</template>

<script>
import Cards from '~/components/Cards'
export default {
  components: {
    Cards
  },
  asyncData(context) {
    let tagsQuery = ''
    if (
      context.query.tags !== '' &&
      context.query.tags !== null &&
      context.query.tags !== undefined
    ) {
      tagsQuery = `&tags=${context.query.tags}`
    }

    return context.app.$axios
      .$get('api/v1/post?size=12' + tagsQuery)
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
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 84px;
  display: flex;
  flex-direction: column;
}
.searched {
  margin: auto;
  padding: 12px;
  &_label {
    background-color: $main-color;
    padding: 12px;
    margin: 4px;
  }
}

@media screen and (max-width: 640px) {
  .searched {
    padding: 16px;
    &_label {
      background-color: $main-color;
      padding: 12px;
      margin: 4px;
    }
  }
}
</style>
