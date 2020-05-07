<template>
  <div class="container">
    <div v-if="this.$route.query.tags != ''" class="searched">
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
  async asyncData(context) {
    let tagsQuery = ''
    if (context.query.tags !== '') {
      tagsQuery = `&tags=${context.query.tags}`
    }
    const res = await context.app.$axios.$get('api/v1/post?size=12' + tagsQuery)
    return { blogs: res.data }
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
  &_label {
    background-color: $main-color;
    padding: 12px;
    margin: 4px;
  }
}

@media screen and (max-width: 640px) {
  .searched {
    &_label {
      background-color: $main-color;
      padding: 12px;
      margin: 4px;
    }
  }
}
</style>
